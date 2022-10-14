window.addEventListener("load", e => {


    //vamos a cambiar el estilo del elemento con clase navbar-brand 
  //..........................COMPLETAR

  var elemento=document.getElementsByClassName("navbar-brand");
  elemento[0].classList.add("marcar");

    //seleccionamos el elemento a dentro de div.jumbotron
   //.......................COMPLETAR
   
   var elemento2=document.getElementsByClassName("jumbotron");
   elemento2[0].innerHTML;
   //const btnJumbotron=document.querySelector(".jumbotron a.btn-primary")
   
   //Le quitamos y le ponemos una clase 
   //..........................COMPLETAR

   elemento2[0].classList.add("marcar")
   elemento2[0].classList.remove("marcar")

    //Seleccionamos todos los elementos a con clase btn-secondary dentro de elementos de la
    //clase .col-md-6
    //.......................................COMPLETAR

    var enlaces=document.querySelectorAll(".col-md-6 a[class='btn btn-secondary']")
    //const btnCols=document.querySelectorAll(".col-md-6 a.btn-secondary")

    //si queremos hacer algo con todos los elementos de la colección habría que recorrerlos.
    //Quitar la clalse btn-secondary
    //Añadir la clase btn-danger
   //............COMPLETAR

    for (let i=0;i<enlaces.length;i++){
        enlaces[i].classList.remove("btn-secondary")
        enlaces[i].classList.add("btn-danger")
    }
    /*
    btnCols.forEach(element => {
        element.classList.remove("btn-secondary")
        element.classList.add("btn-danger")
    })*/

   //Seleccionar todos los elementos con la clase col-md-6 
   //...............................COMPLETAR

   var elementos_col=document.querySelectorAll(".col-md-6")

    //accedo al tercer elemento y le cambio el estilo a mano
    //................................COMPLETAR

    elementos_col[2].style.color="blue"

    //recorremos todos los elementos
    let cols=document.body.childNodes
    console.log(cols)
    cols.forEach(element => {
        //le asignamos un evento click a cada uno de ellos
        element.addEventListener("click", function (e) {
            element.classList.toggle("marcar");
        });

    });

});