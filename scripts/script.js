
// CONSTANTES
var ZONE_JEU_WIDTH = 480;
var ZONE_JEU_HEIGHT = 320;

// Variables
var context;
var joueur1 = new Joueur('joueur1',new Array());
var joueur2 = new Joueur('joueur2',new Array());
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
	plateau2 = getMap(10,15,joueur1,joueur2);//new Plateau(10,15);
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	
    canvas.addEventListener("mousemove", onMouseMove, false);
    canvas.addEventListener("mousedown", onMouseDown, false);

	joueur1.addPersonnage(getPersonnage(),1,0);
	joueur1.addPersonnage(getPersonnage(),1,4);
	joueur1.addPersonnage(getPersonnage(),2,3);
	
	joueur2.addPersonnage(getPersonnage(),3,3);
	
	joueur1.getPersonnage(0).lvlUp();
	
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
	plateau2.onMouseDown();
}

function refreshGame()
{
	plateau2.dessine(context);    	
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