document.addEventListener("DOMContentLoaded", function(evento){
    const email=document.getElementById("email")
    const password=document.getElementById("password")
    const form=document.getElementById("form")
    let valido=true

    form.addEventListener("submit", function(evento){
        evento.preventDefault()
        evento.stopPropagation()
        getEmailAsync(email.value)
        .then((correo)=>{
            if (correo!=null){
                email.parentNode.classList.remove("error")
                email.parentNode.querySelector("p").textContent=""
            } else {
                valido=false
                email.parentNode.classList.add("error")
                email.parentNode.querySelector("p").textContent="Correo inválido"
            }
        })
        getPasswordAsync(email.value)
        .then((zipcode)=>{
            console.log(zipcode, password)
            if (zipcode==password.value){
                console.log("si")
                password.parentNode.querySelector("p").textContent=""
            } else {
                valido=false
                password.parentNode.classList.add("error")
                password.parentNode.querySelector("p").textContent="Contraseña inválida"
            }
        })
        if (valido==true){
            window.open("blog.html")
        }
        
    })
    
})
const getEmailAsync=async(email)=>{
    try{
        const resEmail=await (await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)).json()
        if (resEmail.length>0){
            return resEmail[0].email
        } else {
            return null
        }
    } catch{

    }
}
const getPasswordAsync=async(email)=>{
    try{
        const resPassword=await(await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)).json()
        if (resPassword.length>0){
            return resPassword[0].address.zipcode
        } else {
            return null
        }
    } catch{

    }
}