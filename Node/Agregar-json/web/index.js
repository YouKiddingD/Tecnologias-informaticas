const express = require('express');
const app = express();

//app.use(express.static(__dirname + '/public/'));
/*app.get('/:name', (req,res) => {
	console.log(req.params.name);
	res.send('<h3>Hello mundo!! ' + req.params.name + '</h3>');
});*/

//Lista de alumnos estatica generada por mi
var fs = require('fs');
var alumnos = JSON.parse(fs.readFileSync('./alumnos.json', 'utf8'));

//funcion que regresa el json con la lista de alumnos y sus claves
app.get('/alumnos', (req,res)=> {
	res.json(alumnos);
});

//funcion que regresa el json de un alumno cuya clave sea la especificada en el url
app.get('/alumnos/:id', (req,res)=> {
	var alumno = alumnos.find(x=>x.clave == req.params.id);
	res.json(alumno);
});

//Funcion que obtiene en el post un json con los parametros dados en la url y los mete en el json activo, para despues escribir en el archivo .json
app.post('/alumnos', (req,res)=> {
	alumnos.push(req.query);
	fs.writeFileSync("./alumnos.json", JSON.stringify(alumnos));
	res.json(alumnos);
});

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
