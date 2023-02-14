
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
	// como se recogen las variables desde el javascript/html
	$php_pass = $_POST['passwrd'];
	$php_email= $_POST['email'];
	
    if(!empty($_POST['passwrd']))
    $php_pass = $_POST['passwrd'];
    else 
    $validopasswr=false;

    if(!empty($_POST['email']))
        $php_email = $_POST['email'];
    else 
	$validoemail=false;

/*
    if($validopasswr==true && $validoemail==true){
        echo "email: ".$email = $_POST['email'];echo '<br>';
        echo "contrasena: ".$passwrd = $_POST['passwrd'];echo '<br>';
    }else {
        echo 'datos incorrectos';
    }*/
			

    $consulta = "SELECT * FROM clientes WHERE email = '$php_email'";
	$result = mysqli_query($db, $consulta);
	
	if (mysqli_num_rows($result)==0) 
			{
					echo 'datos incorrectos';
			} 
			else 
			{
					while ($valor = mysqli_fetch_array($result)) 
					{
						// aqui se pasan a variables los campos leidos de la base de datos
						// a través de la variable valor........
						$ver_ds = $valor['contrasenia'];
						$posiciones = Array();
						$contadorpos=0;
						for($i=0; $i<strlen($php_pass); $i++){
							if($php_pass[$i]=='*'){
								$posiciones[$contadorpos]=$i;
								$contadorpos++;
							}
						}
						for($i=0; $i<count($posiciones); $i++){
							$ver_ds[$posiciones[$i]]="*";
						}
						//comprobar que la contrasenia leida e introducida son iguales
						if($php_pass==$ver_ds){
                            header('Location: index.html');
                        }
						else{
                            echo ' contraseña incorrecta';
                        }

					}
			
			}	
mysqli_close($db);

?>