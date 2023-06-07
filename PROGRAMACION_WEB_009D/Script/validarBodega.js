// objeto.metodo(json)

$(document).ready(function() {



    $.validator.addMethod('ForSelect', function (value, ele, param){
        return value != '0';
    },"Seleccione opción");


  $("#formulario4").validate({
    rules: {

      categoria:{
        ForSelect:true,
      },
      nombre:{
        ForSelect:true,
      },
      cantidad: {
        required: true,
      },

    }, // --> Fin de reglas
    messages: {
      cantidad: {
        required: "El campo es obligatorio",
      },
    },
  });
  
  
  
  
  });
  