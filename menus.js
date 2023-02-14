
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
    peticion_http_tabla.open("POST", "./menus.php", true);
	peticion_http_tabla.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    peticion_http_tabla.send();
	
	
}

function procesaRespuesta_tabla() {
	console.log ("readyState " + peticion_http_tabla.readyState);
	console.log ("status " + peticion_http_tabla.status);
		
   if(peticion_http_tabla.readyState == 4 && peticion_http_tabla.status == 200){
			respuesta_ajax = peticion_http_tabla.responseText;

			setTimeout(function(){
                function eventoBorrar(){
                    var botonesEliminar = document.getElementsByClassName('eliminar');
                    for(i=0; i<botonesEliminar.length; i++){
                        botonesEliminar[i].addEventListener("click", borrarfila);
                    }
                
                }/*
				function eventoNoVer(){
					var verplatos = document.getElementsByClassName('ver');
					for(i=0; i<verplatos.length; i++){
						verplatos[i].addEventListener("click", eye);
					}
				}
				function eventoVer(){
					var noverplatos = document.getElementsByClassName('nover');
					for(i=0; i<noverplatos.length; i++){
						noverplatos[i].addEventListener("click", eye2);
					}
				}*/
				/*document.getElementsByClassName('ver').addEventListener("click", eye);
				document.getElementsByClassName('nover').addEventListener("click", eye2);*/
				document.getElementById("mas").addEventListener("click", add);
				function add(){
				let contenedor = document.getElementById("menu");
				let plato  = document.createElement('tr');
				let cont=0;
				while(cont < 3){
					let valor = document.createElement('td');
					plato.appendChild(valor);
					cont++;
				}
				let valoran = document.createElement('td');
				valoran.classList.add('anadir');
				valoran.setAttribute("id", "anadir");
				let valordel = document.createElement('td');
				valordel.classList.add('eliminar');
				valordel.setAttribute("id", "eliminar");
				let valoracep = document.createElement('td');
				valoracep.classList.add('aceptar');
				valoracep.setAttribute("id", "aceptar");
                let valorver = document.createElement('td');
				valorver.classList.add('ver');
				valorver.setAttribute("id", "ver");
				plato.appendChild(valoran);
				plato.appendChild(valordel);
				plato.appendChild(valoracep);
                plato.appendChild(valorver);
				contenedor.appendChild(plato);
                eventoBorrar();
                }
                eventoBorrar();
				function borrarfila(e) {
                    var r = e.target;
                    var i = parseInt(r.parentNode.rowIndex);
                    document.getElementById("menu").deleteRow(i);
                }
				/*eventoVer();
				eventoNoVer();
				function eye(){
					document.getElementById("ver").classList.remove("ver");
					document.getElementById("ver").classList.add("nover");
			
				}
				function eye2(){
					document.getElementById("ver").classList.remove("nover");
					document.getElementById("ver").classList.add("ver");
			
				}*/
			},1500);
	
   }


}

