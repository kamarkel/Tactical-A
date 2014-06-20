
// CONSTANTES
var ZONE_JEU_WIDTH = 480;
var ZONE_JEU_HEIGHT = 320;

// Variables
var context;
var joueur1 = new Joueur('joueur1',new Array());
var joueur2 = new Joueur('joueur2',new Array());
var tourJ1 = true;
/*******************************************************************************************************/		
/***************									INIT									************/	
/*******************************************************************************************************/

var picWidth = 32; 
var picHeight = 32; 
var picLength = picWidth * picHeight;

var cursorPosition;
var selectedPersonnage;
var phaseNum = 0;
var boxes;
var canvas;
var plateau;


$(document).ready(function() 
{

	plateau2 = getMap(10,15);//new Plateau(10,15);
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	
    canvas.addEventListener("mousemove", onMouseMove, false);
    canvas.addEventListener("mousedown", onMouseDown, false);

	joueur1.addPersonnage(getPersonnage(),1,0);
	joueur1.addPersonnage(getPersonnage(),1,4);
	joueur1.addPersonnage(getPersonnage(),2,3);
	
	
	joueur2.addPersonnage(getPersonnage(),8,10);
	joueur2.addPersonnage(getPersonnage(),9,8);

	
	boucleJeu = setInterval(refreshGame,40);
});

// Get the current position of the mouse within the provided canvas
function getMousePos(event) 
{
    var rect = canvas.getBoundingClientRect();

    if (event.pageX != undefined && event.pageY != undefined) 
	{
        x = event.pageX;
        y = event.pageY;
    } 
	else 
	{
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
        X: x - rect.left,
        Y: y - rect.top
    };
}

function onMouseMove(event) 
{
    var mousePos = getMousePos(event);
    var message = mousePos.X + ',' + mousePos.Y;
	cursorPosition ={  X: mousePos.X , Y: mousePos.Y ,J: Math.floor(mousePos.X / 32), I: Math.floor(mousePos.Y / 32)   };
	cursorPosition ={  X: mousePos.X , Y: mousePos.Y ,J: Math.floor(mousePos.X / 32), I: Math.floor(mousePos.Y / 32)   };
}
function getPersonnageOn(i,j)
{
	return joueur1.getPersonnageOn(i,j) || joueur2.getPersonnageOn(i,j);
}
function onMouseDown(event) 
{
	if(tourJ1)
	{
		if( selectedPersonnage == null )
		{
			selectedPersonnage = joueur1.getPersonnageOn(cursorPosition.I,cursorPosition.J);
			if( selectedPersonnage != null)
			{
				if(selectedPersonnage.actif)
					setCheminPossible(selectedPersonnage.mov,selectedPersonnage.getI(),selectedPersonnage.getJ());	
				else
					selectedPersonnage = null;
			
			}
		}
		else
		{
			temp  = getPersonnageOn(cursorPosition.I,cursorPosition.J);
			if(phaseNum == 0)
			{
				if(temp ==null || temp == selectedPersonnage)
				{
					if(plateau2.cases[cursorPosition.I][cursorPosition.J].allume == true)
					{
						selectedPersonnage.setPosition(cursorPosition.I,cursorPosition.J);
						plateau2.eteindre();					
						plateau2.allumerRouge(selectedPersonnage.portee,selectedPersonnage.getI(),selectedPersonnage.getJ());
						phaseNum = 1;						
					}
				}	
			}	
			else
			{
				if(temp !=null)
				{
					if(plateau2.cases[cursorPosition.I][cursorPosition.J].allumeRouge == true || temp == selectedPersonnage)
					{
						if(temp != selectedPersonnage)
						{
							selectedPersonnage.attaque(temp);
						}
					
						plateau2.eteindre();
						selectedPersonnage.actif = false;
						selectedPersonnage = null;
						phaseNum = 0;
					}
				}
			}
		}
		
		if(!joueur1.canPlay())
		{
			tourJ1 =false;
			joueur1.activerPersonnages();
		}
	}
	else
	{
		if( selectedPersonnage == null )
		{
			selectedPersonnage = joueur2.getPersonnageOn(cursorPosition.I,cursorPosition.J);
			if( selectedPersonnage != null)
			{
				if(selectedPersonnage.actif)
					setCheminPossible(selectedPersonnage.mov,selectedPersonnage.getI(),selectedPersonnage.getJ());	
				else
					selectedPersonnage = null;			
			}
		}
		else
		{
			temp  = getPersonnageOn(cursorPosition.I,cursorPosition.J);
			if(temp == null || temp == selectedPersonnage)
			{
				if(plateau2.cases[cursorPosition.I][cursorPosition.J].allume == true)
				{
					selectedPersonnage.setPosition(cursorPosition.I,cursorPosition.J);
					selectedPersonnage.actif = false;
					selectedPersonnage = null;
					plateau2.eteindre();
					if(!joueur2.canPlay())
					{
						tourJ1 =true;
						joueur2.activerPersonnages();
					}
				}
			}		
		}
	}
}



