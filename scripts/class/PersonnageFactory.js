function getPersonnage()
{
	className = generateClassName();
	values = generateClass(className);
	personnage = new Personnage(generateName(),generateNomImage(),
	values[0]*2,values[1],values[2],values[3],values[4],values[5]);
	personnage.imageColors = generateImageColor();
	return personnage;
}

function generateName()
{
	return 'Arthur';
}

function generateNomImage()
{
	i = Math.floor(Math.random()*5)+1;
	return 'perso'+i+'.png';
}

function generateClassName()
{
	tabClasses = ['street','kendo','karate','football','baseball','boxe'];
	i = Math.floor(Math.random()*tabClasses.length);
	return tabClasses[i];
}

function generateTab(nb)
{
	tab = [0,0,0,0,0,0];
	var v;
	for(var i=0;i<nb;i++)
	{
		v = Math.floor(Math.random()*tab.length);
		tab[v]++;
	}
	return tab;
}

function generateClass(className)
{
	tabValue = generateTab(10);
	tabValue.sort( function (a, b) {  return b - a;});
	switch(className)
	{
		case 'street': i1=0;i2=3;	break;
		case 'kendo': i1=4;i2=5;	break;
		case'karate': i1=1;i2=3;	break;
		case'football': i1=0;i2=2;	break;
		case'baseball': i1=1;i2=4;	break;
		case'boxe': i1=2;i2=5;	break;
	}	
	return generateValues(tabValue,i1,i2);
}


function shuffle(tabValue)
{
	x=0;
	while(x<100)
	{
		tabValue.sort( function(a,b) {
            return Math.round( Math.random() * 2 ) - 1;
        });
		x++;
	}
	return tabValue;
}


function makeArray(array1,array2,i1,i2)
{
	retArray = new Array();	
	for(i=0;i<6;i++)
	{
		if(i==i1 || i==i2)
		{
			retArray.push(array2[0]);
			array2.splice(0,1);
		}
		else
		{		
			retArray.push(array1[0]);
			array1.splice(0,1);		
		}
	}
	return retArray;	
}

//hp0,spd1,str2,res3,dex4,agl5
function generateValues(tabValue,i1,i2)
{
	tabMax = new Array();
	i = Math.floor(Math.random()*2);
	tabMax.push(tabValue[i]);
	tabMax.push(tabValue[1-i]);
	tabValue.splice (0,2);
	tabValue = shuffle(tabValue);
	return makeArray(tabValue,tabMax,i1,i2);	
}