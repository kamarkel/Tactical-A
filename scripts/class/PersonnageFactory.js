function getPersonnage()
{
	personnage = new Personnage(generateName(),generateNomImage());
	personnage.imageColors = generateImageColor();
	generateClass(personnage);
	return personnage;
}

function generateNomImage()
{
	i = Math.floor(Math.random()*5)+1;
	return 'perso/perso'+i+'.png';
}

function generateName()
{
	return 'Arthur';
}

function generateClass(personnage)
{
	tabValue = [0,0,0,0,0,0];
	var v;
	for(var i=0;i<10;i++)
	{
		v = Math.floor(Math.random()*tabValue.length);
		tabValue[v]++;
	}

	calculerClasse(tabValue);
	tabClasses = ['street','kendo','karate','football','baseball','boxe'];
	
	i = Math.floor(Math.random()*tabClasses.length);
	personnage.fighterClass = tabClasses[i];
	tabValue.sort( function (a, b) {  return b - a;});
	x=0;
	switch(personnage.fighterClass)
	{
		case 'street': generateStreet(personnage,tabValue);	break;
		case 'kendo': generateKendo(personnage,tabValue);	break;
		case'karate': generateKarate(personnage,tabValue);	break;
		case'football': generateFootball(personnage,tabValue);	break;
		case'baseball': generateBaseball(personnage,tabValue);	break;
		case'boxe': generateBoxe(personnage,tabValue);	break;
	}
	
	return personnage;
}


function shuffle(tabValue)
{

	while(x<100)
	{
		tabValue.sort( function(a,b) {
            return Math.round( Math.random() * 2 ) - 1;
        });
		x++;
	}
	return tabValue;
}
function generateStreet(personnage,tabValue)
{

	i = Math.floor(Math.random()*2);
	personnage.hp  += tabValue[i]*2;
	personnage.def += tabValue[1-i];	
	tabValue.splice (0,2);
	
	shuffle(tabValue);
	personnage.vit += tabValue[0];
	personnage.esq += tabValue[1];
	personnage.pre += tabValue[2];
	personnage.frc += tabValue[3];
	
	
}
function generateKendo(personnage,tabValue)
{
	i = Math.floor(Math.random()*2);
	personnage.esq += tabValue[i];
	personnage.pre += tabValue[1-i];
	tabValue.splice (0,2);
	
	shuffle(tabValue);
	personnage.vit += tabValue[0];
	personnage.hp  += tabValue[1]*2;
	personnage.def += tabValue[2];
	personnage.frc += tabValue[3];
}
	
function generateKarate(personnage,tabValue)
{
	i = Math.floor(Math.random()*2);
	personnage.vit += tabValue[i];
	personnage.def += tabValue[1-i];
	tabValue.splice (0,2);
	
	shuffle(tabValue);
	personnage.hp  += tabValue[0]*2;
	personnage.esq += tabValue[1];
	personnage.pre += tabValue[2];
	personnage.frc += tabValue[3];
}
function generateFootball(personnage,tabValue)
{
	i = Math.floor(Math.random()*2);
	personnage.hp  += tabValue[i]*2;
	personnage.frc += tabValue[1-i]; 
	tabValue.splice (0,2);
	
	shuffle(tabValue);
	personnage.vit += tabValue[0];
	personnage.esq += tabValue[1];
	personnage.pre += tabValue[2];
	personnage.def += tabValue[3];
}
function generateBaseball(personnage,tabValue)
{
	i = Math.floor(Math.random()*2);
	personnage.vit += tabValue[i];
	personnage.pre += tabValue[1-i];
	tabValue.splice (0,2);
	
	shuffle(tabValue);
	personnage.hp  += tabValue[0]*2;
	personnage.esq += tabValue[1];
	personnage.def += tabValue[2];
	personnage.frc += tabValue[3];
}
function generateBoxe(personnage,tabValue)
{
	i = Math.floor(Math.random()*2);
	personnage.esq += tabValue[i];
	personnage.frc += tabValue[1-i];
	tabValue.splice (0,2);
	
	shuffle(tabValue);
	personnage.vit += tabValue[0];
	personnage.hp  += tabValue[1]*2;
	personnage.pre += tabValue[2];
	personnage.def += tabValue[3];
	
}





	function calculerClasse(tabValue)
	{
		var max = Math.max(tabValue);
		var index = tabValue.indexOf(max);
	}
