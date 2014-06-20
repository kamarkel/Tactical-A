function Case(i,j,passable = true)
{
	this.i = i;
	this.j = j;
	this.allume = false;
	this.allumeRouge = false;
	this.passable = passable;
	
	this.iImg1;//=2;
	this.jImg1;//=1;
	this.iImg2;//=1;
	this.jImg2;//=1;
		
	this.getAllume = function ()
	{	
		return this.allume;
	}	
	
	this.dessine = function (context,img1,img2)//context
	{
		var x = this.j*32;
		var y = this.i*32;
		context.drawImage(img1, this.jImg1*32,this.iImg1*32,32,32,x, y,32,32);
		context.drawImage(img2, this.jImg2*32,this.iImg2*32,32,32,x, y,32,32);
		
		if(this.allume == true)
		{					
			context.fillStyle = 'yellow';
			context.globalAlpha=0.4;
			context.fillRect(x,y,32,32);
		}
		else if(this.allumeRouge == true)
		{
			context.fillStyle = 'red';
			context.globalAlpha=0.4;
			context.fillRect(x,y,32,32);
		}
		context.fillStyle = 'black';
		context.globalAlpha=1;
	}
}