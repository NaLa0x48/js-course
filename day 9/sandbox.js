// const link = document.querySelector('a')

// link.setAttribute('herf', 'google.com')
// console.log(link.getAttribute('href'))
// link.innerText = 'the netninja website'

// const message = document.querySelector('p')

// console.log(message.getAttribute('class'))
// message.setAttribute('class', 'success')
// message.setAttribute('style', 'color:green;')

// // const title = document.querySelector('h1')
// // //title.setAttribute('style', 'margin:15px;')
// // console.log(title.style)

// // console.log(title.style.color)
// // title.style.margin = '50px'

// // title.style.color = 'crimson'
// // title.style.fontSize = '60px'

// //adding and removing classes

// // const content = document.querySelector('p')
// // console.log(content.classList)
// // content.classList.add('error')
// // content.classList.remove('error')

// const paras = document.querySelectorAll('p')
// paras.forEach((para) => {
//   if (para.textContent.includes('errors')) {
//     para.classList.add('error')
//   }
//   if (para.textContent.includes('success')) {
//     para.classList.add('success')
//   }
// })

// const title = document.querySelector('.title')
// title.classList.toggle('test')

// const article = document.querySelector('article')
// console.log(article.children)
// console.log(Array.from(article.children))

// Array.from(article.children).forEach((child) => {
//   child.classList.add('artilce-element')
// })

const title = document.querySelector('h2')
console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

console.log(title.nextElementSibling.parentElement.children)
