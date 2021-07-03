document.addEventListener("DOMContentLoaded", function (event) {
    fetchData();
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
    })
    return div;
}

