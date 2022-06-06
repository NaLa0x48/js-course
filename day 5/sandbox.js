//logical Not

let user = false
if (!user) {
  console.log('you must be logged in to continue')
}

console.log(!true)
console.log(!false)

//break and continue

const score = [50, 25, 0, 30, 100, 20, 10]
for (let i = 0; i < score.length; i++) {
  if (score[i] === 0) {
    continue
  }
  console.log('your score: ', score[i])
  if (score[i] === 100) {
    console.log('Congrats,you got the top score!')
    break
  }
}

//switch statement

const grade = 'D'

switch (grade) {
  case 'A':
    console.log('you got an A')
    break
  case 'B':
    console.log('you got an B')
    break
  case 'C':
    console.log('you got an C')
    break
  case 'D':
    console.log('you got an D')
    break
  case 'E':
    console.log('you got an E')
    break
  default:
    console.log('not a valid grade')
}

//variables and blockscope

const age = 30

if (true) {
  const age = 49
  const name = 'shuan'
  console.log('inside of the code block: ', age, name)
  if (true) {
    const age = 50
    var test = 'hello'
    console.log('inside second code block: ', age, name)
  }
}

console.log('outside code block:', age, name, test)
