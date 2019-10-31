import "./styles.css";

document.getElementById("compareObject").innerHTML = "";

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

function first(params, n) {
  if (n < 0) {
    return [];
  }
  return n ? params.slice(0, n) : params.slice(0, 1);
}

// 4.Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

function last(params, n) {
  return n
    ? params.slice(Math.max(params.length - n))
    : params[params.length - 1];
}

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.join("+"));

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
const num = "025468";
console.log(
  `${num.slice(0, 1)}-${num.slice(1, 4)}-${num.slice(-2, -1)}-${num.slice(-1)}`
);

// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1.sort());

//8. Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var filterdArr2 = arr2.sort();
var item;
var mf = 1;
var m = 0;
// console.log(filterdArr2);

for (let i = 0; i < arr2.length; i++) {
  for (let j = i; j < arr2.length; j++) {
    if (filterdArr2[i] === filterdArr2[j]) {
      m++;
      if (mf < m) {
        mf = m;
        item = filterdArr2[i];
      }
    }
  }
  m = 0;
}
console.log(item + " ( " + mf + " times ) ");

// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
var p = "The Quick Brown Fox";
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
const res = [];
for (let i = 0; i < p.length; i++) {
  if (UPPER.indexOf(p[i]) !== -1) {
    res.push(p[i].toLowerCase());
  } else if (LOWER.indexOf(p[i]) !== -1) {
    res.push(p[i].toUpperCase());
  } else {
    res.push(p[i]);
  }
}
console.log(res.join(""));

// 14.
const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow "
];
var o = ["th", "st", "nd", "rd"];
for (let i = 0; i < color.length; i++) {
  const element = color[i];

  if ((i + 1).toString().substr(-1) === "1") {
    console.log(`${i + 1}${o[1]} ${element}`);
  } else if ((i + 1).toString().substr(-1) === "2") {
    console.log(`${i + 1}${o[2]} ${element}`);
  } else if ((i + 1).toString().substr(-1) === "3") {
    console.log(`${i + 1}${o[3]} ${element}`);
  } else {
    console.log(`${i + 1}${o[0]} ${element}`);
  }
}
