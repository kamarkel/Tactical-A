function getCompetence(nom)
{
	switch(nom)
	{
		//foot
		case('charge') : 		return new Competence(nom); break;
		//foot/boxe
		case('berserk') : 		return new Competence(nom); break;
		//boxe
		case('dblatk') : 		return new Competence(nom); break;
		//kendo/karate
		case('knight') : 		return new Competence(nom); break;
		//baseball
		case('fuite') : 		return new Competence(nom); break;
		//street
		case('distributeur en mouvement') : return new Competence(nom); break;
		//karate
		case('hammer') : 				return new Competence(nom); break;
		//baseball
		case('melee dbl portee') : 				return new Competence(nom); break;
		//street
		case('denicheur') : 				return new Competence(nom); break;
		//
	
	}
}
