let miPrimeraPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Exito")
    },2000)
})
miPrimeraPromesa
.then((value)=>{
    console.log(value)
})
.catch(()=>{
    console.log("Ha habido un error")
})