


function ImageColors(eyesColor, skinColor, shirtColor, trousersColor, hairColor, shoesColor)
{
	this.eyesColor = eyesColor;
	this.skinColor = skinColor;
	this.shirtColor = shirtColor;
	this.trousersColor = trousersColor;
	this.hairColor = hairColor;
	this.shoesColor = shoesColor;
	
	
	this.getColorData = function (personnage,imageData,x,y)
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
			changeColor(imageData,i,0,19,095,095,19,0);
			changeColor(imageData,i,188,190,149,149,190,188);
		}
	}	
}