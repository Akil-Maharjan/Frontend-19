let num = [1 ,2 ,3 ,4, 5]
  let [a ,b, ...c]= [...num]
  console.log(a ,b)
  console.log(c)
// let mappedNumber = num.filter(x => x % 2 == 0).map(x => x * 2)
// console.log(mappedNumber)

// let fruits = ["apple", "banana", "cherry",  "blueberry"];
// let stUpperCase = fruits.map(x => x.charAt(0).toUpperCase() + x.slice(1))
// console.log(stUpperCase)


// let longestWord = fruits.reduce((Prev, Curr) => Prev.length > Curr.length ? Prev : Curr)
// console.log(longestWord)

 let users = [{
    name: "John",
    age: 30,
    isStudent: false
 },
    {
        name: "Jane",
        age: 25,
        isStudent: true
    },
    {
        name: "Bob",
        age: 35,
        isStudent: false
    }
]


