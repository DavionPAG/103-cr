// console.log('YO!')

// let user = prompt('what is life?')
// console.log(user)


// let one = prompt()
// let two = prompt()


// if(one == two) {
//   console.log('same')
// } 
// else{
//   console.log('diff')
// }

// let grinch = prompt('christmas bad guy?')

// if (grinch == 'grinch') {
//   console.log('merry christmas')
// }

// let userName2 = prompt(`What's your name?`)
// let email2 = prompt(`Email?`)
// let salary2 = prompt(`Monthly Salary?`)

// console.log(`Name: ${userName2}\nEmail: ${email2}\nSalary: ${salary2 * 12}`)

let product = prompt(`What would you like to buy?`)
let quantity = prompt(`How many?`)
let price = prompt(`Name your price!`)

let parseQ = parseInt(quantity)
let parseP = parseInt(price)

let finalPrice = (parseQ * (parseP  + (parseP * 0.16)));

console.log(`Product: ${product}\nQty: ${quantity}\nTotal: ${finalPrice}`)
