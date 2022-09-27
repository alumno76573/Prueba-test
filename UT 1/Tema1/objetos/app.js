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