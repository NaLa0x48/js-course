// const para = document.querySelector('body > h1')

// console.log(para)

const paras = document.querySelectorAll('p')

paras.forEach((para) => {
  return console.log(para)
})

// const errors = document.querySelectorAll('.error')

// errors.forEach((error) => console.log(error))

//get element by id

const title = document.getElementById('page-title')
console.log(title)

//get element by class name(cannot use forEach method cuz its an html collection)

const errors = document.getElementsByClassName('error')

console.log(errors)
console.log(errors[1])

//get elements by tag name

const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)
console.log(paragraphs[1])

//adding and changing page content

// const paragraph = document.querySelector('p')
// paragraph.innerHTML += 'ninjas are awesome'

const parags = document.querySelectorAll('p')
parags.forEach((para) => {
  console.log(para.innerText)
  para.innerText += 'new text'
})

const content = document.querySelector('.content')

//console.log(content.innerHTML)
content.innerHTML += '<h2>This is a new h2 </h2>'

const people = ['mario', 'luigi', 'yoshi']

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`
})
