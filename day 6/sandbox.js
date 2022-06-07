//returing a value

// const calcArea = function (radius) {
//     return (area = 3.14 * radius ** 2)
// }

// //arrow function
// const calcArea = (radius) => {
//   return 3.14 * radius ** 2
// }
// const greet = () => 'hello world'
// const result = greet()
// console.log(result)
// const area = calcArea(5)
// console.log(area)

// const bill = (product, tax) => {
//   let total = 0
//   for (let i = 0; i < product.length; i++) {
//     total += product[i] + product[i] * tax
//   }
//   return total
// }

// console.log(bill([10, 15, 30], 0.2))

// const name = 'shuan'
// //function
// const greeting = () => 'hello'

// let resultOne = greeting()
// console.log(resultOne)

// //method

// let resultTwo = name.toUpperCase()

// console.log(resultTwo)

// //foreach method and callback

// const myFunc = (callbackFunc) => {
//   let value = 50
//   callbackFunc(value)
// }

// myFunc((val) => {
//   //do something
//   console.log(val)
// })

//callback and foreach

let people = ['nae', 'ann', 'mario', 'shuan']

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}
// people.forEach((person, index) => {
//   console.log(index, person)
// })

people.forEach(logPerson)

const unOrderList = document.querySelector('.people')

let html = ``
people.forEach((person) => {
  //create html template
  html += `<li style="color: purple">${person}</li>`
})

console.log(html)
console.log(unOrderList)
unOrderList.innerHTML = html
