//fetch api
//no reject in fetch if there is no network error
// fetch('todos/luigi.json')
//   .then((response) => {
//     console.log('reslove:', response)
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('reject:', err)
//   })

//async await

const getPosts = async () => {
  const response = await fetch('todos/luigis.json')
  if (response.status != 200) {
    throw new Error('cannot fetch the data')
  }
  const data = await response.json()
  return data
}

getPosts()
  .then((data) => {
    console.log('resolve:', data)
  })
  .catch((err) => {
    console.log('reject:', err.message)
  })
