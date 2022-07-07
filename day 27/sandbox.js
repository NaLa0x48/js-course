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

// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email)
//     this.title = title
//   }
//   deleteUser(user) {
//     users = users.filter((u) => u.username !== user.username)
//   }
// }

// const userOne = new User('mario', 'thenetninja@uk')
// const userTwo = new User('luigi', 'thenetninja.uk')
// // console.log(userOne.login())
// // userTwo.login()
// // userOne.inScore()
// // userOne.inScore()
// const userThree = new Admin('shuan', 'shuan@email.com', 'nina=black')
// //userOne.login().inScore().inScore().logout()
// console.log(userOne, userTwo, userThree)
// let users = [userOne, userTwo, userThree]
// console.log(users)
// userThree.deleteUser(userOne)
// console.log(users)

//constructor function
function User(username, email) {
  this.username = username
  this.email = email
  //   this.login = function () {
  //     console.log(`${this.username} has logged in`)
  //   }
}
User.prototype.login = function () {
  console.log(`${this.username} has logged in`)
  return this
}
User.prototype.logout = function () {
  console.log(`${this.username} has logged out`)
  return this
}
const userOne = new User('mario', 'thenetninja@uk')
const userTwo = new User('luigi', 'thenetninja.uk')

console.log(userOne, userTwo)
userOne.login()
userTwo.logout().login()
