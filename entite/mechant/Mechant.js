var Mechant = function(colonne, rangee)
{
	this.colonne = colonne;
	this.rangee = rangee;
	this.xPixel = ((colonne)?colonne*50:0);
	this.yPixel = ((rangee)?rangee*50:0);
};
Mechant.prototype.colonne;
Mechant.prototype.rangee;
Mechant.prototype.terrain = 'T';
Mechant.prototype.xPixel = 0;//((colonne)?colonne*50:0);
Mechant.prototype.yPixel = 0;//((rangee)?rangee*50:0);
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
