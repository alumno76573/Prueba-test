function MiFuncion(fn) {
    fn();
  }
function Saluda(){
    console.log("Hola")
}
MiFuncion(Saluda)
MiFuncion(function saluda(){
    console.log("Hola")
 })
MiFuncion(function(){
    console.log("Hola")
})
MiFuncion(()=>{
    console.log("Hola")
})

/********************************************************************/

function unaFuncion(fn){
    const nombre="Rosa"
    fn(nombre)
}
function misaluda(nombre){
    console.log("Hola"+nombre)
}
unaFuncion(misaluda)
unaFuncion((nombre)=>{
    console.log("Hola"+nombre)
})
unaFuncion(nombre=>{
    console.log("Hola"+nombre)
})