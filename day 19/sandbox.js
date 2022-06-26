// date & time

// const now = new Date()
// console.log(now)
// console.log(typeof now)

// console.log('get full year', now.getFullYear())
// console.log('getMonth', now.getMonth())
// console.log('getDate', now.getDate())
// console.log('getDay', now.getDay())
// console.log('getHours', now.getHours())
// console.log('getMinutes', now.getMinutes())
// console.log('getseconds', now.getSeconds())

// //timestamps
// console.log('timestamps:', now.getTime())

// //date string
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleString())

const before = new Date('February 1 2019 7:30:59')
const now = new Date()

console.log(now.getTime(), before.getTime())
const dif = now.getTime() - before.getTime()
console.log(dif)

const mins = Math.round(dif / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)
console.log(mins)
console.log(hours)
console.log(`the blog was written in ${days} ago`)

//converting timestamps to date object

const timestamps = 1656210853147

console.log(new Date(timestamps))
