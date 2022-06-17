//filter method
const scores = [12, 22, 34, 23, 15, 25, 40, 90, 5]

// const filteredScores = scores.filter((score) => {
//   return score > 20
// })

// console.log(filteredScores)

const users = [
  { name: 'shuan', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chan-li', premium: true },
]

const premiumUsers = users.filter((user) => user.premium)

console.log(premiumUsers)

//map method
const prices = [20, 10, 40, 25, 15, 40, 80, 5]

// const salePrices = prices.map((price) => {
//   return price / 2
// })
// console.log(salePrices)

const products = [
  { name: 'gold star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 },
]

const salseProudcts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 }
  } else {
    return product
  }
})

console.log(salseProudcts)

//reduce method
//after function there's an initial value for accumulator
const result = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++
  }
  return acc
}, 0)

console.log(result)

const playersScore = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
]

const marioScores = playersScore.reduce((acc, curr) => {
  if (curr.player === 'mario') {
    acc += curr.score
  }
  return acc
}, 0)

console.log(marioScores)
