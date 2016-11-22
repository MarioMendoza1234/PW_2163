<?php 
	//ruta commit /Applications/XAMPP/xamppfiles/htdocs/pw
	//preguntar si los valores existen
	$oculto = "";
	$usuario = "";
	$nombre = "";
	$clave = "";
	$tipo = "";
	if(isset($_POST["txtOculto"])) //si trae valores
	{
		$oculto = $_POST["txtOculto"];
	}
	if(isset($_POST["txtUsuario"])) //si trae valores
	{
		$usuario = $_POST["txtUsuario"];
	}
	if(isset($_POST["txtNombre"])) //si trae valores
	{
		$nombre = $_POST["txtNombre"];
	}
	if(isset($_POST["txtClave"])) //si trae valores
	{
		$clave = $_POST["txtClave"];
	}
	if(isset($_POST["txtTipo"])) //si trae valores
	{
		$tipo = $_POST["txtTipo"];
	}
	function guardaUsuario($usuario,$nombre,$clave,$tipo)
	{
		//conectarse al servidor MySql
		//mysql_connect(servidor,usuario,contraseña);
		$conexion = mysql_connect("localhost","root","");
		//seleccionar la base de datos
		mysql_select_db("bd2163");
		$consulta = "INSERT into usuarios values('".$usuario."','".$nombre."','".$clave."','".$tipo."')";
		//ejecutamos la consulta
		mysql_query($consulta);
		//preguntamos si hubi inserción
		if(mysql_affected_rows() > 0)
		{
			print "Registro guardado";
		}
		else
		{
			print "No se guardo el registro";
		}
	}
	switch ($oculto){
		case 'guardaUsuario':
		guardaUsuario($usuario,$nombre,$clave,$tipo);
		break;
		default:
		# code...
		break;
	}
 ?>
<h1>Alta de usuarios</h1>
<form action="ejemplo.php" method="POST">
	<input type="hidden" name="txtOculto" value="guardaUsuario"><br>
	<input type="text" name="txtUsuario" id="txtUsuario"><br>
	<input type="text" name="txtNombre" id="txtNombre"><br>
	<input type="password" name="txtClave" id="txtClave"><br>
	<select name="txtTipo" id="txtTipo"><br>
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select>
	<br><input type="submit" value="Enviar">
</form>
