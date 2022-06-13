// const button = document.querySelector('button')
// button.addEventListener('click', function () {
//   console.log('u click')
// })
const ul = document.querySelector('ul')
const items = document.querySelectorAll('li')
const button = document.querySelector('button')
button.addEventListener('click', () => {
  const li = document.createElement('li')
  li.textContent = 'something new todo'
  //ul.append(li)
  ul.prepend(li)
})
// items.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     //console.log('item clicked')
//     // console.log(e.target)
//     // console.log(item)
//     //e.target.style.textDecoration = 'line-through'
//     e.target.remove()
//     //stop bubling to the parents
//     e.stopPropagation()

//     console.log('event in li')
//   })
// })

// const ul = document.querySelector('ul')
// ul.remove()

ul.addEventListener('click', (e) => {
  //console.log('event in ul')
  //console.log(e.target)
  if (e.target.tagName === 'LI') {
    e.target.remove()
  }
})
