var context;
var pallette;
var image = new Image();

function loadPallette(iSrc)
	{
		image.src = iSrc;
		var colourNum = image.width;
		var palletteNum = image.height;
		context.drawImage(image,0,0);
		var colours = [];
		var i=0;
		alert('width: '+colourNum+'\n'+'height: '+palletteNum);
		var imageData = context.getImageData(0, 0, colourNum, palletteNum);
		while (i<colourNum)
			{
				var pIndex= i*4;
				var red   = imageData.data[pIndex    ];  // red   color
				var green = imageData.data[pIndex + 1];  // green color
				var blue  = imageData.data[pIndex + 2];  // blue  color
				var alpha = imageData.data[pIndex + 3];
				var RGB = '#'+red+''+green+''+blue;
				alert('current colour: '+rgb);
				colours.push(RGB);
				i+=1;
			}
		pallette=colours;
	};
	
window.onload=function()	
	{	
		var start = new Date().getTime();
		var cv = document.getElementById('canvasElem');
		context = cv.getContext('2d');		
		loadPallette('base.png');
		var end = new Date().getTime();
		var time = end - start;
		alert('Execution time: ' + time + '\n'+ 'Colour Array:'+'\n'+pallette[0]);
	};