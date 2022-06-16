//when form is submitted the page refreshed
const form = document.querySelector('.signup-form')
//const username = document.querySelector('#username')
const feedback = document.querySelector('.feedback')
const usernamePattern = /^[a-zA-Z]{6,12}$/
form.addEventListener('submit', (e) => {
  e.preventDefault()
  //console.log(username.value)
  //dot notation and id
  //   form.username
  //   console.log(form.username.value)
  const username = form.username.value
  if (usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = 'that name is valid'
  } else {
    //feedback bad info
    feedback.textContent =
      'username must contain letters 6 and 12 characters long'
  }
})

// const username = '213123shuanp'
// const pattern = /[a-z]{6,}/

// //let result = pattern.test(username)
// //console.log(result)

// // if (result) {
// //   console.log('regex test passed')
// // } else {
// //   console.log('regex has failed')
// // }

// let result = username.search(pattern)

// console.log(result)

//live feedback

form.username.addEventListener('keyup', (e) => {
  //console.log(e.target.value, form.username.value)
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success')
  } else {
    form.username.setAttribute('class', 'error')
  }
})
