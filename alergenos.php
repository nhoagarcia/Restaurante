
<?php
header('Content-Type: text/html; charset=utf8-spanish2-ci');

// se establecen las variales para la conexion
$GLOBALS['DB_IP'] = '127.0.0.1';
$GLOBALS['DB_USER'] = 'root';
$GLOBALS['DB_PASS'] = 'Clave2DAW';
$GLOBALS['DB_NAME'] = 'restaurante';


// se establece el conector
$db = mysqli_connect($GLOBALS['DB_IP'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASS']);

// seleccionamos la base de datos del conector anterior
mysqli_select_db($db, $GLOBALS['DB_NAME']);

// verificamos que la conexión haya sido correcta
if (!$db) 
{
echo "No pudo conectarse a la BD: " . mysql_error();
exit();
}		

    $consulta = "SELECT * FROM alergenos";
    //$cadena = "Codigo alergeno+Descripción, ";
	//$cadena = "<table><tr><th>Codigo alergeno</th><th>Descripción</th><th></th></tr>";
	$cadena = "";
	$result = mysqli_query($db, $consulta);
	
	while($fila=mysqli_fetch_assoc($result)){
			foreach($fila as $clave => $valor){
				$cadena.=$valor.",";
                /*$codigo = $fila["codAlergeno"];
                $desc = $fila["Descripcion"];
				$cadena .= "$codigo+$desc,";*/	
			}
			$cadena.=";";
	}
	echo $cadena;
	
	
mysqli_close($db);

?>

