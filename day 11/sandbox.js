const copy = document.querySelector('.copy-me')

copy.addEventListener('copy', () => {
  console.log('mine is copy right')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', (e) => {
  //console.log(e.offsetX, e.offsetY)
  box.textContent = `x position ${e.offsetX}  y pos - ${e.offsetY}`
})

document.addEventListener('wheel', (e) => {
  console.log(e.pageY)
})
