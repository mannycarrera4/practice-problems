const tax = 0.08
const phone = 99.99
const accessory = 9.99
const bank = 100
let amount = 0

function calculateTax(amt) {
  return amt * tax
}

while (amount + phone <= bank) {
  amount += phone
  if (amount + accessory < bank) {
    amount += accessory
  }
}

amount = amount + calculateTax(amount)
if (amount > bank) {
  console.log('You dont have enough money to buy another phone')
}
console.log(amount.toFixed(2))
