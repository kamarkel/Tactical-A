function Plateau(maxI,maxJ,player1,player2)
{
	this.cases = new Array();
	this.img1 = new Image();  
	this.img1.src = "images/tiles/T-S-Urbain.png";
	this.img2 = new Image();  
	this.img2.src = "images/tiles/O-S-Urbain.png";
	this.fightMessages = new Array();
	this.tourJ1 = true;
	
	// not used yet
	this.player1 = player1;
	this.player2 = player2;
		
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
	
	
	
	this.dessineCase = function (context)
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
	this.dessineFightMessages = function (context)
	{
		for(index in this.fightMessages)
		{		
			message = this.fightMessages[index];
			message.dessine(context);	
			if(message.timePassed<=0)
			{
				this.fightMessages.splice(index, 1);
			}
			
			
		}
	}		
	
	
	
	
	
	
	
	this.dessine = function (context)
	{
	this.dessineCase(context);	
		joueur1.dessine(context);		
		joueur2.dessine(context);
		
		this.dessineFightMessages(context);
		
		
		
		context.globalAlpha=0.2;
		context.fillRect(cursorPosition.J*32,cursorPosition.I*32,32,32);
		context.globalAlpha=1;
		if(selectedPersonnage != null)
		{
			if(selectedPersonnage.getJ()>7)		
				DrawingPanel.dessineCarteID(context,selectedPersonnage,16,16);
			else
				DrawingPanel.dessineCarteID(context,selectedPersonnage,15*32-12-96,16);
		}
		else
		{
			temp  = getPersonnageOn(cursorPosition.I,cursorPosition.J);
			if(temp.getJ()>7)
				DrawingPanel.dessineCarteID(context,temp,16,16);
			else
				DrawingPanel.dessineCarteID(context,temp,15*32-12-96,16);
		}		
	}
	
	this.allumerRouge = function (portee,i,j)
	{	
		this.cases[i][j].allumeRouge = true;
		if(portee>0)
		{				
			if(	i-1>=0) { this.allumerRouge(portee-1,i-1,j); } //up
			if(	j+1<15) { this.allumerRouge(portee-1,i,j+1); } //right	
			if(	i+1<10) { this.allumerRouge(portee-1,i+1,j); } //down
			if(	j-1>=0) { this.allumerRouge(portee-1,i,j-1); } //left
		}
	}
	
	this.showWay = function(mov,i,j)
	{
		this.cases[i][j].allume = true;
		if(mov>0)
		{					
			if(	i-1>=0) { this.showWay(mov-1,i-1,j); } //up	
			if(	j+1<15) { this.showWay(mov-1,i,j+1); } //right
			if(	i+1<10) { this.showWay(mov-1,i+1,j); } //down
			if(	j-1>=0) { this.showWay(mov-1,i,j-1); } //left
		}
		else { this.allumerRouge(1,i,j); }
	}
	
	
	this.onMouseDown = function(event) 
	{
		activePlayer  = (this.tourJ1)?joueur1:joueur2;
		passivePlayer = (this.tourJ1)?joueur2:joueur1;
		
		if( selectedPersonnage == null )
		{
			selectedPersonnage = activePlayer.getPersonnageOn(cursorPosition.I,cursorPosition.J);
			if( selectedPersonnage != null)
			{
				if(selectedPersonnage.actif)
					this.showWay(selectedPersonnage.getMov(),selectedPersonnage.getI(),selectedPersonnage.getJ());	
				else
					selectedPersonnage = null;
			
			}
		}
		else
		{
			temp  = getPersonnageOn(cursorPosition.I,cursorPosition.J);
			if(phaseNum == 0)
			{
				if(temp == null || temp == selectedPersonnage)
				{
					if(this.cases[cursorPosition.I][cursorPosition.J].allume == true)
					{
						selectedPersonnage.setPosition(cursorPosition.I,cursorPosition.J);
						this.eteindre();					
						this.allumerRouge(selectedPersonnage.getRng(),selectedPersonnage.getI(),selectedPersonnage.getJ());
						phaseNum = 1;						
					}
				}	
			}	
			else
			{
				if(temp !=null)
				{
					if(this.cases[cursorPosition.I][cursorPosition.J].allumeRouge == true || temp == selectedPersonnage)
					{
						if(temp != selectedPersonnage)
						{
							text = selectedPersonnage.attaque(temp);
							var x = temp.x+8;
							var y =temp.y+16;
							this.fightMessages.push(new FightMessage(text,x,y,-4,-16,20));
						}
					
						this.eteindre();
						selectedPersonnage.actif = false;
						selectedPersonnage = null;
						phaseNum = 0;
					}
				}
			}
		}
		
		if(!activePlayer.canPlay())
		{
			this.tourJ1 =!(this.tourJ1);
			activePlayer.activerPersonnages();
		}
	}
	
	
}