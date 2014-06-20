function Arme(nom) 
{
	this.nom = nom;
	this.setPosition = function (i,j)//context
	{
		this.y = i*32;
		this.x = j*32;
	}
	
	this.dessine = function (context)//context
	{		
		if(this.actif )
		{
			context.drawImage(this.img, this.x, this.y);
			this.imageData = context.getImageData(this.x,this.y, this.img.width, this.img.height);
			getColorData(this,this.imageData ,this.x,this.y) ;
			context.putImageData(this.imageData , this.x, this.y);
		}
		else
		{		
			context.drawImage(this.imgG, this.x, this.y);
		}
	}
	
	this.dessineCarteID = function (context,x,y)//context
	{		
		context.fillStyle="#00cccc";
		context.globalAlpha=0.8;
		context.fillRect(x,y,96,64);
		context.globalAlpha=1;
		
		context.drawImage(this.img, x,y);
		this.imageData = context.getImageData(x,y, this.img.width, this.img.height);
		getColorData(this,this.imageData ,x,y) ;
		context.putImageData(this.imageData , x, y);
			
		context.fillStyle="#000000";
		context.fillText('hp : '+this.hp,x+32,y+12*1);
		context.fillText('frc : '+this.frc,x+32,y+12*2);
		context.fillText('def : '+this.def,x+32,y+12*3);
	}
}