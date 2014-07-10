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
}