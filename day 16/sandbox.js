const scores = [10, 5, 0, 40, 60, 10, 20, 70]

const firstHighScore = scores.find((score) => {
  return score > 50
})

console.log(firstHighScore)

//sorting

const names = ['mario', 'shuan', 'chan-li', 'yoshi', 'luigi']

names.sort()
names.reverse()
console.log(names)
//only looking first number or character
scores.sort()
console.log(scores)

scores.sort((a, b) => a - b)
console.log(scores)
const players = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
  { player: 'mario', score: 50 },
]

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1
//   } else if (b.score > a.score) {
//     return 1
//   } else {
//     return 0
//   }
// })

players.sort((a, b) => b.score - a.score)

console.log(players)

const products = [
  { name: 'gold star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 },
]

// const filtered = products.filter((product) => {
//   return product.price > 20
// })

// const promo = filtered.map((product) => {
//   return `the ${product.name} is ${product.price / 2} pounds`
// })

const promo = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`)
console.log(promo)
