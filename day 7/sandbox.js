// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30 },
//   { title: '10 things to make with marmite', likes: 50 },
// ]
let user = {
  //user regular function in objects
  name: 'crystal',
  age: 30,
  email: 'nae@gmail.com',
  location: 'berlin',
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 },
  ],
  login() {
    console.log('the user logged in')
  },
  logout() {
    console.log('the user logged out')
  },
  logBlogs() {
    console.log('this user has written following blogs:')
    this.blogs.forEach((blog) => console.log(blog.title, blog.likes))
  },
}

console.log(user)
console.log(user.name)

console.log(user.age)
console.log(user['email'])

user['name'] = 'chan-li'

console.log(user['name'])

const key = 'location'

console.log(user[key])

console.log(typeof user)

user.login()
const username = 'nae'
username.toUpperCase()

user.logout()

user.logBlogs()

//Math Objects

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7
console.log(Math.round(7.7))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

//random number

const random = Math.random()
console.log(random)

console.log(Math.round(random * 100))

//primitive values

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

scoreOne = 100
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

let userOne = { name: 'nae', age: 22 }
let userTwo = userOne

console.log(userOne, userTwo)
userOne.age = 23

console.log(userOne, userTwo)
