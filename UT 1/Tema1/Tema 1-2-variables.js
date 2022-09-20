//variable definida de forma globar
var mensaje="Variable de tipo string"
console.log(mensaje)
var telefono="65832149"
console.log(telefono)
// variables según ecmascript6
let nombre="Mi nombre"
console.log(nombre)
//constantes
const apellido="Apellidos"
console.log(apellido)
//apellido="Segundo apellido"

//Puedo definir una variable despues de haberla utilizado
console.log(noDefinida)
var noDefinida="232323232323"

//Con let no se permite utilizarla antes de definirla

//console.log(varDefinida)
let varDefinida="77777777"
console.log(varDefinida)

if(true){
    const varLocal="variable local"
}
//console.log(varLocal)
function sayHello(){
    const varLocal="Una variable nueva"
    console.log(varLocal)
}
