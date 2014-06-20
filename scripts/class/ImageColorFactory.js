
function generateImageColor() 
{
	
	eyesColor = '';

	tab = ['blanc','metisse' ,'brunF','default'];
	i = Math.floor(Math.random()*tab.length); 
	skinColor = tab[i];	
	
	tab = ['bleuC','noir','rouge','gris','default'];
	i = Math.floor(Math.random()*tab.length); 
	shirtColor = tab[i];	
	
	tab = ['bleuC','noir','rouge','gris','default'];
	i = Math.floor(Math.random()*tab.length); 
	trousersColor = tab[i];	

	tab = ['blond','roux' ,'brunC','brunF','default'];
	i = Math.floor(Math.random()*tab.length); 
	hairColor = tab[i];
	
	tab = ['bleuC','noir','rouge','gris','default'];
	i = Math.floor(Math.random()*tab.length); 
	shoesColor = tab[i];	

		
	return new ImageColors(eyesColor,skinColor,shirtColor,trousersColor,hairColor,shoesColor);
	

}