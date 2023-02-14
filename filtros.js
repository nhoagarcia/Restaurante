
document.getElementById("todos").addEventListener("click", mostrar);
document.getElementById("fecha").addEventListener("click", mostrarfecha);
document.getElementById("rango").addEventListener("click", mostrarrango);

function mostrar(){
    document.getElementById("elegirfecha").classList.remove("visible");
    document.getElementById("elegirfecharango").classList.remove("visible");
    document.getElementById("elegirfecharango").classList.add("oculto");
    document.getElementById("elegirfecha").classList.add("oculto");
}

function mostrarfecha(){
    document.getElementById("elegirfecharango").classList.remove("visible");
    document.getElementById("elegirfecharango").classList.add("oculto");
    document.getElementById("elegirfecha").classList.remove("oculto");
    document.getElementById("elegirfecha").classList.add("visible");
}
function mostrarrango(){
    document.getElementById("elegirfecha").classList.remove("visible");
    document.getElementById("elegirfecha").classList.add("oculto");
    document.getElementById("elegirfecharango").classList.remove("oculto");
    document.getElementById("elegirfecharango").classList.add("visible");
}
