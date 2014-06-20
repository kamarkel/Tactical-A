function Joueur(nom,personnages)
{
	this.personnages = personnages;
	this.nom = nom;
	
	this.getPersonnageOn = function (i,j)
	{	
		for(key in this.personnages)
		{
			if(this.personnages[key].x == j*32 && this.personnages[key].y == i*32)
			 return this.personnages[key];
		}
		return null;
	}

	this.getPersonnage = function (key)
	{
		return this.personnages[key];
	}

	this.getPersonnages = function ()
	{
		return this.personnages;
	}

	this.addPersonnage = function(personnage,i,j)
	{
		personnage.setPosition(i,j);
		this.personnages.push(personnage);
		
	}

	this.dessine = function (context)//context
	{
		for(key in this.getPersonnages())
		{
			this.getPersonnage(key).dessine(context);
		}
	}
	
	this.canPlay = function ()
	{
		for(key in this.getPersonnages())
		{
			if(this.getPersonnage(key).actif)
				return true;
		}
		return false;
	}
	
	this.activerPersonnages = function()
	{
		for(key in this.getPersonnages())
		{
			this.getPersonnage(key).actif = true;
		}		
	}
}