// //template strings

// const title = 'Best reads of 2022'
// const author = 'Mario'
// const likes = 30

// // const result =
// //   'The blog is called ' + title + ' by ' + author + ' has ' + likes + ' likes.'
// // console.log(result)

// //template string way

// let result = `The blog called ${title} by ${author} has ${likes} likes.`
// console.log(result)

// //creating html templates

// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `

// console.log(html)

//arrays

let ninja = ['shaun', 'ryu', 'chan-li']
// ninja[1] = 'ken'
// console.log(ninja[1])

// let ages = [20, 25, 30, 35]
// console.log(ages)

let random = ['shuan', 'ryu', 20, 25, 30]
console.log(random.length)

//array methods

// let result = ninja.join(',')
//let result = ninja.indexOf('chan-li')

//let result = ninja.concat(['ken', 'lee'])
let result = ninja.push('ken')
result = ninja.pop()

console.log(result)
