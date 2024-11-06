const username = document.querySelector('#username')
const password = document.querySelector('#password')
const email = document.querySelector('#email')
const percentage = document.querySelector('#percentage')
const phoneno = document.querySelector('#phoneno')
const dob = document.querySelector('#dob')
const submit = document.querySelector('#submit')
const form = document.querySelector('form')
const male = document.querySelector('#male')
const female = document.querySelector('#female')
const data = document.querySelector('#data')

let ob = {}

console.log(male)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e)
  ob.username = username.value
  ob.password = password.value
  ob.email = email.value
  ob.percentage = percentage.value
  ob.phoneno = phoneno.value
  ob.dob = dob.value
  if (male.checked) {
    ob.male = male.value
  } else if (female.checked) {
    ob.female = female.value
  }
  data.innerHTML = JSON.stringify(ob)
})

console.log(ob)



