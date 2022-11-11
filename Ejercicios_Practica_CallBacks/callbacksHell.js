const URL="wmedia.es/datos.json"
const URL2="wmedia.es/datos2.json"
const URL3="wmedia.es/datos3.json"
const URL4="wmedia.es/datos4.json"
const URL5="wmedia.es/datos5.json"
const archivo="archivo.txt"

function descargar(url,fn){
    console.log("Descargando.......")
    setTimeout(function(){
        console.log("Descargado")
        fn(url)
    },2000)   
}

descargar(URL,(archivo)=>{
    console.log("Procesamiento")
    descargar(URL2,(archivo)=>{
        console.log("Procesando "+archivo)
        descargar(URL3,(archivo)=>{
            console.log("Procesando "+archivo)
            descargar(URL4,(archivo)=>{
                console.log("Procesando "+archivo)
                descargar(URL5,(archivo)=>{
                    console.log("Procesando "+archivo)
                })
            })
        })
    })
})