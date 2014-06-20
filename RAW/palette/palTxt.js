var context;
var pallette;
var reader = new FileReader();

	
window.onload=function()	
	{	
		var start = new Date().getTime();	
		loadPallette('base.json');
		var end = new Date().getTime();
		var time = end - start;
		alert(time);
		alert(pallette);
		alert('Execution time: ' + time + '\n'+ 'Colour Array:'+'\n'+pallette.colours[0]);
		
		
		
		
function loadPallette(iSrc)
	{
		var jsonData = getJSON(iSrc);
		pallette = JSON.parse(jsonData);
	};
		
		
		
		
	}
	function getJSON(url) {
        var resp ;
        var xmlHttp ;

        resp  = '' ;
        xmlHttp = new XMLHttpRequest();

        if(xmlHttp != null)
        {
            xmlHttp.open( "GET", url, false );
            xmlHttp.send( null );
            resp = xmlHttp.responseText;
        }

        return resp ;
    }