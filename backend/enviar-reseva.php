<?php
if($_POST[nombre]){
	$nombre=$_POST[nombre];
	$nombre= filter_var($nombre,FILTER_SANITIZE_STRING);
	$fecha=$_POST[fecha];
	$fecha= filter_var($fecha,FILTER_SANITIZE_STRING);
	$texto=$_POST[texto1];
	$texto2=$_POST[texto2];
	$ref=$_POST[ref];
$SQL="INSERT INTO ofertas_trabajo (titular,fecha,texto,texto2,ref,idioma) VALUES ('$nombre','$fecha','$texto','$texto2','$ref','cast')";
	$resultado=mysql_query($SQL);
		header("Location:ofertas.php"); //Se indica donde vuelve
	}?>



  <?php echo iconv('ISO-8859-1//TRANSLIT','UTF-8',$fila4["nombre"]); // Función para decodificar caracteres ?>
