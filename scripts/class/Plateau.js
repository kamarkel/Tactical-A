function Plateau(maxI,maxJ)
{
	this.cases = new Array();
	this.img1 = new Image();  
	this.img1.src = "images/tiles/T-S-Urbain.png";
	this.img2 = new Image();  
	this.img2.src = "images/tiles/O-S-Urbain.png";
	for(i=0;i<maxI;i++)
	{
		this.cases.push(new Array());
		for(j=0;j<maxJ;j++)
		{
			this.cases[i].push(new Case(i,j));
		}
	}
	this.eteindre = function()
	{		
		for(i=0;i<this.cases.length;i++)
		{
			for(j=0;j<this.cases[i].length;j++)
			{
				this.cases[i][j].allume = false;
				this.cases[i][j].allumeRouge = false;
			}
		}
	}
	
	this.dessine = function (context)
	{
		for(key in this.cases)
		{		
			for(key2 in this.cases[key])
			{
				context.fillRect(key2*32,key*32,32,32);
				this.cases[key][key2].dessine(context,this.img1,this.img2);				
			}
		}
	}
	
		
	this.allumerRouge = function (portee,i,j)
	{
		if(portee>0)
		{
		
			//haut		
			if(	i-1>=0)
			{		
				plateau2.cases[i-1][j].allumeRouge = true;
				this.allumerRouge(portee-1,i-1,j);
			}
			//droite
			if(	j+1<15)
			{
				plateau2.cases[i][j+1].allumeRouge = true;
				this.allumerRouge(portee-1,i,j+1);
			}
			//bas
			if(	i+1<10)
			{	
				plateau2.cases[i+1][j].allumeRouge = true;
				this.allumerRouge(portee-1,i+1,j);
			}
			//gauche
			if(	j-1>=0)
			{
				plateau2.cases[i][j-1].allumeRouge = true;
				this.allumerRouge(portee-1,i,j-1);	
			}
		}
	}
}