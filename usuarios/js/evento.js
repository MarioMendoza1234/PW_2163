var inicioUsuarios = function()
{
	var validarUsuario =function()
	{
		var usuario = $("txtUsuario").val()
		var clave = $("txtClave").val()
		//preparar los parametros para AJAX
		var parametros ="opcion=valida"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();
		//hacemos la petición remota
		$.ajax({
			cache:false, 
			type:"POST",
			dataType:"json",
			url: "php/utilerias.php",
			data:parametros,
			success: function(response){
				//si jala 
			},
			error: function(xhr,ajaxOptions,thrownError){
				//si no jala 
			}
		});
		//validamos que no estén vacíos los campos
		if(usuario!="" && clave!="")
			{

			}
		else
			{
				alert("usuario y clave son obligatorios");
			}
	}
	$("btnValiudarUsuario").on("click", validarUsuario);
}
//Evento Inicial
$(document).on("ready", inicioUsuarios);