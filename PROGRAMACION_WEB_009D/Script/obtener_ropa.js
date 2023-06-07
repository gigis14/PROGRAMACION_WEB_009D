$(document).ready(function () {

    fetch('https://fakestoreapi.com/products')
            .then((data)=>{
                return data.json();
            })
            .then((objectData)=>{
                console.log(objectData[0].title);
                let tableData="";
                objectData.map((values)=>{
                    tableData+=` 
                    <tr>
                    <td>${values.id}</td>
                    <td>${values.title}</td>
                    <td>${values.description}</td>
                    <td>${values.price}</td>
                    <td><img src="${values.image}"/></td>
                    </tr>
                    `
                });
                document.getElementById("tabla-datos")
                    .innerHTML=tableData;
            })
            .catch((err)=>{console.log(err);   

            })



})

    
    // Las acciones de Jquery van dentro de la función ready

/*          
        $.get('https://fakestoreapi.com/product?limit=5', // API donde se obtienen los datos
        
            function(data){
                
                $('#tabla-usuarios tbody').empty();

                $.each(data.results, function(i, item) { // Recorrer las filas devueltas por la API
                    
                    // Crear el codigo HTML para agegar filas a la tabla usando los campos de cada fila

                    var fila = '';
                    fila += '<tr>';
                    fila += '    <td>' + i + '</td>';
                    fila += '    <td>' + item.id + '</td>';
                    fila += '    <td>' + item.price + '</td>';
                    fila += '    <td>' + item.category + '</td>';
                    fila += '    <td>' + item.image + '</td>';
                    fila += '</tr>';

                    $('#tabla-usuarios').append(fila);   
                
                });

        });

    

  });  // Cierre del ready */

  // Puedes probar otras APIs en http://jsonplaceholder.typicode.com





/* $(document).ready(function () {




    // Las acciones de Jquery van dentro de la función ready

         
        $.get('https://fakestoreapi.com/products?limit=5', // API donde se obtienen los datos
        
            function(data){
                
                $('#tabla-ropa tbody').empty();

                $.each(data.results, function(i, item) { // Recorrer las filas devueltas por la API
                    
                    // Crear el codigo HTML para agegar filas a la tabla usando los campos de cada fila

                    var fila = '';
                    fila += '<tr>';
                    fila += '    <td>' + i + '</td>';
                    fila += '    <td>' + item.title + '</td>';
                    fila += '    <td>' + item.name.price + '</td>';
                    fila += '    <td>' + item.location.description + '</td>';
                    fila += '    <td>' + item.location.image + '</td>';
                    fila += '</tr>';

                    $('#tabla-ropa').append(fila);   
                
                });

        });
  

    

  });  // Cierre del ready

  // Puedes probar otras APIs en http://jsonplaceholder.typicode.com */