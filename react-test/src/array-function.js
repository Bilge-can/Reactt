const users = [
    {
       name: "Bilge",
        age: 18
    },
    {name: "Bilge",
        age: 30
    },
    {
        name: "Murat",
        age: 40
    }
];

/*
push
map
find
filter
some
every
includes
 */

//push
//users.push("Ayşe");
//users.push("Bilge");
//console.log(users);

//map
//users.map((item) =>{
//    console.log(item);
//});

//find
//const resuld = users.find((item) => item.name === "Bilge" && item.age > 20);
//console.log(resuld);

//filter
//const filtered = users.filter((item) => item.name === 'Bilge' && item.age > 20);
//console.log(filtered);

//some
//const some = users.some(item => item.age === 40);
//console.log(some);

//every
//const every = users.every((item) => item.age > 5);
//console.log(every);

//include
const meyveler =["elma", "armut", "muz"];

const isIncluded = meyveler.includes("muz");
console.log(isIncluded);