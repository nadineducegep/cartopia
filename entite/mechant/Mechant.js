var Mechant = function(terrain)
{
	this.terrain = terrain;
	positionTerrain = trouverPositionTerrain(this.terrain);
	//console.log('position ' + positionTerrain['rangee'] + ' ' + positionTerrain['colonne']);
	this.rangee = positionTerrain['rangee'];
	this.colonne = positionTerrain['colonne'];
	this.xPixel = ((this.colonne)?this.colonne*50:0);
	this.yPixel = ((this.rangee)?this.rangee*50:0);
};
Mechant.prototype.pas = [5,5];
Mechant.prototype.deplacer = function()
{
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
		

