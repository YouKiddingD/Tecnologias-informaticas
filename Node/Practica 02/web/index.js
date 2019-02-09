const express = require('express');
const app = express();

//app.use(express.static(__dirname + '/public/'));
/*app.get('/:name', (req,res) => {
	console.log(req.params.name);
	res.send('<h3>Hello mundo!! ' + req.params.name + '</h3>');
});*/

//Lista de alumnos estatica generada por mi
var alumnos = [{nombre: 'Cucho',clave:'0001'},{nombre: 'Cucha',clave:'0002'},{nombre: 'Zazil',clave:'0003'},{nombre: 'Der',clave:'0004'},{nombre: 'Osvaldo',clave:'1105'},{nombre: 'Arturo',clave:'1106'},{nombre: 'Dennise',clave:'1107'},{nombre: 'Cocacola',clave:'1108'},{nombre: 'Fausto',clave:'1109'},{nombre: 'Uriel',clave:'1111'}];

//funcion que regresa el json con la lista de alumnos y sus claves
app.post('/alumnos', (req,res)=> {
	res.json(alumnos);
});

//funcion que regresa el json de un alumno cuya clave sea la especificada en el url
app.post('/alumnos/:id', (req,res)=> {
	var alumno = alumnos.find(x=>x.clave == req.params.id);
	res.json(alumno);
});

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});

//express con 2 llamadas post... localhost:3000/alumnos y que regrese una lista de alumnos, no importa si nombre y clave o lo que sea.

//Con alumnos/id que solo regrese al alumno
