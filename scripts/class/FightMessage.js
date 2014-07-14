function FightMessage(message,x,y,dx,dy,duration) 
{
	this.message = message;
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.duration = duration;
	this.timePassed= duration;
	//this.style = style;
	
	this.dessine = function(context)
	{
		context.fillStyle="#FF0000";
		if(this.message == "Miss")
			context.fillStyle="#FFFFFF";
		context.font = "12px Arial";
		xt = x+(this.duration-this.timePassed)/this.duration*dx;
		yt = y+(this.duration-this.timePassed)/this.duration*dy;
		context.fillText(this.message,xt,yt);
		this.timePassed--;
	}
	
}