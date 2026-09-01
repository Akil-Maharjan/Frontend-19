//    string method
// let str= "helloh World";

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(5));
// console.log(str.indexOf(" "));
// console.log(str.includes("h"))
// console.log(str.lastIndexOf("h"));
// console.log(str.replaceAll("h", "H"));
// console.log(str.slice(-5));

//   number Method

//   let num = 4.9;
//   console.log(Math.floor(num));
//   console.log(Math.ceil(num));
//   console.log(Math.round(num));
//   console.log(Math.abs(num));
// console.log(Math.floor(Math.random() *10 +1))
// console.log(Math.min(2, 50, 10));
// console.log(Math.pow(2, 3));

//  operators

//  let a =false;
//  console.log(a ?? "A has no value")
 
//  console.log(a -b);
//  console.log(a *b);
//  console.log(a /b);
//  console.log(a %b);
//  console.log(a **b);


// conditions

// let marks = 60;

// if(marks >= 90){
//     console.log("A+");
// }
// else if(marks >= 80){
//     console.log("A");
// }
// else if(marks >= 70){
//     console.log("B+");
// }
// else if (marks >= 60){
//     console.log("B");
// }
// else{
//     console.log("Fail");
// }

//   let month = Number(prompt("Enter a month number (1-12):"));

//   switch (month) {
//     case 1:
//       console.log("January");
//       break;
//     case 2:
//       console.log("February");
//       break;
//     case 3:
//       console.log("March");
//       break;
//     case 4:
//       console.log("April");
//       break;
//     case 5:
//       console.log("May");
//       break;
//     case 6:
//       console.log("June");
//       break;
//     case 7:
//       console.log("July");
//       break;
//     case 8:
//       console.log("August");
//       break;
//     case 9:
//       console.log("September");
//       break;
//     case 10:
//       console.log("October");
//       break;
//     case 11:
//       console.log("November");
//       break;
//     case 12:
//       console.log("December");
//       break;
//     default:
//       console.log("Invalid month");
//       break;
//   }

// let marks = 90;
// marks >= 90
//   ? console.log("A+")
//   : marks >= 80
//     ? console.log("A")
//     : marks >= 70
//       ? console.log("B+")
//       : marks >= 60
//         ? console.log("B")
//         : console.log("Fail");


//    Loops
// for(let i =1; i <10; i++){
//     for(j= 1; j < 10; j++){
//  console.log(i, j);
//     }
   
// }


// let i = 1;
// while (i >= 10) {
//   console.log(i);
//   i++;
// }

// do {
//     console.log(i);
// } while (i >=10);


// function
//    greet("Akil");
//   function greet(name){
//     console.log("Hello" + " "+ name);
//    }
  
//    const a =(name)=>{
//     return ("Hello" + " " + name);
   
//    }
//    console.log(a("Akil"));

// function Operations(a,b, operator){
//     switch(operator)
//     {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default:
//             return "Invalid operator";
//     }
// }

// console.log(Operations(2, 0, "/"))

// const date  = new Date();

// 


// setInterval(()=>{
//     console.log("Hello")
// }, 2000)



const students = [
    {
        name: "John",
        age: 24,
        isStudent: true,
        address : {
          city: "New York",
          state: "NY"
        }
    },
    {
        name: "Jane",
        age: 25,
        isStudent: false,
        address : {
          city: "Kathmandu",
          state: "Bagmati"
        }
    },
    {
        name: "Bob",
        age: 26,
        isStudent: false,
        address : {
          city: "Kathmandu",
          state: "Bagmati"
        }
    }
]

let sortedAge = students.sort((a, b) => b.age - a.age)
 const mapped = sortedAge.map(x =>  x.name)

 console.log(mapped)