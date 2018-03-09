import{create}from "./alumno";
import{show}from "./alumno";
import{erase}from "./alumno";
import{update}from "./alumno";

let cre = new create("Crear");
let sho = new show("Mostrar");
let era = new erase("Eliminar");
let up = new update("Modificar");

//funcion para insertar datos 
console.log("\nInserto \n");
cre.crear("14401009","Jesus","Torres",22,"M","11-02-1996",true);
cre.crear("13401010","carlos","Puga",21,"M","15-06-1996",true);
cre.crear("14401011","Dylan","Parra",23,"M","04-02-1995",true);
console.log("Muestro \n");
sho.mostrar();


//funcion para eliminar
console.log("\nElimino \n");
era.eliminar("14401011");
console.log("Muestro \n");
sho.mostrar();

//modifico los datos
console.log("\nModifico \n");
up.modificar("13401010","Dylan","Dominguez",40,"M","04-02-1994",true);
console.log("Muestro \n");
sho.mostrar(); 