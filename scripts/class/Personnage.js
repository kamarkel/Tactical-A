function Personnage(name,nomImage,className,hp,spd,str,res,dex,agl) 
{
	this.name = name;	
	this.className = className;
	
	this.lvl = 1;
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
//hp0,spd1,str2,res3,dex4,agl5
	this.getName = function () { return this.name; }
	this.getLvl = function () { return this.lvl; }
	this.getXp = function () { return this.xp; }
	
	this.getHp = function () { return this.hp; }
	this.getHpMax = function () { return this.hpMax; }
	this.getSpd = function () { return this.speed; }
	this.getStr = function () { return this.strength; }
	this.getRes = function () { return this.resistance; }
	this.getDex = function () { return this.dexterity; }
	this.getAgl = function () { return this.agility; }
	
	this.getMov = function () { return this.movement; }
	this.getRng = function () { return this.range; }
	this.getVol = function () { return this.volition; }
	this.getClass = function () { return this.className; }
	
	/* Gettor calculated */
	this.getDodge = function() 
	{ 
		return this.getAgl()*2+this.getVol();
	}
	this.getHit = function() 
	{ 
		return this.getDex()*2+this.getSpd();
	}
	
	this.isHitted = function(defender)
	{
		ran = Math.random();
		x = this.getHit()/defender.getDodge()+this.getHit();
		return (ran<x)?true:false;
	}
	this.getDmg = function(defender) 
	{ 
		nb = this.getStr()-defender.getRes();
		return (nb>0)?nb:1;
	}
	
	this.attaque = function (defender)
	{
		if(this.isHitted(defender))
		{
			x = this.getDmg(defender);
			defender.decreaseHp(x);
			return x;
		}
		return "Miss";
	}
	
	this.getXpOwned = function(personnage) 
	{ 
		x = 0;
		if(this.getLvl()>peronnage.getLvl())
		{
			x = this.getLvl()-peronnage.getLvl()*18;
		}
		x+=(this.getDodge()+this.getHit())/(2*peronnage.getLvl());
		return Math.floor(x);
	}
	
	this.addXp = function(xp) 
	{ 
		this.xp+=xp;
		while(this.xp>=100)
		{
			this.lvlUp();
			this.xp-=100;
		}
	}
	
	
	this.lvlUp = function() 
	{ 
		this.lvl++;
		nums = PersonnageFactory.getAtrNum(this.getClass());	
		array = makeArray(generateTab(3,4),generateTab(3,2),nums[0],nums[1]);
		
		this.addHpMax(array[0]*2);
		this.addSpd(array[1]);
		this.addStr(array[2]);
		this.addRes(array[3]);
		this.addDex(array[4]);
		this.addAgl(array[5]);
	}
	
	/* Gettor simple */
	this.addHp = function(x) {  this.hp+=x; }
	this.addHpMax = function(x) {  this.hpMax+=x; }
	this.addSpd = function(x) {  this.speed+=x; }
	this.addStr = function(x) {  this.strength+=x; }
	this.addRes = function(x) {  this.resistance+=x; }
	this.addDex = function(x) {  this.dexterity+=x; }
	this.addAgl = function(x) {  this.agility+=x; }
	
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