

$(function () {
$("#fecha").datepicker();
});

    $.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
   $(function () {
   $("#fecha").datepicker();
   });/*
   let yesterday = new Date();
   yesterday.setDate(yesterday.getDate() - 1);
   $( "#datepicker" ).datepicker({
    maxDate: yesterday
  });*/
  $( "#datepicker" ).datepicker({
    maxDate: "-1d"
  });

//////////////VALIDACIONES//////////////

function validar(){ 

    //Validar nombre
    nombre = document.getElementById("name").value;
    regName= /^[A-Za-z]{1, 20}$/;
    if(!regName.test(nombre)) {
        console.log("nombre incorrecto");
        return false;
    }else{
        console.log("name correcto");
    }
    //Validar apellidos
    apellido = document.getElementById("surnames").value;
    regAp = /^[A-Za-z]{1, 20}$/;
    if(! regAp.test(apellido)){
        alert("apellido incorrecto");
        return false;
    }else{
        alert("apellido correcto");
    }

    //Validar correo electrónico//
    correo = document.getElementById("email").value;
    val = /^[a-zA-Z0-9_]{1,64}@[a-zA-Z0-9]{4,255}[.][a-zA-Z]{1,5}$/;
    if( !val.test(correo)){
        alert("email incorrecto");
        return false;
    }else{
        alert("email correcto");
    }
    //Validar número de teléfono//
    telf = document.getElementById("phone").value;
    regTel=/^\d{9}$/;
    if( ! regTel.test(telf)){
        alert("telf incorrecto");
        return false;
    }else{
        alert("telf correcto");
    }

    //Validar dni//
    valor = document.getElementById("dni").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( (/^\d{8}[a-zA-Z]{1}$/.test(valor)) ) {
    alert("dni correcto");
    }else{
        alert("dni incorrecto");
    }

    if(valor.charAt(8) == letras[(valor.substring(0, 8))%23]) {
        alert("letra del dni correcta");
    }else{
        alert("letra del dni incorrecta");
    }

};



