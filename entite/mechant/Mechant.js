var Mechant = function(terrain)
{
	this.terrain = terrain;
	
	this.iteration = 0;
	this.calques = 1;
	this.pasAnime = 10;

	positionTerrain = trouverPositionTerrain(this.terrain);
	//console.log('position ' + positionTerrain['rangee'] + ' ' + positionTerrain['colonne']);
	this.rangee = positionTerrain['rangee'];
	this.colonne = positionTerrain['colonne'];
	this.xPixel = ((this.colonne)?this.colonne*50:0);
	this.yPixel = ((this.rangee)?this.rangee*50:0);
};

Mechant.prototype.calculerCalque = function()
{
	var duree = this.calques*this.espace;
	var avancement = this.iteration%duree;
	for(var instant = 1; instant <= this.calques; instant++)
	{
		if (avancement > duree/this.calques*instant) return instant;			
	}
	return 0;
}

Mechant.prototype.pas = [1,1];
Mechant.prototype.deplacer = function()
{
	this.iteration++;
	aDeplacer = this;
	//alert(this.instanceHerisson);
	aDeplacer.xPixel += aDeplacer.pas[0];
	aDeplacer.yPixel += aDeplacer.pas[1];
	aDeplacer.colonne = Math.floor(aDeplacer.xPixel/50) + 1;
	aDeplacer.rangee = Math.floor(aDeplacer.yPixel/50) + 1;
	if(aDeplacer.colonne < 22 && aDeplacer.rangee < 15)
	{			
		terreMarchee = cartographie[aDeplacer.rangee][aDeplacer.colonne];
		//document.getElementById('message').innerHTML = terreMarchee;
		if(terreMarchee != aDeplacer.terrain)
		{
			this.pas = [-this.pas[0],-this.pas[1]];			
		}
	}
}

function trouverPositionTerrain(terrainRecherche)
{
	for(rangeeCourante = 0; rangeeCourante < cartographie.length; rangeeCourante++)
	{
		for(colonneCourante = 0; colonneCourante < cartographie[rangeeCourante].length; colonneCourante++)
		{
			if(cartographie[rangeeCourante][colonneCourante] == terrainRecherche)
				return {rangee:rangeeCourante, colonne:colonneCourante};
		}
	}
}

//this.orienter = function(pas)
//{
//	instance.pas = pas;
//}
		

