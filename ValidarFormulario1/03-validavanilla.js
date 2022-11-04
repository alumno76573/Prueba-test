window.addEventListener("load",function(){
    //Capturamos los elementos del formulario
    
    const formulario =this.document.querySelector('#formulario')
    const usuario = this.document.querySelector('#user')
    const passwd =this.document.querySelector('#passwd')
    const newpasswd =this.document.querySelector('#newpasswd')
    const fechanac =this.document.querySelector('#fechaNac')
    const condiciones =this.document.querySelector('#condiciones')
    const age =this.document.querySelector('#age')
    //Funcion de validacion del formulario asociada al botón submit
    
            formulario.addEventListener("reset",evento=>{
                evento.preventDefault();
                evento.stopPropagation();
                let String="Usuario: "+usuario.value+"/npasswd: "+passwd.value+"/nnew";
                alert(String);
                
            })
    
            formulario.addEventListener("submit",evento=>{
                //Preveneir el comporatmiento por defecto
                evento.preventDefault();
                evento.stopPropagation(); 
    
                //la variable comienza con el valor true, en el caso de que
                //exista un campo erroneo se pone a falso
            
                let valido = true
                if(!validarUser(usuario)){
                    valido=false
                }
    
                if(!validaPass(passwd)){
                    valido=false
                }
    
                if (!validaPass2(newpasswd,passwd)){
                    valido=false
                }
                if(!validaFecha(fechanac)){
                    valido=false
                }
    
                if(!validaCheck(condiciones)){
                    valido=false
                }
    
                if(!validaEdad(age)){
                    valido=false
                }
                //Si no hemos encontrado ningun error forzamos el envio del formulario
    
                if(valido){
                    formulario.submit();
                }
    
            })
            //--------------- FUNCIONES DE VALIDACION -----------------
    
            //Validamos el usuario, recibimos el input, no el valor del input
    
            function validarUser(el){
                if(!el.value){
                    el.parentNode.querySelector("p").textContent=""
                    el.parentNode.classList.add("error");
                    return false
                } else{
                    el.parentNode.querySelector("p").textContent=""
                    el.parentNode.classList.remove("error");
                    return true
                }
            }
    
            //Validar el password
            function validaPass(el){
                if(el.value.length<7){
                    marcaError(el,"El password debe tener al menos 7 carácteres");
                    return false
                } else{
                    marcaValido(el)
                    return true
                }
            }
    
            function validaPass2(newpasswd,oldpass){
                if(newpasswd.value===oldpass.value){
                    newpasswd.parentNode.querySelector(".error-feedback").textContent=""
                    return true
                }else{
                    newpasswd.parentNode.querySelector(".error-feedback").textContent="Los password deben coincidir"
                    return false
                }
            }
    
            //Validar Fecha
    
            function validaFecha(el){
                if(el.value){
                    el.parentNode.querySelector(".error-feedback").textContent=""
                    return true
                } else{
                    el.parentNode.querySelector(".error-feedback").textContent="Tiene que seleccionar una fecha"
                    return false
                }   
            }
    
            function validaCheck(el){
                if(el.checked){
                    el.parentNode.querySelector(".error-feedback").textContent=""
                    return true
                }else {
                    el.parentNode.querySelector(".error-feedback").textContent="Tienes que marcar la casilla"
                    return false
                }
            }
    
            function validaEdad(el){
                if(!el.value){
                    el.parentNode.querySelector("p").textContent="Debes Introducir tu edad"
                    el.parentNode.classList.add("error");
                    return false
                } else{
                    el.parentNode.querySelector("p").textContent=""
                    el.parentNode.classList.remove("error");
                    return true
                }
                if(el.value>18){
                    newpasswd.parentNode.querySelector(".error-feedback").textContent=""
                    return true
                } else{
                    el.parentNode.querySelector(".error-feedback").textContent="Eres menor de edad"
                    return false
                }
            }
            //------------------FUNCIONES DE UTILIDAD----------------------
            function marcaError(elemento,mensaje){
                elemento.parentNode.querySelector(".error-feedback").textContent=mensaje
                elemento.parentNode.classList.add(".error")
            }
    
            function marcaValido(elemento){
                elemento.parentNode.querySelector(".error-feedback").textContent=""
                elemento.parentNode.classList.add(".remove")
            }
            
    })
    