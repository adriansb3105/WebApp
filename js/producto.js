$(document).ready(function(){

  var urlPrincipal = "http://melodicmusicserver-env.us-west-2.elasticbeanstalk.com/";


 $("#submit-navbar").on("click", function(e){

   let busquedaProducto = $("#input-navbar").val();
   $.ajax({
     //url: 'http://localhost:57849/api/Product/getProductsByName/Guit',
     url: urlPrincipal + 'api/Product/getProductsByName/'+busquedaProducto,
     type: 'GET',
     contentType: "application/json",
     dataType: "json",
     success: function(result,status,xhr){
       console.log("EXITOSO");
       console.log(result);

       let length = result.length;
       let listaProductos = $('#lista-productos');

       for (let i = 0; i < length; i++) {
        listaProductos.append(`
          <li>
               <img src="http://musicandote.com/wp-content/uploads/2014/10/Violin.jpg" class="busquedas">
               <p>`+result[i].name+`<span> &cent`+result[i].price+`</span></p>
               <a href="#" class="boton" id="`+result[i]._id+`">Comprar</a>
          </li>
					`);

        $("#"+result[i]._id).on("click", function(e){
          console.log(result[i]._id);
        });
       }
       //console.log(status == 'success');
     },
     error(xhr, status, error){
       console.log("CON ERROR");
       //console.log(status == 'error');
       console.log('tipo de error: '+error);
     }
   });
 });

});