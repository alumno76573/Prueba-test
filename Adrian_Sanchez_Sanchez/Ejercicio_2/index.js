document.addEventListener("DOMContentLoaded",function(evento){
    const ordenar=document.getElementsByClassName("ordenar")[0]
    const colorear=document.getElementsByClassName("colorear")[0]
    const areaTexto=document.getElementById("textarea")
    areaTexto.value=""
    const listarLoteria=obtenerPosts().then((array)=>{
        pintarLoteria(array)
    })

    ordenar.addEventListener("click", ()=>{
        ordenarLoteria()
    })
    colorear.addEventListener("click", ()=>{
        colorearPrimerosUltimos()
    })
})
let ArrayLoteria = new Array();
const obtenerPosts=async ()=>{
    try{
        const resloteria=await (await fetch(`loteria3.json`)).json()
        ArrayLoteria.pop()
        ArrayLoteria.push(resloteria)
        return ArrayLoteria
    } catch {
        console.log('error')
    }
}
let ArrayOrdenado=new Array();
function pintarLoteria(array){
    const tbody=document.getElementsByTagName("tbody")[0]
    for (let i=1;i<10;i++){
        const tr=document.createElement("tr")
        const td=document.createElement("td")
        td.textContent=`${i}`
        tr.appendChild(td)
        for (let j=0;j<3;j++){
            const td=document.createElement("td")
            td.textContent=`${array[0][i][j]}`
            if (array[0][i][j]==array[0][i][0]){
                ArrayOrdenado.push(array[0][i][j])
                td.setAttribute("id",`${i}`)
            }
            if (array[0][i][j]==array[0][i][1]){
                td.setAttribute("id",`${i}segundo`)
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        const tdboton=document.createElement("td")
        const boton=document.createElement("button")
        boton.setAttribute("onclick",`mandarAlTextArea(${i})`)
        boton.textContent="Enviar"
        tdboton.appendChild(boton)
        tr.appendChild(tdboton)
        tbody.appendChild(tr)
    }
}
function ordenarLoteria(){
    ArrayOrdenado.sort((a,b)=>b-a)
    const tbody=document.getElementsByTagName("tbody")[0]
    for (let i=0;i<ArrayOrdenado.length;i++){
        const cambio=document.getElementById(`${i+1}`)
        cambio.textContent=`${ArrayOrdenado[i]}`
    }
}
function colorearPrimerosUltimos(){
    for (let i=0;i<ArrayOrdenado.length;i++){
        const cambio=document.getElementById(`${i+1}`)
        if ((i+1)<=3){
            cambio.classList.add("bg-success")
        }
        if ((i+1)>=7){
            cambio.classList.add("bg-danger")
        }
    }
}
let ArrayTextarea=new Array();
function mandarAlTextArea(num){
    console.log(ArrayTextarea)
    const areaTexto=document.getElementById("textarea")
    areaTexto.value=""
    if (ArrayTextarea.indexOf(num)){
        console.log('entra')
        ArrayTextarea.push(num)
        ArrayTextarea.forEach(element => {
            areaTexto.value+= element +", "
        })
    } else{

    }
}