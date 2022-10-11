//setTimeout(() =>{
//console.log("Merhaba Bilge");
//},5000 )

//setInterval(() =>{
//    console.log("Merhaba ben her saniye çalışacağım");
//}, 1000)

//const sayHi = (cb) => {
//  cb();
//};

//sayHi(() =>{
//    console.log("bilge")
//});

//fetch("https://jsonplaceholder.typicode.com/users")
//    .then((data) => data.json())
//    .then((users) => {
//        console.log("Users Yuklendi!", users);


//fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then((data) => data.json())
//    .then((post) => {
//        console.log("Post Yuklendi!", post);


//fetch("https://jsonplaceholder.typicode.com/posts/2")
//    .then((data) => data.json())
//.then((data) => data.json())
//.then((data)=> console.log("Post2 yüklendi!", data));
//    });
//    });

//async function getData(){
//    const users = await(
//      await  fetch("https://jsonplaceholder.typicode.com/users")
//    ).json();

//    const post1 = await(
//        await  fetch("https://jsonplaceholder.typicode.com/posts/1")
//        ).json();

//    const post2 = await(
//        await  fetch("https://jsonplaceholder.typicode.com/posts/2")
//    ).json();

//    console.log("users",users);
//    console.log("post1",post1);
//    console.log("post2",post2);
//}
//getData();

//(async () => {
//    const users = await axios("https://jsonplaceholder.typicode.com/users");

//    const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1");

//    const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2");

//    console.log("users",users);
//    console.log("post1",post1);
//    console.log("post2",post2);
//})();


//const getComments = (number) =>{
//    return new Promise((resolve, reject) =>{
//        if (number ===1){
//            resolve("bilge");
//        }
//            reject("Bir problem oldu!!");
//    });
//};

//getComments(1)
//.then((data) => console.log(data))
//.catch((e) => console.log(e));


//const getUsers = (number) =>{
//    return new Promise(async (resolve, reject) =>{
//       const {data} = await axios("https://jsonplaceholder.typicode.com/users");

//       resolve(data);
//    });
//};

//getUsers(2)
//    .then((data) => console.log(data))
//    .catch((e) => console.log(e));