document.addEventListener("DOMContentLoaded", function (evento) {
    const getUsuarios = document.getElementById("getUsuarios")
    const getPosts = document.getElementById("getPosts")

    getUsuarios.addEventListener("click", () => {
        const listaUsers = accedeUsers().then((array) => {
            pintaUsuarios(array)
        })
    })

    getPosts.addEventListener("click", () => {
        const listaPosts = accedePosts().then((array) => {
            pintarPosts(array)
        })
    })
    const accedeUsers = async () => {
        try {
            const resUsers = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json()
            return resUsers
        } catch {
            console.log('error')
        }
    }
    const accedePosts = async () => {
        try {
            const resPosts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
            ArrayPosts.pop()
            ArrayPosts.push(resPosts)
            return ArrayPosts
        } catch {
            console.log('error')
        }
    }
})
let ArrayPosts = new Array();
const obtenerPosts = async (id) => {
    try {
        const resPosts = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json()
        ArrayPosts.pop()
        ArrayPosts.push(resPosts)
        pintaposts();
    } catch {
        console.log('error')
    }
}
function pintaposts() {
    const posts = document.getElementById("Posts")
    posts.innerHTML = ""
    let contador = 0
    for (let i = 0; i <= 4; i++) {
        console.log(ArrayPosts[0][i])
        const div_card = document.createElement("div")
        div_card.setAttribute("class", "card")
        posts.appendChild(div_card)
        const div_card_header = document.createElement("div")
        div_card_header.setAttribute("class", "card-header")
        div_card_header.textContent = `${ArrayPosts[0][i].title}`
        div_card.appendChild(div_card_header)
        const div_card_body = document.createElement("div")
        div_card_body.setAttribute("class", "card-body")
        div_card.appendChild(div_card_body)
        const blockquote = document.createElement("blockquote")
        blockquote.setAttribute("class", "blockquote mb-0")
        div_card_body.appendChild(blockquote)
        const p = document.createElement("p")
        p.textContent = `${ArrayPosts[0][i].body}`
        blockquote.appendChild(p)
        const footer = document.createElement("footer")
        footer.setAttribute("class", "blockquote-footer")
        footer.textContent = 'This posts was posted by '
        blockquote.appendChild(footer)
        const a = document.createElement("a")
        a.setAttribute("class", "enlace")
        a.textContent = `User${ArrayPosts[0][i].userId}`
        a.setAttribute("onclick", `pintaUsuario(${ArrayPosts[0][i].userId})`)
        footer.appendChild(a)
        contador = i
    }
    const posts_footer = document.createElement("div")
    posts_footer.setAttribute("class", "centrar")
    posts.appendChild(posts_footer)
    const cinco_menos = document.createElement("button")
    cinco_menos.setAttribute("class", "fa-solid fa-arrow-left boton")
    cinco_menos.setAttribute("onclick", `cincoAnteriores(${contador})`)
    posts_footer.appendChild(cinco_menos)
    const cinco_mas = document.createElement("button")
    cinco_mas.setAttribute("class", "fa-solid fa-arrow-right boton")
    cinco_mas.setAttribute("onclick", `cincoSiguientes(${contador})`)
    posts_footer.appendChild(cinco_mas)
}
function cincoAnteriores(pos) {
    if (pos - 6 >= 0) {
        const posts = document.getElementById("Posts")
        posts.innerHTML = ""
        for (let i = pos - 1; i > pos - 6; i--) {
            const div_card = document.createElement("div")
            div_card.setAttribute("class", "card")
            posts.appendChild(div_card)
            const div_card_header = document.createElement("div")
            div_card_header.setAttribute("class", "card-header")
            div_card_header.textContent = `${ArrayPosts[0][i].title}`
            div_card.appendChild(div_card_header)
            const div_card_body = document.createElement("div")
            div_card_body.setAttribute("class", "card-body")
            div_card.appendChild(div_card_body)
            const blockquote = document.createElement("blockquote")
            blockquote.setAttribute("class", "blockquote mb-0")
            div_card_body.appendChild(blockquote)
            const p = document.createElement("p")
            p.textContent = `${ArrayPosts[0][i].body}`
            blockquote.appendChild(p)
            const footer = document.createElement("footer")
            footer.setAttribute("class", "blockquote-footer")
            footer.textContent = 'This posts was posted by '
            blockquote.appendChild(footer)
            const a = document.createElement("a")
            a.setAttribute("class", "enlace")
            a.textContent = `User${ArrayPosts[0][i].userId}`
            a.setAttribute("onclick", `pintaUsuario(${ArrayPosts[0][i].userId})`)
            footer.appendChild(a)
            contador = i
        }
        const posts_footer = document.createElement("div")
        posts_footer.setAttribute("class", "centrar")
        posts.appendChild(posts_footer)
        const cinco_menos = document.createElement("button")
        cinco_menos.setAttribute("class", "fa-solid fa-arrow-left boton")
        cinco_menos.setAttribute("onclick", `cincoAnteriores(${contador})`)
        posts_footer.appendChild(cinco_menos)
        const cinco_mas = document.createElement("button")
        cinco_mas.setAttribute("class", "fa-solid fa-arrow-right boton")
        cinco_mas.setAttribute("onclick", `cincoSiguientes(${contador})`)
        posts_footer.appendChild(cinco_mas)
    }
}
function cincoSiguientes(pos) {
    if (pos + 6 <= ArrayPosts[0].length) {
        const posts = document.getElementById("Posts")
        posts.innerHTML = ""
        for (let i = pos + 1; i < pos + 6; i++) {
            const div_card = document.createElement("div")
            div_card.setAttribute("class", "card")
            posts.appendChild(div_card)
            const div_card_header = document.createElement("div")
            div_card_header.setAttribute("class", "card-header")
            div_card_header.textContent = `${ArrayPosts[0][i].title}`
            div_card.appendChild(div_card_header)
            const div_card_body = document.createElement("div")
            div_card_body.setAttribute("class", "card-body")
            div_card.appendChild(div_card_body)
            const blockquote = document.createElement("blockquote")
            blockquote.setAttribute("class", "blockquote mb-0")
            div_card_body.appendChild(blockquote)
            const p = document.createElement("p")
            p.textContent = `${ArrayPosts[0][i].body}`
            blockquote.appendChild(p)
            const footer = document.createElement("footer")
            footer.setAttribute("class", "blockquote-footer")
            footer.textContent = 'This posts was posted by '
            blockquote.appendChild(footer)
            const a = document.createElement("a")
            a.setAttribute("class", "enlace")
            a.textContent = `User${ArrayPosts[0][i].userId}`
            a.setAttribute("onclick", `pintaUsuario(${ArrayPosts[0][i].userId})`)
            footer.appendChild(a)
            contador = i
        }
        const posts_footer = document.createElement("div")
        posts_footer.setAttribute("class", "centrar")
        posts.appendChild(posts_footer)
        const cinco_menos = document.createElement("button")
        cinco_menos.setAttribute("class", "fa-solid fa-arrow-left boton")
        cinco_menos.setAttribute("onclick", `cincoAnteriores(${contador})`)
        posts_footer.appendChild(cinco_menos)
        const cinco_mas = document.createElement("button")
        cinco_mas.setAttribute("class", "fa-solid fa-arrow-right boton")
        cinco_mas.setAttribute("onclick", `cincoSiguientes(${contador})`)
        posts_footer.appendChild(cinco_mas)
    }

}
const pintaUsuario = async (id) => {
    try {
        const resUser = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
        const card = document.getElementsByClassName("card")[0].style
        const nombre = document.getElementById("nombre")
        const username = document.getElementById("username")
        const domicilio = document.getElementById("domicilio")
        const ciudad = document.getElementById("ciudad")
        const telefono = document.getElementById("telefono")
        card.display = "block"
        nombre.textContent = "Nombre real: " + `${resUser.name}`
        username.textContent = "Nombre de usuario: " + `${resUser.username}`
        domicilio.textContent = "Domicilio: " + `${resUser.address.street}` + " " + `${resUser.address.suite}`
        ciudad.textContent = "Localidad: " + `${resUser.address.city}`
        telefono.textContent = "Teléfono: " + `${resUser.phone}`
    } catch {
        console.log(error)
    }
}
function pintaUsuarios(e) {
    const thead = document.getElementsByTagName("thead")[0]
    const tbody = document.getElementsByTagName("tbody")[0]
    const tr = document.createElement("tr")
    const th = document.createElement("th")
    const thUsername = document.createElement("th")
    const thEmail = document.createElement("th")
    const thPosts = document.createElement("th")
    thead.appendChild(tr)
    th.textContent = "#"
    tr.appendChild(th)
    thUsername.textContent = "Username"
    tr.appendChild(thUsername)
    thEmail.textContent = "Email"
    tr.appendChild(thEmail)
    thPosts.textContent = "Posts"
    tr.appendChild(thPosts)
    for (let i = 0; i < e.length; i++) {
        const nuevaFila = document.createElement("tr")
        const iduser = document.createElement("td")
        const username = document.createElement("td")
        const enlaceUsername = document.createElement("a")
        enlaceUsername.setAttribute("href", "#")
        enlaceUsername.setAttribute("onclick", `pintaUsuario(${e[i].id})`)
        const correo = document.createElement("td")
        const comentario = document.createElement("td")
        const enlacePost = document.createElement("a")
        enlacePost.setAttribute("href", "#")
        enlacePost.setAttribute("onclick", `obtenerPosts(${e[i].id})`)
        enlacePost.textContent = "Mostrar Posts"
        iduser.textContent = `${e[i].id}`
        enlaceUsername.textContent = `${e[i].name}`
        username.appendChild(enlaceUsername)
        correo.textContent = `${e[i].email}`
        comentario.appendChild(enlacePost)
        nuevaFila.appendChild(iduser)
        nuevaFila.appendChild(username)
        nuevaFila.appendChild(correo)
        nuevaFila.appendChild(comentario)
        tbody.appendChild(nuevaFila)
    }
}
function pintarPosts(e) {
    const posts = document.getElementById("Posts")
    posts.innerHTML = ""
    let contador = 0
    for (let i = 0; i <= 4; i++) {
        const div_card = document.createElement("div")
        div_card.setAttribute("class", "card")
        posts.appendChild(div_card)
        const div_card_header = document.createElement("div")
        div_card_header.setAttribute("class", "card-header")
        div_card_header.textContent = `${e[0][i].title}`
        div_card.appendChild(div_card_header)
        const div_card_body = document.createElement("div")
        div_card_body.setAttribute("class", "card-body")
        div_card.appendChild(div_card_body)
        const blockquote = document.createElement("blockquote")
        blockquote.setAttribute("class", "blockquote mb-0")
        div_card_body.appendChild(blockquote)
        const p = document.createElement("p")
        p.textContent = `${e[0][i].body}`
        blockquote.appendChild(p)
        const footer = document.createElement("footer")
        footer.setAttribute("class", "blockquote-footer")
        footer.textContent = 'This posts was posted by '
        blockquote.appendChild(footer)
        const a = document.createElement("a")
        a.setAttribute("class", "enlace")
        a.textContent = `User${e[0][i].userId}`
        a.setAttribute("onclick", `pintaUsuario(${e[0][i].userId})`)
        footer.appendChild(a)
        contador = i
    }
    const posts_footer = document.createElement("div")
    posts_footer.setAttribute("class", "centrar")
    posts.appendChild(posts_footer)
    const cinco_menos = document.createElement("button")
    cinco_menos.setAttribute("class", "fa-solid fa-arrow-left boton")
    cinco_menos.setAttribute("onclick", `cincoAnteriores(${contador})`)
    posts_footer.appendChild(cinco_menos)
    const cinco_mas = document.createElement("button")
    cinco_mas.setAttribute("class", "fa-solid fa-arrow-right boton")
    cinco_mas.setAttribute("onclick", `cincoSiguientes(${contador})`)
    posts_footer.appendChild(cinco_mas)
}