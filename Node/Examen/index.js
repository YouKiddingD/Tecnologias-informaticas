const express =  require("express");
const bodyParser = require("body-parser");
var app = express();

const archivos = require('fs');


//DB Handler
var db = {
    //Indicar BD o abrir conexion
    initDB: function () {
      var fs = require("fs");
      var contents = fs.readFileSync("./JSON/cache.json");
      this.cache = JSON.parse(contents);
    },

    saveCache : function(){
      archivos.writeFileSync('JSON/cache.json', JSON.stringify(this.cache),
        function (error) {
          if (error) {
            console.log('Hubo un error al escribir en el archivo')
            console.log(error);
          }
        });
    }
    
  }

  app.use(express.static('assets'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname));

  app.route("/")
  .get( (req, res) => {
    res.sendFile("./html/index.html",{ root : __dirname});
  })
  .post( (req, res) => {
    db.initDB();
    res.json(db.cache);
  })
  .put((req,res)=> {
    db.initDB();
    var busqueda = req.body;
    console.log("Objeto post recibido");
    console.log(busqueda);
    db.cache =busqueda;
    db.saveCache();
    res.json({'status' : 'OK'});
  });

  app.listen(3000,function(){
    console.log("Started on PORT 3000");
  })

//AIzaSyCl5jMYCafWTBiSla0Ax0rRQaoiPKx9zn4
//54686656599-4p118l43c94daf53jle8q41hh0q7m9cs.apps.googleusercontent.com