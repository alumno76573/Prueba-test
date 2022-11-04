document.addEventListener("DOMContentLoaded",function(){
    const email=document.getElementById("email")
    const cp=document.getElementById("cp")
    const formulario=document.getElementById("formulario")

    formulario.addEventListener("submit",function(evento){
        evento.preventDefault()
        evento.stopPropagation()

        let valido = true;

        if (validaEmail=true){
            email.setCustomValidity("Campo vacío")
            valido = false
        } else {
            email.setCustomValidity("")
        }

        if (validaCP=true){
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

    function validaCP(el){
        const erCP=/^[0-5][0-9]{4}$/
        const cpvalue=el.value.trim()
        if (cpvalue.match(erCP)){
            el.setCustomValidity("")
            return true
        } else {
            el.setCustomValidity("El código postal es erróneo")
            return false
        }
    }
    function validaEmail(el){
        const erEmail=/^[-\W.%+]{1,64}@(?:[A-Z0-9]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if (erEmail.test(el.value.trim())){
            el.setCustomValidity("")
            return true 
        } else {
            el.setCustomValidity("EL email no tiene el formato correcto")
            return false
        }
    }
})