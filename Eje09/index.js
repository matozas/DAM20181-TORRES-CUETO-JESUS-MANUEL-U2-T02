var alumno_1 = require("./alumno");
var alumno_2 = require("./alumno");
var alumno_3 = require("./alumno");
var alumno_4 = require("./alumno");
var cre = new alumno_1.create("Crear");
var sho = new alumno_2.show("Mostrar");
var era = new alumno_3.erase("Eliminar");
var up = new alumno_4.update("Modificar");
//funcion para insertar datos 
console.log("\nInserto \n");
cre.crear("14401009", "Jesus", "Torres", 22, "M", "11-02-1996", true);
cre.crear("13401010", "carlos", "Puga", 21, "M", "15-06-1996", true);
cre.crear("14401011", "Dylan", "Parra", 23, "M", "04-02-1995", true);
console.log("Muestro \n");
sho.mostrar();
//funcion para eliminar
console.log("\nElimino \n");
era.eliminar("14401011");
console.log("Muestro \n");
sho.mostrar();
//modifico los datos
console.log("\nModifico \n");
up.modificar("13401010", "Dylan", "Dominguez", 40, "M", "04-02-1994", true);
console.log("Muestro \n");
sho.mostrar();
