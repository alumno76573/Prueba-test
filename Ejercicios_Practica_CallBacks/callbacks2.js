function saludar(nombre){
    alert("Hola"+nombre)
}
function obtenerNombre(){
    const nombre=prompt("Introduce un nombre")
    return nombre
}
const nombre=obtenerNombre()
saludar(nombre)

function obtenerNombre(fn){
    const nombre=prompt("Introduce un nombre")
    fn(nombre)
}
obtenerNombre(saludar)
obtenerNombre(function(nombre){
    alert("Hola"+nombre)
})
obtenerNombre(saludar(nombre))
obtenerNombre(nombre=>{
    console.log("Hola"+nombre)
})