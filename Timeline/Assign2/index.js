// const username = document.querySelector('#username')
// const password = document.querySelector('#password')
// const email = document.querySelector('#email')
// const percentage = document.querySelector('#percentage')
// const phoneno = document.querySelector('#phoneno')
// const dob = document.querySelector('#dob')
// const submit = document.querySelector('#submit')
// const form = document.querySelector('form')
// const male = document.querySelector('#male')
// const female = document.querySelector('#female')
// const data = document.querySelector('#data')

// // const gender = document.getElementsByName('gender'); //also - NodeList
// // let genderRes;

// let ob = {}

// console.log(male)

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(e)
//   console.log(form.username)
//   ob.username = username.value
//   ob.password = password.value
//   ob.email = email.value
//   ob.percentage = percentage.value
//   ob.phoneno = phoneno.value
//   ob.dob = dob.value
//   console.log(male.name)
//   if (male.checked) {
//     ob.male = male.value
//   } else if (female.checked) {
//     ob.female = female.value
//   }
  // data.innerHTML = JSON.stringify(ob)

  // gender.forEach((ele)=>{
  //   if (ele.checked) genderRes = v.value;
  // });
  // console.log(genderRes)

  // let span = document.querySelector(".display-percentage");
  // percentage.addEventListener("input",(e)=>{
  //   span.innerHTML = e.target.value
  // })

// })

// console.log(ob)


// shortcut FormData class/object

let form = document.querySelector(".form-control");

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  let data = new FormData(form);
  let finalData = Object.fromEntries(data);
  let course = data.getAll("course");
  finalData.course = course
  console.log(finalData)
})






