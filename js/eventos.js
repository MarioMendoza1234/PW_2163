// DOM = Modelo de objetos del documento
var inicio = function() //main
{
	var dameclick = function()
	{
		alert("le di click a un botón")
	}
	$("#dameClick").on("click",dameclick);
}


//Inicializar nuestro documento
$(document).on("ready",inicio);