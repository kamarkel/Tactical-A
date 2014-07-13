
    var DrawingPanel = function() { }
	
    // Méthode static
    DrawingPanel.dessineCarteID = function(context,pers,x,y)
    {
		context.fillStyle="#ccccaa";
		//context.globalAlpha=0.8;
		context.fillRect(x,y+4,96,96-4);
		context.fillStyle="#ffcc44";
		context.fillRect(x,y-8,96,12);
		context.globalAlpha=1;
		//context.strokeStyle="rgba(255,204,68,1)";
		context.strokeRect(x-1,y+3,96+1,96-2);		
		context.strokeRect(x-1,y-9,96+1,12);//*/
		
		
		context.drawImage(pers.img, x,y+4);
		pers.imageData = context.getImageData(x,y+4, pers.img.width, pers.img.height);
		getColorData(pers,pers.imageData ,x,y+4) ;
		context.putImageData(pers.imageData , x, y+4);
			
		context.fillStyle="#000000";
		context.font = "10px Courier";
		context.fillText(pers.getClass(),x+32,y);
		context.fillText(pers.getName(),x+32,y+12*1);
		context.fillText('lvl:'+pers.getLvl(),x+32,y+12*2);		
		context.fillText('xp: '+pers.getXp()+'/100',x+32,y+12*3);
		context.fillText('hp: '+pers.getHp()+"/"+pers.getHpMax(),x+8,y+12*4);
		context.fillText('spd:'+pers.getSpd(),x+8,y+12*5);
		context.fillText('mov:'+pers.getMov(),x+48,y+12*5);
		context.fillText('str:'+pers.getStr(),x+8,y+12*6);
		context.fillText('res:'+pers.getRes(),x+48,y+12*6);
		context.fillText('dex:'+pers.getDex(),x+8,y+12*7);
		context.fillText('agl:'+pers.getAgl(),x+48,y+12*7);
    }