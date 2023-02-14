
var respuesta_ajax;

window.onload = function() {
vamos_a_cargar_la_tabla();
	document.getElementById("administrator").classList.add("gif");
setTimeout("ahora_si_esta_cargado()",1500);
}

function ahora_si_esta_cargado()
{
	// aqui quitamos el gif animado
	document.getElementById("administrator").classList.remove("gif");
	document.getElementById("tabla").innerHTML = respuesta_ajax;
}

function inicializa_xhr() {
if(window.XMLHttpRequest) {
    return new XMLHttpRequest(); 
}
else if(window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");}
}

function vamos_a_cargar_la_tabla(){

console.log("cargando tabla");

	peticion_http_tabla = inicializa_xhr();
	peticion_http_tabla.onreadystatechange = procesaRespuesta_tabla;
    peticion_http_tabla.open("POST", "./carta.php", true);
	peticion_http_tabla.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http_tabla.send();
	
}

function procesaRespuesta_tabla() {
	console.log ("readyState " + peticion_http_tabla.readyState);
	console.log ("status " + peticion_http_tabla.status);
		
   if(peticion_http_tabla.readyState == 4 && peticion_http_tabla.status == 200){
			respuesta_ajax = peticion_http_tabla.responseText;
   }
}
