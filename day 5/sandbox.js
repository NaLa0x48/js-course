//functoin expression
const speak = function () {
  console.log('good day sir')
}
greet()

speak()

//function declaration
function greet() {
  console.log('hello there')
}

//javascript didn't hoist function expression and only functon declaration

//arguments and parameters

const talk = function (name = 'nae yar', time = 'night') {
  console.log(`good ${time} ${name}`)
}

talk('nae', 'morning')

talk()

talk('shuan')
