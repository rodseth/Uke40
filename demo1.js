let car = {make: "volvo", year: 2011}
console.log(car) //1

//let carCopy = car; <-- denne peker på samme objekt, endrer du noe her, endres også car
let carCopy = { ...car }; //her kloner man objekte
console.log(carCopy) //2

carCopy.year = 2018;

console.log(car) //3
console.log(carCopy) //4

//Challenge 1-b
//Replace line three with this line and execute. Explain what you see

////let carCopy = { ...car };

//Challenge -2
//By now you should have realized how cool a method map is. But what if it did not exist? Then we would have to create it by yourself.
//Do that by implementing the myMap method below, which should do EXACTLY the same as the original map, but since it does not exist on the Array we have to pass the array in as a parameter.

var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`
}



//let listItems = numbers.map(makeListItem); //I don’t exist :-( 

   // console.log(listItems);
//let listItems = myMap(numbers,makeListItem)

function myMap(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
    
}
let listItems2 = myMap(changeSign, numbers).join("");
console.log(listItems2)

