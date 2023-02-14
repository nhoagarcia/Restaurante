window.onload = loader();
function loader(){
  setTimeout(()=>{
    document.getElementById("loader").classList.add("oculto");
    setTimeout(()=>{
      document.getElementById("loader").classList.remove("oculto");
      document.getElementById("loader").classList.add("none");
    },300);
  },1700);
}