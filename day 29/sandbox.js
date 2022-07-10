// const userOne = {
//   username: 'nae',
//   email: 'nae@gmail.com',
//   login() {
//     console.log('the user logged in')
//   },
//   logout() {
//     console.log('the user logged out')
//   },
// }

// console.log(userOne.email, userOne.username)
// userOne.login()

// userTwo = {
//   username: 'naylin',
//   email: 'naylin@gmail.com',
//   login() {
//     console.log('the user logged in')
//   },
//   logout() {
//     console.log('the user logged out')
//   },
// }

// const userThree = new User('naeyar','naeyar@gmail.com')

// class User {
//   constructor(username, email) {
//     //set up properties for objects
//     this.username = username
//     this.email = email
//     this.score = 0
//   }
//   login() {
//     console.log(`${this.username} just logged in`)
//     return this
//   }
//   logout() {
//     console.log(`${this.username} just logged out`)
//     return this
//   }
//   inScore() {
//     this.score += 1
//     console.log(`${this.username} has a score of ${this.score}`)
//     return this
//   }
// }

// const userOne = new User('mario', 'thenetninja@uk')
// const userTwo = new User('luigi', 'thenetninja.uk')
// // console.log(userOne.login())
// // userTwo.login()
// // userOne.inScore()
// // userOne.inScore()

// userOne.login().inScore().inScore().logout()

function User(username, email) {
  this.username = username
  this.email = email
  // this.login = function () {
  //   console.log(`${this.username} has logged in`)
  // }
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`)
  return this
}

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`)
  return this
}

function Admin(username, email, title) {
  User.call(this, username, email)
  this.title = title
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.deleteUser = function () {}
const userOne = new User('nae', 'nae@gmail.com')
const userTwo = new Admin('shuan', 'shuan@gmail.com', 'black-belted-ninja')

console.log(userOne)
userOne.login().logout()
