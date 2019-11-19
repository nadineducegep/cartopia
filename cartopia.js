		
				
		var herisson = new Herisson('T');
		var pieuvre = new Pieuvre('E');
        var fantome = new Fantome('R');
        var monstreVert = new MonstreVert('G');

		var parchemin = new Parchemin('T');
		var bouteille = new Bouteille('E');
		var cristal = new Cristal('R');
		var flocon = new Flocon('G');
		
		var citrouille = new Citrouille('T');
		var champignon = new Champignon('R');
		var chaise = new Chaise('G');
		var soucoupe = new Soucoupe('E');
		
		var coccinelle = new Coccinelle('E');
		
		var position = 0;
		
		function dessinerGrille(dessin)
		{
			dessin.beginPath();
			dessin.strokeStyle="#eeeeee";
			for(var colonne = 0; colonne < 20; colonne++)
			{			
				dessin.moveTo(colonne*50,0);
				dessin.lineTo(colonne*50,1000);
				dessin.stroke();
			}
			for(var ligne = 0; ligne < 20; ligne++)
			{			
				dessin.moveTo(0,ligne*50);
				dessin.lineTo(1000,ligne*50);
				dessin.stroke();
			}
		}
		
		function dessinerPersonnages()
		{
			dessin.clearRect(0, 0, 1000,650);
			dessin.drawImage(imageCarte,0,0);
			
			parchemin.afficher(dessin);			
			bouteille.afficher(dessin);
			cristal.afficher(dessin);
			flocon.afficher(dessin);
			
			citrouille.afficher(dessin);
			champignon.afficher(dessin);
			chaise.afficher(dessin);
			soucoupe.afficher(dessin);
			
			fantome.deplacer();
			fantome.afficher(dessin);
			herisson.deplacer();
			herisson.afficher(dessin);
			monstreVert.deplacer();
			monstreVert.afficher(dessin);
			pieuvre.deplacer();
			pieuvre.afficher(dessin);
		
			coccinelle.deplacer();
			coccinelle.afficher(dessin);
		
			dessinerGrille(dessin);
			window.requestAnimationFrame(dessinerPersonnages);
		}
