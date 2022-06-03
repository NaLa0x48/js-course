let age = 25

//loose comparison (different type can be equal)

// console.log(age == 25)
// console.log(age == '25')
console.log(age != 25)
console.log(age != '25')

//strict comparison (different types cannot be equal)

console.log(age === 25)
console.log(age === '25')
console.log(age !== 25)
console.log(age !== '25')

//type conversion

let score = '100'
// score = Number(score)
// console.log(score + 1)
// console.log(typeof score)

// let result = Number('hello')
//let result = String(50)
//let result = Boolean(0)
let result = Boolean('0')
console.log(result, typeof result)
