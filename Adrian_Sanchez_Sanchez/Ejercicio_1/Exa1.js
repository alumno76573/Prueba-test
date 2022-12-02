document.addEventListener("DOMContentLoaded",function(evento){
    //Recogo en constantes los items del html que voy a utilizar
    const main=document.getElementsByTagName("main")[0]
    const ul=document.querySelector(".flex")

    const primero=document.querySelector(".primero")
    const segundo=document.querySelector(".segundo")
    const tercero=document.querySelector(".tercero")
    const cuarto=document.querySelector(".cuarto")
    const quinto=document.querySelector(".quinto")

    const mayor_menor=document.getElementsByClassName("mayor_menor")[0]
    const menor_mayor=document.getElementsByClassName("menor_mayor")[0]
    //Creo la variable repetidos que voy a utilizar para devolver en el html los items que han repetido posicion
    let repetidos

    mayor_menor.addEventListener("click",function(e){
        //Igualo repetidos a 0 cada vez que se inicie la funcion
        repetidos=0
        //Hago un control para saber que items repiten posición
        if (ul.children[0].classList.contains("quinto")){
            //En el caso de que repitan posición se les colorea el fondo y sumamos 1 a la variabble repetidos
            quinto.classList.add("colorear")
            repetidos++
        } else {
            quinto.classList.remove("colorear")
        }
        if (ul.children[1].classList.contains("cuarto")){
            cuarto.classList.add("colorear")
            repetidos++
        } else {
            cuarto.classList.remove("colorear")
        }
        if (ul.children[2].classList.contains("tercero")){
            tercero.classList.add("colorear")
            repetidos++
        } else {
            tercero.classList.remove("colorear")
        }
        if (ul.children[3].classList.contains("segundo")){
            segundo.classList.add("colorear")
            repetidos++
        } else {
            segundo.classList.remove("colorear")
        }
        if (ul.children[4].classList.contains("primero")){
            primero.classList.add("colorear")
            repetidos++
        } else {
            primero.classList.remove("colorear")
        }
        //Limpio el main para no duplicar contenido en la página y le añado el contenido
        //nuevo según el orden requerido
        main.innerHTML=''
        main.appendChild(ul)
        ul.appendChild(quinto)
        ul.appendChild(cuarto)
        ul.appendChild(tercero)
        ul.appendChild(segundo)
        ul.appendChild(primero)
        //Creo un h2 y le añado un texto junto a la variable repetidos para mostrarla en pantalla
        const h2=document.createElement("h2")
        h2.textContent=`Han coincidido ${repetidos} elementos en la misma posicion`
        main.appendChild(h2)
    })
    menor_mayor.addEventListener("click",function(e){
        //Igualo repetidos a 0 cada vez que se inicie la funcion
        repetidos=0
        //Hago un control para saber que items repiten posición
        if (ul.children[0].classList.contains("primero")){
            //En el caso de que repitan posición se les colorea el fondo y sumamos 1 a la variabble repetidos
            primero.classList.add("colorear")
            repetidos++
        } else {
            primero.classList.remove("colorear")
        }
        if (ul.children[1].classList.contains("segundo")){
            segundo.classList.add("colorear")
            repetidos++
        } else {
            segundo.classList.remove("colorear")
        }
        if (ul.children[2].classList.contains("tercero")){
            tercero.classList.add("colorear")
            repetidos++
        } else {
            tercero.classList.remove("colorear")
        }
        if (ul.children[3].classList.contains("cuarto")){
            cuarto.classList.add("colorear")
            repetidos++
        } else {
            cuarto.classList.remove("colorear")
        }
        if (ul.children[4].classList.contains("quinto")){
            quinto.classList.add("colorear")
            repetidos++
        } else {
            quinto.classList.remove("colorear")
        }
        //Limpio el main para no duplicar contenido en la página y le añado el contenido
        //nuevo según el orden requerido
        main.innerHTML=''
        main.appendChild(ul)
        ul.appendChild(primero)
        ul.appendChild(segundo)
        ul.appendChild(tercero)
        ul.appendChild(cuarto)
        ul.appendChild(quinto)
        //Creo un h2 y le añado un texto junto a la variable repetidos para mostrarla en pantalla
        const h2=document.createElement("h2")
        h2.textContent=`Han coincidido ${repetidos} elementos en la misma posicion`
        main.appendChild(h2)
    })
})
