document.getElementById('regform').addEventListener('submit', (e) => {
    e.preventDefault()

    for (let elemen of e.target.elements) {
        console.log(element.value)
    }

    console.log(e.target.elements)
})