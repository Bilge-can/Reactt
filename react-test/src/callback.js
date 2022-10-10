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

fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
console.log(data)
);
