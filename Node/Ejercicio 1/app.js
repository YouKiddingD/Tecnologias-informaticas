var a = 3;
var b = 9;
var c = "Hola";
var d = [1,2,3];
var alumno = {"Nombre": "Der", "Clave": 229522, "getName": function(){return this.Nombre; }
};


function Hola(n)
{
	console.log(n);
}
console.log("Prueba de node");
console.log("a: " + a);
console.log("b: "+b);
console.log("a+b: "+a+b);
console.log("b-a: "+(b-a));
console.log("a*b: "+a*b);
console.log("b/a: "+b/a);
console.log(c+a);
console.log(alumno);
console.log(alumno.getName());
Hola("Hola");
console.log(d[0],d[1],d[2]);
