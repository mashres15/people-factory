const personForm = document.querySelector('form#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const person ={
        name: f.personName.value, 
        age: f.personAge.value,
        color: setColor(f.color.value).outerHTML,
    }
    document.getElementById('personForm').style.borderColor = f.color.value
    document.querySelector('h1').textContent = f.personName.value + " " + f.personAge.value
    document.getElementById('emptyPara').textContent = "Your Input - Name: " + f.personName.value + ", Age: " + f.personAge.value + ", Color: " + f.color.value

    
    details.appendChild(createList(person))
}

personForm.addEventListener('submit', handleSubmit)



function createListElement(field, value) {
    const li = document.createElement("li");
    li.innerHTML = `${field}: ${value}`
    return li
}

function createList(personData){
    const ul = document.createElement('ul')
    Object.keys(personData).map(function(field){
        const li = createListElement(field, personData[field])
        ul.appendChild(li)
    })

    return ul
}

function setColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.height = "50px"
    colorDiv.style.width = "100px"

    return colorDiv
}