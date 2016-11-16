// DOM = Modelo de objetos del documento
var inicio = function() //main
{
	var dameclick = function()
	{
		$.ajax({
  			url: 'https://randomuser.me/api/',
  			dataType: 'json',
  			success: function(data) {
   			 console.log(data.results[0].name.first+" "+data.results[0].name.last);
  			}
		});  
	}
	$("#dameClick").on("click",dameclick);
}


//Inicializar nuestro documento
$(document).on("ready",inicio);