function setCheminPossible(mov,i,j)
{
	if(mov>0)
	{	
		//haut		
		if(	i-1>=0)
		{		
			plateau2.cases[i-1][j].allume = true;
			setCheminPossible(mov-1,i-1,j);
		}
		//droite
		if(	j+1<15)
		{
			plateau2.cases[i][j+1].allume = true;
			setCheminPossible(mov-1,i,j+1);
		}
		//bas
		if(	i+1<10)
		{	
			plateau2.cases[i+1][j].allume = true;
			setCheminPossible(mov-1,i+1,j);
		}
		//gauche
		if(	j-1>=0)
		{
			plateau2.cases[i][j-1].allume = true;
			setCheminPossible(mov-1,i,j-1);	
		}
	}
	else
	{	
		//haut		
		if(	i-1>=0)
		{		
			plateau2.cases[i-1][j].allumeRouge = true;
		}
		//droite
		if(	j+1<15)
		{
			plateau2.cases[i][j+1].allumeRouge = true;
		}
		//bas
		if(	i+1<10)
		{	
			plateau2.cases[i+1][j].allumeRouge = true;
		}
		//gauche
		if(	j-1>=0)
		{
			plateau2.cases[i][j-1].allumeRouge = true;
		}
	}
}

function refreshGame()
{
	//cadrillage(context);
	
    context.globalAlpha=1;
	
	plateau2.dessine(context);

	joueur1.dessine(context);
	
	joueur2.dessine(context);
    context.globalAlpha=0.2;
    context.fillRect(cursorPosition.J*32,cursorPosition.I*32,32,32);
    context.globalAlpha=1;
	if(selectedPersonnage != null)
	{
		if(selectedPersonnage.getJ()>7)
			selectedPersonnage.dessineCarteID(context,16,16);
		else
			selectedPersonnage.dessineCarteID(context,15*32-12-96,16);
	}
	else
	{
		temp  = getPersonnageOn(cursorPosition.I,cursorPosition.J);
		if(temp.getJ()>7)
			temp.dessineCarteID(context,16,16);
		else
			temp.dessineCarteID(context,15*32-12-96,16);
	}
		
}

	function getColorData(personnage,imageData,x,y)
	{
		var data = imageData.data;
		var imgCol = personnage.imageColors;

		for(var i = 0; i < data.length; i += 4) 
		{			
			setPeau(imageData,i,imgCol.skinColor);		
			setCheveux(imageData,i,imgCol.hairColor); 		
			setTShirt(imageData,i,imgCol.shirtColor);	
			setPantalon(imageData,i,imgCol.trousersColor); 
			setChaussures(imageData,i,imgCol.shoesColor); 
			
			// yeux
			changeColor(imageData,i,0,19,125,125,19,0);
			changeColor(imageData,i,188,190,219,219,190,188);					
		}
		return imageData;
    }