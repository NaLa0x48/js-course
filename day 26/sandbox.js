// //store data in local storage
// localStorage.setItem('name', 'naeyar')
// localStorage.setItem('age', 23)

// //get data from local storage

// let name = localStorage.getItem('name')
// let age = localStorage.getItem('age')

// console.log(name)
// console.log(age)

// //updating data
// localStorage.age = 22
// localStorage.setItem('name', 'nae')
// name = localStorage.getItem('name')
// age = localStorage.getItem('age')
// console.log(name, age)

// //deleting items in local storage
// localStorage.clear()
// //localStorage.removeItem('name')
// name = localStorage.getItem('name')

// console.log(name)

const todos = [
  { text: 'play mariokart', author: 'shuan' },
  { text: 'buy some mil', author: 'mario' },
  { text: 'buy some weed', author: 'luigi' },
]

console.log(JSON.stringify(todos))

localStorage.setItem('todos', JSON.stringify(todos))

const stored = localStorage.getItem('todos')
console.log(JSON.parse(stored))
