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

//FUNCIONES ANÓNIMAS

var miNumero=function(numero=7){
    return numero
}
console.log(miNumero())
console.log(miNumero(89))