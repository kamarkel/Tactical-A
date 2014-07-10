function Personnage(nom,nomImage,hp,spd,str,res,dex,agl) 
{
	this.nom = nom;	
	this.classFighter;
	
	this.niv = 1;
	this.xp = 0;
		/*
	this.def = 10;
	this.vit = 10;
	this.esq = 10;
	this.pre = 10;
	this.frc = 10;
	//*/
	
	
	/* characteristics */
	this.hpMax = hp+10;
	this.hp = this.hpMax;
	
	this.movement = 3;	
	this.range = 1;
	this.speed = spd+4;	
	this.strength = str+6;
	this.resistance = res+2;	
	this.dexterity = dex;
	this.agility = agl;
	this.volition = 0;
	
	/* Special */
	this.critical = 0;
	this.bleeding = 0;
	this.stun = 0;	
	this.criticalDefence = 0;
	this.bleedingDefence = 0;
	this.stunDefence = 0;	
	
	/* Gettor simple */
	this.getHp = function () { return this.hp; }
	this.getHpMax = function () { return this.hp; }
	this.getMov = function () { return this.movement; }
	this.getRng = function () { return this.range; }
	this.getSpd = function () { return this.speed; }
	this.getStr = function () { return this.strength; }
	this.getRes = function () { return this.resistance; }
	this.getDex = function () { return this.dexterity; }
	this.getAgl = function () { return this.agility; }
	this.getVol = function () { return this.volition; }
	
	/* Gettor calculated */
	this.getDodge = function() 
	{ 
		return this.getAgl()*2+this.getVol();
	}
	this.getHit = function() 
	{ 
		return this.getDex()*2+this.getSpd();
	}
	
	
	
	this.imageColors;		
	this.img = new Image();  
	this.img.src = "images/perso/"+nomImage;
	this.imgG = new Image();  
	this.imgG.src = "images/perso/g"+nomImage;
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
	
	
	
}