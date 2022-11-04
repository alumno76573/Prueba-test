document.addEventListener("DOMContentLoaded",function(evento){
    const email=document.getElementById("email")
    const cp=document.getElementById("cp")
    const formulario=document.getElementById("formulario")

    email.addEventListener("keyup",function(e){
        if (this.value){
            this.setCustomValidity("")
        } else {
            this.setCustomValidity("Campo vacío")
        }
    })
    cp.addEventListener("keyup",function(e){
        if (this.value.length==5){
            this.setCustomValidity("")
        } else {
            this.setCustomValidity("Debe de tener 5 caracteres")
        }
    })
    formulario.addEventListener("submit",function(evento){
        evento.preventDefault()
        evento.stopPropagation()

        let valido = true;

        if (!email.value){
            email.setCustomValidity("Campo vacío")
            valido = false
        } else {
            email.setCustomValidity("")
        }

        if (cp.value.length==5){
            cp.setCustomValidity("")
        } else {
            cp.setCustomValidity("Debe tener 5 caracteres")
            valido=false
        }
        if (valido) {
            this.submit
        } else {
            email.setCustomValidity("")
        }
    })
})