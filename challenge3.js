//Challenge 3
//What are the pros & cons (if any) in these five ways of doing the same thing?
//One does not work. Why (explain) and fix it
//Which one would you prefer (if any)?

var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`
}

let listItems = numbers.map(makeListItem).join("\n")
console.log(listItems) //virker
console.log('\n')

listItems = numbers.map(function (number) {
  return `<li>${number}</li>`
}).join("\n")


console.log(listItems) //virker
console.log('\n')

listItems = numbers.map(number => `<li>${number}</li>`).join("\n")
console.log(listItems)
console.log('\n')

listItems = numbers.map(number => { // when curly braces, you need a explicit return statement? 
 return `<li>${number}</li>`
}).join("\n")
console.log(listItems)
console.log('\n')

listItems = numbers.map(number => ( // when parantaces it's like a one liner, so the retur is implicit in 
  `<li>${number}</li>`              // the function
)).join("\n")
console.log(listItems)
console.log('\n')
