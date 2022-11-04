document.addEventListener("DOMContentLoaded", function (evento) {
    const usuario = document.getElementById('uname')
    const clave = document.getElementById("pwd")
    const form = this.querySelector('form')

    form.addEventListener("submit", validaFormulario(evento))

    usuario.addEventListener("keyup", function (e) {
        if (this.value) {
            this.setCustomValidity("")
        } else {
            this.setCustomValidity("Campo vacío")
        }
    })
    clave.addEventListener("keyup", function (e) {
        if (this.value.length >= 6) {
            this.setCustomValidity("")
        } else {
            this.setCustomValidity("La contraseña es demasiado pequeña")
        }
    })

    function validaFormulario(evento) {
        evento.preventDefault()
        evento.stopPropagation()

        let valido = true;

        if (!usuario.value) {
            usuario.setCustomValidity("Campo vacío")
            valido = false
        } else {
            usuario.setCustomValidity("")
        }

        if (clave.value.length < 6) {
            clave.setCustomValidity("Menor de 6 caracteres")
            valido = false
        } else {
            clave.setCustomValidity("")
        }

        if (valido) {
            this.submit
        } else {
            usuario.setCustomValidity("")
        }
    }
})