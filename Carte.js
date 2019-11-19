		var cartographie = [];
		cartographie[0] = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'];
		cartographie[1] = ['O', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'O'];
		cartographie[2] = ['O', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'O'];
		cartographie[3] = ['O', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'O'];
		cartographie[4] = ['O', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'O'];
		cartographie[5] = ['O', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'O'];
		cartographie[6] = ['O', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'O'];
		cartographie[7] = ['O', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'O'];
		cartographie[8] = ['O', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'O'];		
		cartographie[9] = ['O', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'O'];
		cartographie[10] = ['O', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'O'];
		cartographie[11] = ['O', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'O'];
		cartographie[12] = ['O', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'O'];
		cartographie[13] = ['O', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'O'];
		cartographie[14] = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'];

		var imageCarte = new Image();
		
		function dessinerCarte(dessin)
		{
			// Charger l'image
			imageCarte.src = 'carte.svg';
			imageCarte.width = '800';
			imageCarte.height = '500';
			imageCarte.onload = function()
			{
				//imageCarte.setDocumentWidth(100);
				//imageCarte.renderToCanvas(document.getElementById('carte'));
				dessin.drawImage(imageCarte,0,0);
			}
		}
