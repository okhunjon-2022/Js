let E = Math.E
console.log(E);
//Yoqoridagi "E" urgarmas son 2.78
let pi = Math.PI
console.log(pi);
//Yoqoridagi "PI" urgarmas son 3.14
let round = Math.round(3.14)
console.log(round);
//Yoqoridagi "Math.round" argumentni yaxlitlat beradi
let ceil = Math.ceil(3.14)
console.log(ceil);
//Yoqoridagi "Math.ceil" argumentni yuqori qiymayda yaxlitlab beradi
let floor = Math.floor(-3.9)
console.log(floor);
//Yoqoridagi "Math.floor" argumentni past qiymayda yaxlitlab beradi
let trunc = Math.trunc(3.9)
console.log(trunc);
//Yoqoridagi "Math.trunc" argumentni faqat butun qismini beradi
let pow = Math.pow(2,3)
console.log(pow);
//Math.pow(x,y) ikkata argument qabul qiladi,y x ning darajasi sifatida qabul qiladi.

let sign = Math.sign(10)
console.log(sign);
//Math.sign Agar argument manfiy bulsa,-1 qaytaradi, 0 bulsa 0 qayataradi, musbat bulsa 1 qataradi.(-1,0,1)

let sqrt = Math.sqrt(9)
console.log(sqrt);
// Math.sqrt(x) ildizdan olib chiqadi
let abs = Math.abs(-9)
console.log(abs);
// Math.abs(-x) argumentni har doim musbat holatda qaytaradi
let min = Math.min(-9,10,112,-10)
console.log(min);
// Math.min() argumentlarni eng kichigini qaytaradi
let max = Math.max(-9,10,112,-10)
console.log(max);
// Math.max() argumentlarni eng kattasini qaytaradi

let random = Math.random()
console.log(random);
//Math.random() 0 va 1 orasidagi sonlarni tasodifan qaytaradi

let ran10 = Math.floor((Math.random()*10))
console.log(ran10);