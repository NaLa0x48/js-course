const list = document.querySelector('ul')
const form = document.querySelector('form')
const button = document.querySelector('button')
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate()
  let html = `
        <li data-id ="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `
  list.innerHTML += html
}
//get documents
// db.collection('recipes')
//   .get()
//   .then((snapshot) => {
//     //when we have the data
//     //console.log(snapshot.docs)
//     snapshot.docs.forEach((doc) => {
//       console.log(doc.data())
//       addRecipe(doc.data(), doc.id)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const deleteRecipe = (id) => {
  const recipe = document.querySelectorAll('li')
  recipe.forEach((recipe) => {
    if (recipe.getAttribute('data-id') === id) {
      recipe.remove()
    }
  })
}
const unsub = db.collection('recipes').onSnapshot((snapshot) => {
  //console.log(snapshot.docChanges())
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc
    console.log(doc)
    if (change.type === 'added') {
      addRecipe(doc.data(), doc.id)
    } else if (change.type === 'removed') {
      deleteRecipe(doc.id)
    }
  })
})
//add documents
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const now = new Date()
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  }
  db.collection('recipes')
    .add(recipe)
    .then(() => {
      console.log('recipe added')
    })
    .catch((err) => {
      console.log(err)
    })
})

//deleting data
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id')
    db.collection('recipes')
      .doc(id)
      .delete()
      .then(() => {
        console.log('recipe deleted')
      })
  }
})

//unsub from database changes

button.addEventListener('click', () => {
  unsub()
  console.log('unsubcribe from changes')
})
