const express = require('express');
const bodyParser = require("body-parser");
const app = express();

//app.use(express.static(__dirname + '/public/'));
/*app.get('/:name', (req,res) => {
	console.log(req.params.name);
	res.send('<h3>Hello mundo!! ' + req.params.name + '</h3>');
});*/

//Lista de alumnos estatica generada por mi
var fs = require('fs');
var alumnos = JSON.parse(fs.readFileSync('./alumnos.json', 'utf8'));

function getAlumnoBy(filter, value) {
        console.log("filtro: " + filter + "valor: " + value);
        var selected = null;
        this.alumnos.forEach(alumno => {
            console.log(alumno);
            console.log(alumno[filter]);
            if (alumno[filter] == value) {
                selected = alumno;
                return selected;
            }
        });
        return selected;
    }

//funcion que regresa el json con la lista de alumnos y sus claves
app.get('/alumnos', (req,res)=> {
	res.json(alumnos);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res)
{
	res.sendFile("index.html",{ root : __dirname});
});

//funcion que regresa el json de un alumno cuya clave sea la especificada en el url
app.get('/alumnos/:id', (req,res)=> {
	var alumno = alumnos.find(x=>x.clave == req.params.id);
	res.json(alumno);
});

app.post('/alumnos', function(req,res) {
	var alumn = req.body;
	alumnos.push(alumn);
	fs.writeFileSync("./alumnos.json", JSON.stringify(alumnos));
	res.json(alumnos);
});

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
