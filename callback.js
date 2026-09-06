
//callback hell
// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading a user from a database...");
//     callback({ id: id, gitHubUsername: "mosh" });
//   }, 2000);
// }

// function getPost(id, callback) {
//   setTimeout(() => {
//     console.log("Reading a post from a database...");
//     callback({ id: id, title: "Post Title" });
//   }, 2000);
// }

// function getComment(id, callback) {
//   setTimeout(() => {
//     console.log("Reading a comment from a database...");
//     callback({ id: id, text: "Comment" });
//   }, 2000);
// }

// getUser(1, (user) => {
//   if (!user) {
//     console.log("User not found");
//   }
//   console.log("User: ", user);
//   getPost(1, (post) => {
//     if (!post) {
//       console.log("Post not found");
//     }
//     console.log("Post: ", post);
//     getComment(1, (comment) => {
//       if (!comment) {
//         console.log("Comment not found");
//       }
//       console.log("Comment: ", comment);
//     });
//   });
// });

//promise
// const user = new Promise((resolve, reject) => {
//     const success =true
//       setTimeout(() => {
//         if(success){
//             resolve("Getting User")
//         }
//         else{
//             reject("User not found")
//         }
//       }, 2000)
// })

// const post = new Promise((resolve, reject) => {
//     const success =true
//     setTimeout(() => {
//         if(success){
//             resolve("Getting Post")
//         }
//         else{
//             reject("Post not found")
//         }
//     }, 4000)
// })

// const comment = new Promise((resolve, reject)=>{
    
//     const success =true
//     setTimeout(() => {
//         if(success){
//             resolve("Getting Comment")
//         }
//         else{
//             reject("Comment not found")
//         }
//     }, 6000)
// })
//   async function fetchCommnet(){
//       const res = await fetch("https://jsonplaceholder.typicode.com/comments")
//       const commenets = await res.json()
//       console.log(commenets)
//   }

//    async function fetchUser(){
//        const res = await fetch("https://jsonplaceholder.typicode.com/users")
//        const users = await res.json()
//        console.log(users)
//    }

//    fetchUser()
//   fetchCommnet()