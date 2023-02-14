
var respuesta_ajax;

window.onload = function() {
vamos_a_cargar_la_tabla();
    //document.getElementById("tabla").innerHTML = '<img src="./imagenes/carga.gif" class="gif" >';
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
    peticion_http_tabla.open("POST", "./reservas.php", true);
	peticion_http_tabla.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http_tabla.send();
	
	
}

function procesaRespuesta_tabla() 
{
	console.log ("readyState " + peticion_http_tabla.readyState);
	console.log ("status " + peticion_http_tabla.status);
		
   if(peticion_http_tabla.readyState == 4 && peticion_http_tabla.status == 200){
			respuesta_ajax = peticion_http_tabla.responseText;
			function buscar(){
				document.getElementsById('buscar').addEventListener("click", doSearch);
				}
			
			}
			function doSearch(e) {
				// Obtener el valor del elemento de búsqueda
				var searchValue =e.target.value;
				
				// Obtener la tabla en la que se realizará la búsqueda
				var table = document.getElementById("tabla");
				
				// Obtener todas las filas de la tabla	
				var rows = table.getElementsByTagName("tr");
				
				// Recorrer cada fila de la tabla
				for (var i = 0; i < rows.length; i++) {
				  // Obtener las celdas de la fila actual
				  var cells = rows[i].getElementsByTagName("td");
				  
				  // Recorrer cada celda de la fila actual
				  for (var j = 0; j < cells.length; j++) {
					// Comprobar si el valor de la celda actual coincide con el valor de búsqueda
					if (cells[j].innerHTML.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
					  // Mostrar la fila si se encuentra una coincidencia
					  rows[i].style.display = "";
					  rows[i].parentNode.style.display = "";
					  break;
					} 
					else {
					  // Ocultar la fila si no hay coincidencia
					  rows[i].style.display = "none";
					  rows[i].parentNode.style.display = "none";
					  }
				  }
				}
			  }
			  buscar();
}

function inicializa_xhr() {
  if(window.XMLHttpRequest) {
    return new XMLHttpRequest(); 
  }
  else if(window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
	}
} 


/////////////////////////////////////////////////////////

	
	