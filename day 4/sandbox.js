//if statements
// const age = 22

// if (age > 20) {
//   console.log('you are over 20 years old')
// }

// const ninjas = ['shuan', 'chan-li', 'yoshi']
// if (ninjas.length > 3) {
//   console.log("that's a lot of ninjas")
// }

// const password = 'pass@12345'
// if (password.length >= 12) {
//   console.log('that password might strong')
// } else if (password.length >= 8) {
//   console.log('long enough')
// } else {
//   console.log('not long enough')
// }

//logical operators OR || and AND &&
const password = 'pass@8'
if (password.length >= 12 && password.includes('@')) {
  console.log('that password might strong')
} else if (
  password.length >= 8 ||
  (password.includes('@') && password.length > 5)
) {
  console.log('long and strong enough')
} else {
  console.log('not long enough')
}
