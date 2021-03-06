const express =  require("express");
const bodyParser = require("body-parser");
var app = express();

const archivos = require('fs');


//DB Handler
var db = {
    //Indicar BD o abrir conexion
    initDB: function () {
        var fs = require("fs");
        var contents = fs.readFileSync("./alumnos.json");
        this.alumnos = JSON.parse(contents);
    },

    //Busqueda Alumno
    getAlumnoBy: function (filter, value) {
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
    },

    //Eliminar un alumno por la clave
    deleteAlumnoByClave : function (clave) {
      var index;
      //Buscamos el indice del alumno
      for (index = 0; index < this.alumnos.length; index++) {
        if(this.alumnos[index].clave == clave )
        break;
      }
      
      //Si se encontro el indice se elimina
      if(index<db.alumnos.length){
        delete db.alumnos[index];
        db.alumnos.splice(index, 1);
        db.saveAlumnos();
      }
    },

    editAlumnoByClave : function (clave, newName, newClave) {
      var index;
      //Buscamos el indice del alumno
      for (index = 0; index < this.alumnos.length; index++) {
        if(this.alumnos[index].clave == clave )
        break;
      }
      
      //Si se encontro el indice se elimina
      if(index<db.alumnos.length){
        db.alumnos[index].nombre = newName;
        db.alumnos[index].clave = newClave;
        db.saveAlumnos();
      }
    },

    saveAlumnos : function(){
      archivos.writeFileSync('alumnos.json', JSON.stringify(this.alumnos),
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

app.get('/',function(req,res){
  res.sendfile("index.html" );
});

app.route("/alumnos")
  .get( (req, res) => {
    db.initDB();
    res.json(db.alumnos);
  })
  .post((req,res)=> {
    db.initDB();
    var alumno = req.body;
    console.log("Objeto post recibido");
    console.log(alumno);
    db.alumnos.push(alumno);
    db.saveAlumnos();
    res.json({'status' : 'OK'});
  })
  .delete((req,res)=> {
    db.initDB();
    var alumno = req.body;
    console.log("Objeto post recibido");
    console.log(alumno);
    db.deleteAlumnoByClave( alumno.clave );
    console.log(db.alumnos);
    res.json({'status' : 'OK'})
  })
  .put((req,res)=> {
    db.initDB();
    var alumno = req.body;
    console.log("Objeto put recibido");
    console.log(alumno);
    db.editAlumnoByClave(alumno.oldClave, alumno.nombre, alumno.clave);
    console.log(db.alumnos);
    res.json({'status' : 'OK'})
  });

app.get('/alumnos/:clave', (req, res) => {
  db.initDB();
  var clave = req.params.clave;
  var alumno = db.getAlumnoBy('clave', clave);
  res.json(alumno);
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})