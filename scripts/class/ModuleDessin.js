
    var DrawingPanel = function() { }
	
    // Méthode static
    DrawingPanel.dessineCarteID = function(context,personnage,x,y)
    {
		context.fillStyle="#00cccc";
		context.globalAlpha=0.8;
		context.fillRect(x,y,96,64);
		context.globalAlpha=1;
		
		context.drawImage(personnage.img, x,y);
		personnage.imageData = context.getImageData(x,y, personnage.img.width, personnage.img.height);
		getColorData(personnage,personnage.imageData ,x,y) ;
		context.putImageData(personnage.imageData , x, y);
			
		context.fillStyle="#000000";
		context.fillText('hp : '+personnage.getHp(),x+32,y+12*1);
		context.fillText('frc : '+personnage.getStr(),x+32,y+12*2);
		context.fillText('def : '+personnage.getRes(),x+32,y+12*3);
    }