//cunado el documento este listo y todos los objetos 
    $(document).ready( function(){
        //Una vez que este listo el documento obtendremos la lista de alumnos y la mostraremos.
        getAlumnos();
        //Programacion del boton act para obtener datos del input.
        $("#act").on("click", function(event){
        	console.log(event);
            var alumno = { }; //Creacion de objeto con la info necesaria.
            alumno.nombre = $("#nombre").val();
            alumno.clave = $("#clave").val();
            //Invocamos a la funcion para llamadas post y mandamos el obeto.
            sendPOSTRequest(alumno);
        });
    });
    function getAlumnos(){
        //LLamada GET para obtener los alumnos
        //Se muestra resultado con una lista en HTML
        //Se utiliza un ciclo for y se genera el codigo HTML
        //Usando Jquery se coloca el HTML en la lista.
        var auxiliar;
        $.get("http://localhost:3000/alumnos", function(data){
        	var listHTML = "";
        	console.log(data);
        	data.forEach(alumno => {
        		listHTML += "<li class='list-group-item'>" + 
        		" Nombre: " + alumno.nombre + " | Clave : " + alumno.clave  + " <button type='button' class='delete btn btn-danger btn-sm' data-clave='"+ alumno.clave +"'> <i class='material-icons'>delete</i> </button> " + " <button type='button' class='edit btn btn-primary btn-sm' data-clave='"+ alumno.clave +"' data-toggle='modal' data-target='#edicion'> <i class='material-icons'>edit</i> </button> </li>";
        	});
        	$("#lista-alumnos").html(listHTML);
            //Programacion para los botones delete
            $(".delete").on("click", (event) =>{
            	console.log("Button delete");
            	console.log(event.target);
            	sendDELETERequest({ "clave" : event.target.dataset["clave"] });
            });
            $(".edit").on("click", (event) =>{
            	auxiliar = event.target.dataset["clave"];
            });
            $("#editFin").on("click", (event) =>{
            	console.log("Button edit");
            	console.log(event.target);
            	var nuevoAlumn = {};
            	nuevoAlumn.nombre = $("#nombreEm").val();
            	nuevoAlumn.clave = $("#claveEm").val();
            	nuevoAlumn.oldClave = auxiliar;
            	sendPUTRequest(nuevoAlumn/*{ "clave" : event.target.dataset["clave"] }*/);
            });
        });
    }
    function sendPOSTRequest(body_object){
        //Llamada post al backend usando jquery.
        
        $.post("http://localhost:3000/alumnos", body_object , 
        	function(){
        		alert("Alumno guardado.");
            //Actualizamos la lista html para ver los cambios.
            getAlumnos();
        });
    }
    function sendDELETERequest(body_object) {
        //Llamada delete al backend por medio de jquery
        $.ajax({
        	method: "DELETE",
        	url: "http://localhost:3000/alumnos",
        	data: body_object
        })
        .done(function( msg ) {
        	alert( "Alumno eliminado: " + body_object.clave );
        })
        .fail(function(msg){
        	alert("Error al eliminar alumno: " + body_object.clave)
        }); 
        getAlumnos();
    }

    function sendPUTRequest(body_object) {
        //Llamada delete al backend por medio de jquery
        $.ajax({
        	method: "PUT",
        	url: "http://localhost:3000/alumnos",
        	data: body_object
        })
        .done(function( msg ) {
        	alert( "Alumno actualizado: " + body_object.clave );
        })
        .fail(function(msg){
        	alert("Error al actualizar alumno: " + body_object.clave)
        }); 
        getAlumnos();
    }