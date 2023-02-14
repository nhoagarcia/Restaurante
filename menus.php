
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

    $consulta = "SELECT * FROM menu";
	$cadena = "<table id='menu'><tr><th>Código</th><th>Precio</th><th>Tipo</th><th>Editar</th><th>Eliminar</th><th>Confirmar</th><th>Ver Platos</th>";
	$result = mysqli_query($db, $consulta);
	
	while($fila=mysqli_fetch_assoc($result)){
			$cadena .= '<tr>';
			foreach($fila as $clave => $valor){
					$cadena .= "<td>$valor</td>";	
			}
			$cadena .= "<td id='anadir' class='anadir'></td><td id='eliminar' class='eliminar'></td><td id='aceptar' class='aceptar'></td></td><td id='ver' class='ver'></td></tr>";
	}
	$cadena .= "</table><br><div class='mas' id='mas'>AÑADIR NUEVA FILA <img src='/imagenes/nueva.png' class='mas' id='mas'></div>";
	echo $cadena;
	
	
mysqli_close($db);

?>

