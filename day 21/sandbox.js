// console.log(1)
// console.log(2)
// setTimeout(() => {
//   console.log('call back function fire')
// }, 2000)

// console.log(3)
// console.log(4)
const getPosts = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
      //console.log(request, request.responseText)
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if (request.readyState === 4) {
        reject('error getting resource')
      }
    })
    request.open('GET', resource)
    request.send()
  })
}
// console.log(1)
// console.log(2)
// getPosts('todos/luigi.json', (err, data) => {
//   console.log(data)
//   getPosts('todos/mario.json', (err, data) => {
//     console.log(data)
//     getPosts('todos/shuan.json', (err, data) => {
//       console.log(data)
//     })
//   })
// })

// console.log(3)
// console.log(4)

getPosts('todos/luigi.json')
  .then((data) => {
    console.log('promised result :', data)
  })
  .catch((err) => {
    console.log('promised rejected:', err)
  })
//promise example

const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    //resolve('some data')
    reject('some error')
  })
}

// getSomething().then(
//   (data) => {
//     console.log(data)
//   },
//   (err) => {
//     console.log(err)
//   }
// )

getSomething()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
