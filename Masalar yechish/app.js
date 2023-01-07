// 1. stringni barcha so'zlarni bosh harflarini katta qiladigon function yozing.
function capitalLetter(str) {
  // code here
  let first = str.split(" ").map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  });

  return first.join(" ");
}
// console.log(capitalLetter("hello world")); // Hello World
// console.log(capitalLetter("Lorem ipsum dolor")); // Lorem Ipsum Dolor

// // // 2. yilni asrga aylantiradigon function yozing
function centuary(year) {
  // code here
  let century = Math.ceil(year / 100);
  return century;
}

// console.log(centuary(2022)); // 21
// console.log(centuary(1441)); // 15
// console.log(centuary(571)); // 6

// // // 3. arrayni ichida faqat juft sonlarni qoldiradigin function yozing
function evenNumbers(nums) {
  // code here
  let numbers = [];
  nums.forEach((element) => {
    if (typeof element == "number" && element % 2 === 0) {
      numbers.push(element);
    }
  });
  return numbers;
}

// console.log(evenNumbers([2, 3, 6, true, "hi", 17])); // [2, 6]
// console.log(evenNumbers([21, 36, false, 42, 11, "bye", 1])); // [36, 42]

// // // 4. arrayni ichida nechta true va nechta false qiymat borligini toping
function booleanCount(bools) {
  // code here
  let totalTrues = 0;
  let falseTotal = 0;
  bools.forEach((element) => {
    if (element === true) {
      totalTrues++;
    }else{
      falseTotal++
    }
  });
  return `true = ${totalTrues} ,false = ${falseTotal}`
}
console.log(booleanCount([true, true, false, true, false])); // true = 3. false = 2
console.log(booleanCount([false, true, false, true, false, false])); // true = 2. false = 4

// // // 5. stringni ichidagi eng uzun sozni toping
function longestWord(str) {
  // code here
  return str
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .slice(-1)
    .join("");
}
// console.log(longestWord("lorem ipsum dolor sit emet consectetur")); // consectetur
// console.log(longestWord("assalomu alaykum")); // assalomu

// // // 6. berilgan songaca bo'lgan toq sonlarni array ko'rinishida qaytarading
function oddArray(n) {
  // code here
  for (let index = 1; index < n; index++) {
    return index;
  }

  return n;
}
// console.log(oddArray(10)); // [1, 3, 5]
// console.log(oddArray(15)); // [1, 3, 5, 7, 9, 11, 13]

// // // 7. array icidagi eng katta sonnni toping
function bigNumber(nums) {
  // code here
  return nums.sort((a, b) => b - a)[0];
}

// console.log(bigNumber([12, 2, 155, -6])); // 155
// console.log(bigNumber([100, 300, 5000, 3])); // 5000

// // // 8. array icidagi toq sonlarni alohida juft sonlarni miqdorini alohida hisoblang
function countOddAndEven(nums) {
  // code here
  trues = [];
  falsy = [];
  nums.forEach((element) => {
    if (element % 2 === 0) {
      return trues.push(element);
    } else {
      return falsy.push(element);
    }
  });
  return `even:${trues.reduce((a, b) => a + b, 0)}, odd:${falsy.reduce(
    (a, b) => a + b,
    0
  )}`;
}

// console.log(countOddAndEven([3, 6, 1, 4])); // even:10, odd:4
// console.log(countOddAndEven([15, 20, 7, 3, 40])); // even:60, odd:25

// // // 9. userni ishsiz ekanligini toping
function isJob(user) {
  // code here
  if (user.job === undefined) {
    return `job:${false}`;
  } else {
    return `job:${user.job}`;
  }
}

// console.log(isJob({ name: "John", age: 32, job: "Developer" })); // job: "Developer"
// console.log(isJob({ name: "Selena", age: 28, job: "Singer" })); // job: "Singer"
// console.log(isJob({ name: "Abdullo", age: 18 })); // job: false

// // // 10. user avatarni hosil qiling
function avatar(name) {
  // code here
  let ism = name.split(" ")[0].slice(0, 1);
  let familiya = name.split(" ")[1].slice(0, 1);

  return `${ism}.${familiya}`;
}

// console.log(avatar("John Snow")); // J.S
// console.log(avatar("Mike Tyson")); // M.T
// console.log(avatar("Akmal Ikramov Jasurovich")); // A.J
