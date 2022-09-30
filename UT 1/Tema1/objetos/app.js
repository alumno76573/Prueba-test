var coche={}

var usuario={
    nombre:'Felipe',
    edad:43,
    saludo:function(){
        console.log(`Hola soy ${this.nombre}`)
    },
};
console.log(usuario.saludo)

//Objetos deconstruidos
function persona(nombre,edad){
    this.nombre=nombre
    this.edad=edad
    this.saludar=function(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

var profesor=new persona("Maria",25)

var persona1=new Object({
    nombre:'Pedro',
    edad:24,
    saludar:function(){
        console.log(`Hola soy ${this.nombre}`)
    }
})

const mycar=new Object()
mycar.make='Ford'
mycar.model='Puma'
mycar.year='2020'

class persona2{
    constructor(nombre,apellidos,year){
        this._nombre=nombre
        this._apellidos=apellidos
        this._year=year
    }

    get year(){
        return this._year
    }
    set year(anno){
        this._year=anno
    }
}

//OBJETO DATE

var fecha=new Date()    //Toma la fecha del sistema
var YEAR=fecha.getFullYear()
var MES=fecha.getMonth()
var DAY=fecha.getDay()

//OBJETO MATH

var pi=Math.PI
console.log(Math.round(4.5))
console.log(Math.round(3,2))
console.log(Math.ceil(4,3))
console.log(Math.ceil(-4,3))
console.log(Math.floor(4.2))
console.log(Math.min(4,5,-3,9,1,0))

var aletatorio=Math.random()    //Devuelve un numero aleatorio entre 0 y 1

function generarNumero(numMax){
    return Math.round(Math.random()*numMax)
}

generarNumero(100)

//OBJETO ARRAY, MAP, SET

const a1=new Array("rojo","amarillo","blanco")
const a2=new Array(4)

const a3=Array.from('Sebastian Rubio')
const set=new Set(['foo','bar','bar','foo'])
console.log(Array.from(set))

const map=new Map([[1,2],[2,4],[4,8]])
Array.from(map)

const mapper=new Map([['1','a'],['2','b']])
const a6=Array.from(mapper.values())
const a7=Array.from(mapper.keys())

let a8=Array.from([1,2,3], x=>x+x)
let a9=Array.from({length:5},(v,i)=>i)
console.log(a9)
console.log(Array.isArray(a9))