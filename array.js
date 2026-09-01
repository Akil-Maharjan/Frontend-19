// let num = [1 ,2 ,3 ,4, 5]
//   let [a ,b, ...c]= [...num]
//   console.log(a ,b)
//   console.log(c)
// let mappedNumber = num.filter(x => x % 2 == 0).map(x => x * 2)
// console.log(mappedNumber)

// let fruits = ["apple", "banana", "cherry",  "blueberry"];
// let stUpperCase = fruits.map(x => x.charAt(0).toUpperCase() + x.slice(1))
// console.log(stUpperCase)


// let longestWord = fruits.reduce((Prev, Curr) => Prev.length > Curr.length ? Prev : Curr)
// console.log(longestWord)

//  let users = [{
//     name: "John",
//     age: 30,
//     isStudent: false
//  },
//     {
//         name: "Jane",
//         age: 25,
//         isStudent: true
//     },
//     {
//         name: "Bob",
//         age: 35,
//         isStudent: false
//     }
// ]

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// ages.sort((a, b) => a - b)
// console.log(`The minimum age is ${ages[0]}`)
// console.log(`The maximum age is ${ages[ages.length - 1]}`)
// ages.sort((a, b) => a - b)
// let middleItem = ages[Math.floor(ages.length / 2)]

// const medianAge = ages.length % 2 == 0 ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2 : middleItem
// console.log(`The median age is ${medianAge}`)


// const average = ages.reduce((a, b) => a + b) / ages.length
// console.log(`The average age is ${average}`)


// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
  
// ]  

// let middle = Math.floor(countries.length / 2)

// const stHalf = countries.length % 2 === 0 ? countries.slice(0 , middle) : countries.slice(0, middle + 1)
// const ndHalf = countries.slice(stHalf.length)

// console.log(stHalf)
// console.log(ndHalf)


// const personAccount = {
//   firstName: "John",
//   lastName: "Doe",
//   incomes : [ {
//     amount : 5000,
//     description : "Salary"
//   },
//   {
//     amount : 200,
//     description : "Freelance"}
// ],

//   expenses : [
//     {
//       amount : 1000,
//       description : "Rent"
//     },
//     {
//       amount : 100,
//       description : "Groceries"
//     }
//   ],
//   totalIncome (){
//     return this.incomes.reduce((a, b) => a + b.amount, 0)
//   },
//   totalExpense (){
//     return this.expenses.reduce((a, b) => a + b.amount, 0)
//   },
//   accountInfo (){
//     return `Account Holder: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`
//   },
//   addIncome (amount, description){
//     this.incomes.push({amount, description})
//   },
//   addExpense (amount, description){
//     this.expenses.push({amount, description})
//   },
//   accountBalance (){
//     return this.totalIncome() - this.totalExpense()
//   }
// }

// console.log(personAccount.accountInfo())
// personAccount.addExpense(200, "Transport")
// console.log(personAccount.accountBalance())


  const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    function Signup(email, password, usernamme){

      const newuser = {
        id : Math.random().toString(36).substring(2, 15),
        username : usernamme,
        email : email,
        password : password,
        createdAt : new Date().toLocaleString(),
        isLoggedIn : false
      }
         users.find(user => user.email === email) ? console.log("User already exists") : users.push(newuser);
    }

   Signup("akil@akil.com", 123456, "Akil")
   console.log(users)

   
  