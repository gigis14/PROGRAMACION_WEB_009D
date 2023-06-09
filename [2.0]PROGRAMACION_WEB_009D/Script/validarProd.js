// objeto.metodo(json)

$(document).ready(function() {

  $.validator.addMethod('ForSelect', function (value, ele, param){
    return value != '0';
  },"Seleccione opción");
  
  $("#formulario3").validate({
    rules: {
      id: {
        required: true,
        minlength: 1,
      },
      categoria: {
        ForSelect: true,
      },
      nombre: {
        required: true,
        minlength: 4,
      },
      descripcion: {
        required: true,
        minlength: 5,
      },
      precio: {
        required: true,
        minlength: 1,
      },
      descsubs: {
        required: true,
        minlength: 1,
      },
    }, // --> Fin de reglas
    messages: {
      id: {
        required: "El id es un campo obligatorio",
        minlength: "Menos carácteres de los solicitados",
      },
      categoria: {
        required: "categoria es un campo obligatorio",
        minlength: "Menos carácteres de los solicitados",
      },
      nombre: {
        required: "Nombre es un campo obligatorio",
        minlength: "Menos carácteres de los solicitados",
      },
      descripcion: {
        required: "Descripción es un campo requerido",
        minlength: "Menos carácteres de los solicitados",
      },
      precio: {
        required: "precio es una campo obligatorio",
        minlength: "Menos carácteres de los solicitados",
      },
      descsubs: {
        required: "Es un campo obligatorio",
        minlength: "Menos carácteres de los solicitados",
      },
    },
  })
})
