	

	// Variables
	var context;
	var image;
	var image2;
	var x;
	var y;
/*******************************************************************************************************/		
/***************									INIT									************/	
/*******************************************************************************************************/

	function refreshGame()
	{
		y=0
		for(var i=0;i<10;i++)
		{
			for(var j=0;j<10;j++)
			{
				y=(y>6)?0:y+1;
			
				context.drawImage(image,2*32,0*32,32,32,i*32,j*32,32,32);
				//context.drawImage(image,0*32,5*32,32,32,i*32,j*32+16,16,16);
				//context.drawImage(image,0*32,5*32,32,32,i*32+16,j*32,16,16);
				//context.drawImage(image,0*32,5*32,32,32,i*32+16,j*32+16,16,16);
				
				
				context.drawImage(image2,x*32,y*32,32,32,i*32,j*32,32,32);	
			}
		}
		x=(x>14)?0:x+1;
	}
	
	window.onload=function()	
	{	
		var cv = document.getElementById('canvasElem');
		context = cv.getContext('2d');
		x = 0;
		image = new Image(); 
		image2 = new Image();		
		image.src = 'T-S-Egout.png';
		image2.src = 'T-A-Egout.png';
		
		setInterval(refreshGame,80);
	}
	