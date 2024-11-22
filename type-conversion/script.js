// let val;

// //Number to String
// val = String(111);
// val = String(18 + 4);

// //Boolean to String
// val = String(false);

// //Date to String
// val = String(new Date());

// //Array to String
// val = String([1,2,3,4,5]);

// //toString()
// val = (5).toString(); //-> String으로 반환한다.

// //String to Number
// //val = Number('1');

// //val = Number(true);

// val = Number(null); //-> Not a Number가 나옴

// //val = Number([1,2,3]);

// val = parseInt('111.40'); //parseInt()하면 소숫점을 없앰

// val = parseFloat('111.40'); //parseFloat()하면 소숫점을 살림

const val1 = String(2);
const val2 = 3; 
const sum = val1 + val2; //-> 자동으로 String으로 바꿔줌

console.log(sum);
console.log(typeof sum);
