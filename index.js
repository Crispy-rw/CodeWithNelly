document.addEventListener("DOMContentLoaded", function (event) {
    fetchData();

    document.getElementById('header-two').addEventListener('click', function (e) {
        document.getElementById('cards').style.display = 'flex'
        document.getElementById('header').style.display = 'flex'
        document.getElementById('header-two').style.display = 'none'
        const blogs = document.getElementById('blogs')
        document.getElementById('body').removeChild(blogs)
    })

})

function fetchData() {
    const section = document.getElementById('cards')

    fetch('https://jsonplaceholder.typicode.com/users',).
        then(data => data.json()).
        then(data => {
            data.forEach((data) => {
                const newCard = card(data)
                section.appendChild(newCard)
            })
        }).catch(e => console.log(e))
}


function card(data) {

    const div = document.createElement('div')
    div.className = 'card'

    const header = document.createElement('span')
    header.className = 'header'
    header.innerText = data.name.slice(0, 2)

    const name = document.createElement('span')
    name.className = 'name'
    name.innerText = data.name

    const email = document.createElement('span')
    email.className = 'email'
    email.innerText = data.email

    const btn = document.createElement('span')
    btn.className = 'btn'
    btn.innerText = 'Read User\'s Blogs'

    div.appendChild(header)
    div.appendChild(name)
    div.appendChild(email)
    div.appendChild(btn)

    btn.addEventListener('click', function (e) {
        document.getElementById('cards').style.display = 'none'
        document.getElementById('header').style.display = 'none'
        document.getElementById('header-two').style.display = 'flex'
        getUsersPost(data.id)
    })
    return div;
}

function getUsersPost(id) {
    const section = document.createElement('section')
    section.id = 'blogs'
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).
        then(posts => posts.json()).
        then(posts => {
            posts.forEach((post) => {
                console.log(post)
                const title = document.createElement('p')
                title.className = 'blog-title'
                title.innerText = post.title

                const body = document.createElement('p')
                body.className = 'blog-body'
                body.innerText = post.body

                section.appendChild(title)
                section.appendChild(body)

            })
        })
    document.body.appendChild(section)
}

