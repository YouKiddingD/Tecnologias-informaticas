const express = require ("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res)
{
	/*Para cambiar el sendfile por el sendFile se necesita la direccion absoluta del
	archivo que se va a enviar*/
	/*Se especifica la raiz como el directorio donde se encuentra el 
	archivo .js, senalando que aqui mismo se encuentra el archivo a enviar*/ 
	res.sendFile("index.html",{ root : __dirname});
});

app.post('/user', function(req,res)
{
	var user_name = req.body.user_name;
	var password = req.body.password;
	console.log("User name = " + user_name + ", password is: " + password);
	//res.json({'status' : 'OK'});
	res.json(req.body);
	//res.send('<h3>Hola mundo</h3>');
});

app.listen('3000', function() {
	console.log('Servidor web escuchando en el puerto 3000');
});