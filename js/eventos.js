// DOM = Modelo de objetos del documento
var inicio = function() //main
{
	var dameclic = function()
	{
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data) {
		  	$("imgFoto").show("slow");
		  	$("txtNombre").show("slow");
		  	$("#txtNombre").val(data.results[0].name.first+" "+data.results[0].name.last);
		    $("#imgFoto").attr("src",data.results[0].picture.large);
		    $("#miArticle").html("Texto");
		    console.log(data.results[0].name.first+" "+data.results[0].name.last);
		  }
		});
	}
	$("#dameClic").on("click",dameclic);
}

//Inicializar nuestro Documento
$(document).on("ready",inicio);