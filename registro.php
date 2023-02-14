
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

$validopasswr=true;
$validoemail=true;
$validodni=true;
	// como se recogen las variables desde el javascript/html
	$php_pass = $_POST['password'];
	$php_email= $_POST['email'];
	$php_dni= $_POST['dni'];
	$php_name= $_POST['name'];
	$php_surnames= $_POST['surnames'];
	$php_fecha= $_POST['fecha'];
	$php_phone= $_POST['phone'];
	$php_address= $_POST['address'];
	
    if(!empty($_POST['password']))
    $php_pass = $_POST['password'];
    else 
    $validopasswr=false;

    if(!empty($_POST['email']))
        $php_email = $_POST['email'];
    else 
	$validoemail=false;

    if(!empty($_POST['dni']))
    $php_dni = $_POST['dni'];
    else 
    $validodni=false;
			
	if(!empty($_POST['fecha'])){
	$fechabd = explode("/", $php_fecha);
	$fproceso = array($fechabd[2],$fechabd[1],$fechabd[0]);
	$php_fecha = implode("-",$fproceso);
	}

	if($validopasswr==true && $validoemail==true && $validodni==true){
		$consulta = "SELECT * FROM clientes WHERE email = '$php_email'";
		$result = mysqli_query($db, $consulta);
		
		if (mysqli_num_rows($result)>=1) 
				{
						echo 'datos incorrectos';
				} 
				else 
				{
					$consulta2 = "INSERT INTO `clientes`(`nombre`, `apellidos`, `contrasenia`, `dni`, `fecha_nac`, `email`, `telefono`, `direccion`, `rol`, `puntos`) VALUES ('$php_name','$php_surnames','$php_pass','$php_dni','$php_fecha','$php_email','$php_phone','$php_address','user','3')";
					$envio = mysqli_query($db, $consulta2);
					echo 'usuario registrado';
				}
	}

mysqli_close($db);

?>