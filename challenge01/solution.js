const data = await fetch('https://codember.dev/users.txt').then((res) => res.text())

const dataToArray = data.split(`\n\n`)
let count = 0
const arr = []

let validUser = dataToArray.forEach((el) => {
  if (
    el.includes('usr') &&
    el.includes('eme') &&
    el.includes('psw') &&
    el.includes('age') &&
    el.includes('loc') &&
    el.includes('fll')
  ) {
    count++
    arr.push(el)
  }
})

const lastUser = arr[arr.length - 1].split(' ').filter((el) => el.includes('usr') === true)
console.log(`🔥 submit ${count}${lastUser[0].split(':')[1]}`)
