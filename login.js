
var respuesta_ajax;

window.onload = function() {
vamos_a_cargar_la_tabla();
    document.body.innerHTML = '
	      <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
      <circle fill="none" stroke="#000" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"/>
      <line fill="none" stroke-linecap="round" stroke="#000" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
        <animateTransform 
            attributeName="transform" 
            dur="25s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
      </line>
      <line fill="none" stroke-linecap="round" stroke="#000" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
        <animateTransform 
            attributeName="transform" 
            dur="100s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite" />
      </line>
      </svg>';
	document.getElementById("administrator").classList.add("gif");
setTimeout("ahora_si_esta_cargado()",1500);
}

function ahora_si_esta_cargado()
{
	// aqui quitamos el gif animado
	document.getElementById("administrator").classList.remove("gif");
	document.getElementById("tabla").innerHTML = respuesta_ajax;
}


 function vamos_a_cargar_la_tabla(){

console.log("cargando tabla");

	peticion_http_tabla = inicializa_xhr();
	peticion_http_tabla.onreadystatechange = procesaRespuesta_tabla;
    peticion_http_tabla.open("POST", "./php/carta.php", true);
	peticion_http_tabla.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http_tabla.send();
	
	
}

function procesaRespuesta_tabla() 
{
	console.log ("readyState " + peticion_http_tabla.readyState);
	console.log ("status " + peticion_http_tabla.status);
		
   if(peticion_http_tabla.readyState == 4 && peticion_http_tabla.status == 200){
			respuesta_ajax = peticion_http_tabla.responseText;
			
			// aqui quitamos el gif animado
	}
}



function inicializa_xhr() {
  if(window.XMLHttpRequest) {
    return new XMLHttpRequest(); 
  }
  else if(window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
	}
} 



	
	