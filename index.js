const personForm = document.querySelector('form#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.color.value
  document.getElementById('personForm').style.borderColor = color
  document.querySelector('h1').textContent = name +" " + age 
  document.getElementById('emptyPara').textContent = "Your Input - Name: " + name + ", Age: " + age + ", Color: " + color
}

personForm.addEventListener('submit', handleSubmit)

