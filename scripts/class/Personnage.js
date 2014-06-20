function Personnage(nom,nomImage) 
{
	this.nom = nom;
	
	this.mov = 3;
	this.classFighter;
	this.portee = 1;
	this.frc = 6;
	this.def = 2;
	this.vit = 4;
	
	
	this.crt = 0;
	this.sgn = 0;
	this.cnf = 0;
	
	this.clp = 2;
	
	this.niv = 1;
	this.xp = 0;
	
	this.hp = 10;
	this.hpMax = 10;
	
	this.imageColors;		
	this.img = new Image();  
	this.img.src = "images/"+nomImage;
	this.imgG = new Image();  
	this.imgG.src = "images/g"+nomImage;
	this.actif = true;
	this.x;
	this.y;
	this.setPosition = function (i,j)//context
	{
		this.y = i*32;
		this.x = j*32;
	}
	this.attaque = function (defender)
	{
		defender.decreaseHp(this.frc-defender.def);
	}
	this.decreaseHp = function(n)
	{
		this.hp-=n;
		this.hp=(this.hp<0)?0:this.hp;
	}
	this.getI = function () { return Math.floor(this.y/32);}
	this.getJ = function () { return Math.floor(this.x/32);}
	this.getY = function () { return this.y;}
	this.getX = function () { return this.x;}
	
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