function Saludar(n){
    console.log("HOLA "+n)
  }
  console.log("Inicio")
  setTimeout(Saludar("Ana"),2000)
  console.log("Fin")
  
  //------------------------------------
    const URL="wmedia.es/datos.json"
    function Descargar(url){
      console.log("Descargando............")
      setTimeout(function(){
        console.log("Descargado"),3000
      })
    }

function ProcesarDatos(fichero){
    console.log("Procesando datos....")
}
//Descargar(URL)
//ProcesarDatos(fichero)

//---Solucion

function Descargar(url,fn){
    console.log("Descargando.....")
    setTimeout(function(){
        console.log("DESCARGADO")
        fn()
    },3000)
}

Descargar(URL,ProcesarDatos)
Descargar(URL,function(){
    console.log("Procesando.......")
})