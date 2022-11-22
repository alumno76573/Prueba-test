document.addEventListener("DOMContentLoaded", function(evento){
    const getUsuarios=document.getElementById("getUsuarios")
    const getPosts=document.getElementById("getPosts")

    getUsuarios.addEventListener("click",()=>{
        const listaUsers=accedeUsers().then((array)=>{
            pintaUsuarios(array)
        })
    })

    const accedeUsers=async()=>{
        try{
            const resUsers=await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json()
            return resUsers
        } catch {

        }
    }
    const pintaUsuario=async(id)=>{
        try{
            const resUser=await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
            console.log(resUser)
        } catch {
            console.log(error)
        }
    }
    function pintaUsuarios(e){
        const contador=0
        const thead=document.getElementsByTagName("thead")[0]
        const tbody=document.getElementsByTagName("tbody")[0]
        const tr=document.createElement("tr")
        const th=document.createElement("th")
        const thUsername=document.createElement("th")
        const thEmail=document.createElement("th")
        const thPosts=document.createElement("th")
        thead.appendChild(tr)
        th.textContent="#"
        tr.appendChild(th)
        thUsername.textContent="Username"
        tr.appendChild(thUsername)
        thEmail.textContent="Email"
        tr.appendChild(thEmail)
        thPosts.textContent="Posts"
        tr.appendChild(thPosts)
        for (let i=0;i<e.length;i++){
            const nuevaFila=document.createElement("tr")
            const iduser=document.createElement("td")
            const username=document.createElement("td")
            const enlaceUsername=document.createElement("a")
            enlaceUsername.setAttribute("href","#")
            enlaceUsername.setAttribute("onclick",`pintaUsuario(${e[i].id})`)
            const correo=document.createElement("td")
            const comentario=document.createElement("td")
            const enlacePost=document.createElement("a")
            enlacePost.setAttribute("href","#")
            enlacePost.setAttribute("onclick",`obtenerPosts(${e[i].id})`)
            enlacePost.textContent="Mostrar Posts"
            iduser.textContent=`${e[i].id}`
            enlaceUsername.textContent=`${e[i].name}`
            username.appendChild(enlaceUsername)
            correo.textContent=`${e[i].email}`
            comentario.appendChild(enlacePost)
            nuevaFila.appendChild(iduser)
            nuevaFila.appendChild(username)
            nuevaFila.appendChild(correo)
            nuevaFila.appendChild(comentario)
            tbody.appendChild(nuevaFila)
        }
    }
})