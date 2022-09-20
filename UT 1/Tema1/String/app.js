//Las cadenas empiezan en la posicion 0
console.log("Hola"+" Mundo")
const nombre="Roberto"
console.log("Hola "+nombre)
console.log(`Hola ${nombre} que tal`)
console.log(nombre.length)
console.log(nombre.includes('Ro'))
console.log(nombre.slice(2,5))
console.log(nombre.replace('Ro','Al'))
const texto='     ff3444r r4r4r4r r4rr4     '
//Limpia la cadena de blancos al principio y al final
console.log(texto.trim())
const calle='Bravo Murillo, 38, 2B'
console.log(calle.split(','))
var trozos=calle.split(',')
console.log(trozos[1])