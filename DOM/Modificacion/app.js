// La propiedad innerHTML
let inner=document.getElementById("inner")
inner.innerHTML="Hola a <b>todosss</b>"

//Modificamos el contenido y el propio elemento
let outer=document.getElementById("outer")
outer.outerHTML="<ul><li>A</li><li>B</li></ul>"

//Modificamos el contenido de un elemento, no distingue las entidades html
let text=document.getElementById("text")
text.innerText="<b>Adios a todos</b>"

//Establecer un titulo
inner.title="Mensaje al pasar el ratón"
inner.id="NO"