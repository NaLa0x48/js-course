// console.log(1)
// console.log(2)
// setTimeout(() => {
//   console.log('call back function fire')
// }, 2000)

// console.log(3)
// console.log(4)
const getPosts = (resource, callback) => {
  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', () => {
    //console.log(request, request.responseText)
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data)
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined)
    }
  })
  request.open('GET', resource)
  request.send()
}
console.log(1)
console.log(2)
getPosts('todos/luigi.json', (err, data) => {
  console.log(data)
  getPosts('todos/mario.json', (err, data) => {
    console.log(data)
    getPosts('todos/shuan.json', (err, data) => {
      console.log(data)
    })
  })
})

console.log(3)
console.log(4)
