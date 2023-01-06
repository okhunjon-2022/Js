console.log("JS is started");

// function add(p) {
//     // return ` ${+p+2}  USD `
//     return +p+2+" USD"
// }
// console.log(add ("100"));
// console.log(add ("50"));
// console.log(add ("8"));
// function bar(p) {
//     return Math.abs(p).toString().length
// }
// console.log(bar(6));
// console.log(bar(-12));
// console.log(bar(105));

// const kaa = (p) => {
//   return `${p}- ${Math.floor(Math.abs(p).toString().length)} xona`;
// };
// console.log(kaa(12));
// console.log(kaa(-3.9));
// console.log(kaa(456));

// const lorem =function (i) {
//     return i.toString().slice(-1)
// }
// console.log(lorem(456));
// console.log(lorem(19));
// console.log(lorem(3146));

// function tele(str) {
//     let fname=str.split(" ")[0].slice(0,1)
//     let lname=str.split(" ")[1].slice(0,1)
//     return `${fname}.${lname}`
// }
// console.log(tele("John Doe"));
// console.log(tele("Laylo Ahmedova"));
// function gender(user) {
//     let name=user.split(" ")[1]

//     if (user.includes("va")) {
//         return name +" qiz bola"
//     }else{
//         return  name +" ug'il bola"
//     }
// }

// console.log(gender("Ismoilov Isoxon"));
// console.log(gender("Abdullayeva Ziyoda"));
// console.log(gender("Mahmudov Ohunjon"));
// function gender1(user) {
//     let name=user.split(" ").slice(-1)
//     let familiya=user.split(" ")[1]

//     if (name==="a") {
//         return name +" qiz bola"
//     }else{
//         return  name +" ug'il bola"
//     }
// }

// console.log(gender1("Ismoilov Isoxon"));
// console.log(gender1("Abdullayeva Ziyoda"));
// console.log(gender1("Mahmudov Ohunjon"));

function lorem(a, b) {
  return `${a}+${b}=${a + b}`;
}
console.log(lorem(5, 9));
console.log(lorem(10, 5));
