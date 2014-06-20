function setChaussures(myImage,i,color) 
{
	switch(color)
	{
		case 'bleuC' : 
			changeColor(myImage,i,34,34,34,96,115,255);
			changeColor(myImage,i,17,17,17,73,89,193);
		break;					
		case 'noir' : 
			changeColor(myImage,i,34,34,34,68,68,68);
			changeColor(myImage,i,17,17,17,51,51,51);
		break;
		case 'rouge' : 
			changeColor(myImage,i,34,34,34,200,40,40);
			changeColor(myImage,i,17,17,17,180,30,30);
		break;
		case 'gris' : 
			changeColor(myImage,i,34,34,34,200,200,200);
			changeColor(myImage,i,17,17,17,180,180,180);
		break;
	}
}

function setPantalon(myImage,i,color) 
{
	switch(color)
	{
		case 'bleuC' : 
			changeColor(myImage,i,68,119,136,96,115,255);
			changeColor(myImage,i,51,85,102,73,89,193);
		break;					
		case 'noir' : 
			changeColor(myImage,i,68,119,136,68,68,68);
			changeColor(myImage,i,51,85,102,51,51,51);
		break;
		case 'rouge' : 
			changeColor(myImage,i,68,119,136,200,40,40);
			changeColor(myImage,i,51,85,102,180,30,30);
		break;
		case 'gris' : 
			changeColor(myImage,i,68,119,136,200,200,200);
			changeColor(myImage,i,51,85,102,180,180,180);
		break;
	}
}


function setTShirt(myImage,i,color) 
{	
	switch(color)
	{
		case 'peauBlanc' : 
			changeColor(myImage,i,240,240,240,255,204,170);
			changeColor(myImage,i,206,206,206,255,187,153);
		break;
		case 'peauMetisse' : 
			changeColor(myImage,i,240,240,240,176,89,35);
			changeColor(myImage,i,206,206,206,142,61,31);
		break;
		case 'peauBrunF' : 
			changeColor(myImage,i,240,240,240,100,40,20);
			changeColor(myImage,i,206,206,206,80,30,10);
		break;
		case 'peauNoir' : 
			changeColor(myImage,i,240,240,240,79,53,36);
			changeColor(myImage,i,206,206,206,68,40,26);
		break;
		case 'noir' : 
			changeColor(myImage,i,240,240,240,68,68,68);
			changeColor(myImage,i,206,206,206,51,51,51);
		break;
		case 'rouge' : 
			changeColor(myImage,i,240,240,240,200,40,40);
			changeColor(myImage,i,206,206,206,180,30,30);
		break;
		case 'bleuC' : 
			changeColor(myImage,i,240,240,240,96,115,255);
			changeColor(myImage,i,206,206,206,73,89,193);
		break;		
		case 'gris' : 
			changeColor(myImage,i,240,240,240,200,200,200);
			changeColor(myImage,i,206,206,206,180,180,180);
		break;
	}
}


function setPeau(myImage,i,color) 
{	
	switch(color)
	{
		case 'blanc' : 
			changeColor(myImage,i,255,196,130,255,204,170);
			changeColor(myImage,i,204,153,102,255,187,153);
		break;
		case 'metisse' : 
			changeColor(myImage,i,255,196,130,176,89,35);
			changeColor(myImage,i,204,153,102,142,61,31);
		break;
		case 'brunF' : 
			changeColor(myImage,i,255,196,130,100,40,20);
			changeColor(myImage,i,204,153,102,80,30,10);
		break;
		case 'noir' : 
			changeColor(myImage,i,255,196,130,79,53,36);
			changeColor(myImage,i,204,153,102,68,40,26);
		break;
	}
	return myImage;
}



function setCheveux(myImage,i,color) 
{
	switch(color)
	{
		case 'blond' : 
			changeColor(myImage,i,68,68,68,235,175,80);
			changeColor(myImage,i,51,51,51,221,152,42);
		break;
		case 'roux' : 
			changeColor(myImage,i,68,68,68,201,118,40);
			changeColor(myImage,i,51,51,51,176,86,33);
		break;
		case 'brunC' : 
			changeColor(myImage,i,68,68,68,176,89,35);
			changeColor(myImage,i,51,51,51,142,61,31);
		break;
		case 'brunF' : 
			changeColor(myImage,i,68,68,68,79,53,36);
			changeColor(myImage,i,51,51,51,68,40,26);
		break;
	}
}



function changeColor(myImage,i,oldRed,oldGreen,oldBlue,newRed,newGreen,newBlue)
{
	if( myImage.data[i] == oldRed &&
		myImage.data[i+1] == oldGreen &&
		myImage.data[i+2] == oldBlue )
	{
		myImage.data[i] = newRed;
		myImage.data[i+1] = newGreen;
		myImage.data[i+2] = newBlue;
	}
}