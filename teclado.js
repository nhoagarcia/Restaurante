/*Generar un array de 6 posiciones del 0 al 9 sin que se repita ningún número*/
var icono = false;
document.getElementById("teclado_icono").addEventListener("click", teclado);
var valores = [];

//FUNCION PASWORD
var num;
var array_random = new Array();
while(array_random.length < 10){
    num=Math.floor(Math.random()*10);
    var interruptor=false;

    for(i=0;i<array_random.length && interruptor==false; i++){
        if(num==array_random[i]){
            interruptor=true;

        }
    }
    if(interruptor==false){
        array_random.push(num);
    }
}

var imprimirTabla = "";
imprimirTabla += "<table id='teclado-pswr'><tr>";
for(i=0;i<array_random.length;i++){
    imprimirTabla += "<td id='celda-0"+i+"' class='celdas'>"+ array_random[i] + "</td>";
    if(i==array_random.length/2){
        imprimirTabla += "<tr>";
    }
}
imprimirTabla +="<td colspan='2' id='delete' class='celdas'>Borrar</td>";
imprimirTabla += "</tr></table>";

document.getElementById("tabla").innerHTML=imprimirTabla;  

var arrayAsteriscos = new Array(6);
var cont=0;
while(cont<3){
    var randomAst = Math.floor(Math.random() * 6);
    if(arrayAsteriscos[randomAst]!="*"){
        arrayAsteriscos[randomAst]="*";
        cont++;
        console.log(randomAst)
        document.getElementById("num-"+randomAst).innerHTML = "⚪";
    }
}


//FUNCION GENERAL
function teclado(){

    if(icono==false){
        document.getElementById("tabla").classList.add("visible");
        icono=true;

        //AÑADIR ELEMENTOS AL ARRAY
        for(i=0; i<10; i++){
            document.getElementById("celda-0"+i).addEventListener("click", anadir);
        }
        function anadir(){
            var encontrado = false;
            for(i=0; i<arrayAsteriscos.length && encontrado==false; i++){
                if(typeof(arrayAsteriscos[i])=='undefined'||typeof(arrayAsteriscos[i])=='null'){
                    arrayAsteriscos[i]=this.innerText;
                    encontrado=true;
                    document.getElementById("num-"+i).innerHTML = "✔️";
                }
            }
            console.log(arrayAsteriscos);
            input();
        }

        //ELIMINAR ELEMENTOS AL ARRAY
        document.getElementById("delete").addEventListener("click", borrar);
        
        function borrar(){
            var encontrado = false;
            for(i=arrayAsteriscos.length-1; i>=0 && encontrado==false; i--){
                if(arrayAsteriscos[i]!=='*' && typeof(arrayAsteriscos[i])!=="null" && typeof(arrayAsteriscos[i])!=="undefined"){
                    arrayAsteriscos[i]=undefined;
                    encontrado=true;
                    document.getElementById("num-"+i).innerHTML = "";
                }
            }
            console.log(arrayAsteriscos);
            input();
        } 
        
        function input(){
            var valorinput = "";

            var esString=true;
            for(i=0; i<arrayAsteriscos.length; i++){
                if(typeof(arrayAsteriscos[i])=="undefined" || typeof(arrayAsteriscos[i])=="null"){
                    esString=false;
                }
            }

            if(esString==true){
                for(i=0; i<arrayAsteriscos.length; i++){
                    valorinput += arrayAsteriscos[i];
                }
                document.getElementById("passwrd").value = valorinput; 
            } else {
                document.getElementById("passwrd").value = ""; 
            }

            
        }
    } else {
        document.getElementById("tabla").classList.remove("visible");
        icono=false;
    }
}
    document.getElementById("reset").addEventListener("click", borrarTodo);
        
        function borrarTodo(){
            var encontrado = false;
            for(i=arrayAsteriscos.length-1; i>=0 && encontrado==false; i--){
                if(arrayAsteriscos[i]!=='*' && typeof(arrayAsteriscos[i])!=="null" && typeof(arrayAsteriscos[i])!=="undefined"){
                    arrayAsteriscos[i]=undefined;
                    encontrado=true;
                    for(j=0; j<arrayAsteriscos.length; j++){
                        document.getElementById("num-"+i).innerHTML = "";
                    }
                    
                }
            }
        }

//ASTERISCOS


    
