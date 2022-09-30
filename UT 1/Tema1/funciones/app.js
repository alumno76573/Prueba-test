const mensaje="hello hello"
function nueva(){
    console.log('Hola mundo')
    console.log('mensaje')
}
nueva()
Suma(2,4)
function Suma(a,b){
    var total=a+b
    console.log(total)
}
Suma(2,3)
//console.log(total)

function otraNueva(name='coge el valor por defecto'){
    console.log(name)
}
otraNueva('Toma el valor')
otraNueva()

function devuelveHola(texto='Hola'){
    return texto+' Mundo'
}
console.log(devuelveHola())
console.log(devuelveHola('Hello'))

function devuelve(name='Pedo'){
    return `Hola ${name}`
}

//FUNCIONES ANÓNIMAS

var miNumero=function(numero=7){
    return numero
}
console.log(miNumero())
console.log(miNumero(89))

//ARROW FUNCTION
//Tiene la particularidad de que pueden acceder
//a un objeto que se llama this

const mynumber1=()=>'Hello'
const mynumber2=(numero=19)=>{
    return numero
}
console.log(mynumber2(57))