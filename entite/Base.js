// Image originale : 
// Auteur : 
var Base = function(colonne,rangee)
{
	this.terrain = 'T';
	this.pas = [5,5];
	this.xPixel = ((colonne)?colonne*50:0);
	this.yPixel = ((rangee)?rangee*50:0);
	instanceBase = this;
	//this.orienter = function(pas)
	//{
	//	instance.pas = pas;
	//}
	
	this.initialiser = function()
	{
		
	}
	this.initialiser();
	
	this.deplacer = function()
	{
		aDeplacer = instanceBase;
		aDeplacer.xPixel += aDeplacer.pas[0];
		aDeplacer.yPixel += aDeplacer.pas[1];
		colonne = Math.floor(aDeplacer.xPixel/50) + 1;
		rangee = Math.floor(aDeplacer.yPixel/50) + 1;
		if(colonne < 22 && rangee < 15)
		{			
			terreMarchee = cartographie[rangee][colonne];
			//document.getElementById('message').innerHTML = terreMarchee;
			if(terreMarchee != instanceBase.terrain)
			{
				this.pas = [-this.pas[0],-this.pas[1]];			
			}
		}
	}
	
	this.afficher = function(dessin)
	{
	
		// inserer ce ccode apres le premier dessin.save();
		dessin.translate(instanceBase.xPixel, instanceBase.yPixel);
		dessin.scale(1,1);

	}
}