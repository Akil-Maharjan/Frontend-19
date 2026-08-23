// let num = [1, 2 ,3,4 ,5];

// const sumOfAllNUmbers = num.reduce((previous, current)=> previous * current ,1);
// console.log(sumOfAllNUmbers);


// let num = 4.7;

// console.log(Math.pow(num , 2));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num))
// console.log(Math.abs(num))

// console.log(Math.floor(Math.random()* 10 + 1))

// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];


// let randomCards = cards[Math.floor(Math.random() * cards.length)];

// console.log(randomCards);

//guessing game 
// let retry = 2;
// let num = Math.floor(Math.random() * 10 + 1);
// let guess =prompt("guess a number between 1 to 10");

// while (guess !== num && retry > 0) {
   
//     if (guess > num) {
//         console.log("too high");
//         retry--;
//         guess = prompt("guess a number between 1 to 10");
//     } else if (guess < num) {
//         console.log("too low");
//         retry--;
//         guess = prompt("guess a number between 1 to 10");
//     }
// }

// if (guess === num) {
//     console.log("you won");
// } else {
//     console.log("you lost");
// }
    //   let fruits = ["apple", "banana", "orange", "grape", "mango"];

    //   fruits.forEach((fruit) => {
    //     console.log(fruit);
    //   });


    
    
 let students= [{
    name:"Akil",
    age: 25,
    isStudent: false,
    marks: 90
 },
 {
    name:"Ram",
    age: 20,
    isStudent: true,
    marks: 60
 },
 {
    name:"Shyam",
    age: 25,
    isStudent: true,
    marks: 50
 }
 ]

 students.forEach((a)=> {
    console.log(a.name)
 })