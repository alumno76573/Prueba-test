//Recorrer Array doble

var palabras_espana =new Array ('Facebook','tuenti','youtube','hotmail','marca')
var palabras_suiza =new Array ('Facebook','tuenti','youtube','hotmail','marca')
var palabras_portugal =new Array ('Facebook','tuenti','youtube','hotmail','marca')
var palabras_mas_buscadas =new Array (palabras_espana,palabras_suiza,palabras_portugal)

document.write('<table border=1>')

for(i=0;i<palabras_mas_buscadas.length;i++){
    
    document.write("</tr>")
    document.write("<td><b> Estado "+ i + "</b></td>")
    for(j=0;j<palabras_mas_buscadas[i].length;j++){
        document.write("<td>"+palabras_mas_buscadas[i][j]+"</d>")
    }
    document.write("</tr>")
}

document.write('</table>')

//ahora vamos a recorrerlo pero con un bucle for_of (ES6)

for (num of a1){
    console.log(num);
}

//También podemos recorrerlo con un forEach

a1.forEach(function (elemento, indice, array) {
    console.log(`${indice}:${elemento}`);
})

//Una cadena tambien se puede recorrer como un array de caracteres:

const cadena="HOLA MUNDO";

for (car of cadena){
    console.log(car);
}

const lenguajes=new Array('CSS','JavaScript','HTML','PHP');
const frameworks=new Array('React','Vue','Angular.js');

console.log(lenguajes);
lenguajes.reverse();
console.log(lenguajes);
lenguajes.sort();
console.log(lenguajes);


const tecnologias=lenguajes.concat(frameworks);
console.log(lenguajes);
console.log(tecnologias);

tecnologias.push('Webpack');
console.log(tecnologias);

const tecnologiasSV=tecnologias.join(',')
console.log(tecnologiasSV())
tecnologias.pop

//CLASES

class Persona {
    //metodo contructor
    constructor(nombre, apellidos, anioNac){
        this._nombre=nombre;
        this._apellidos=apellidos;
        this._anioNac=anioNac;
    }
    //podemos declarar métodos getters, setters...
    get anioNac(){
        return this._anioNac
    }
}

//creacion de un objeto por instanciación
const p1=new Persona('Leire','Garcia',1980);

console.log(p1);
console.log(p1._anioNac);