//Преобразование к логическому типу осуществляется с помощью функции Boolean
//01
let test = Boolean(0);

console.log(test);//false

//2
let test2 = Boolean(0);

console.log(test2);//false

//3
let test3 = Boolean(-1);

console.log(test3);//true

//4
let test4 = Boolean(-0);

console.log(test4);//false

//5
let test5 = Boolean(+0);

console.log(test5);//false

//6
let test6 = Boolean('abc');

console.log(test6);//true

//7
let test7 = Boolean('');

console.log(test7);//false

//8
let test8 = Boolean('0');

console.log(test8);//true

//9
let test9 = Boolean(true);

console.log(test9);//true

//10
let test10 = Boolean(false);

console.log(test10);//false

//11
let test11 = Boolean('true');

console.log(test11);//true

//12
let test12 = Boolean('false');

console.log(test12);//true

//13
let test13 = Boolean(null);

console.log(test13);//false

//14
let test14 = Boolean('null');

console.log(test14);//true

//15
let test15 = Boolean(undefined);

console.log(test15);//false

//16
let test16 = Boolean('undefined');

console.log(test16);//true

//17
let test17 = Boolean(NaN);

console.log(test17);//false

//18
let test18 = Boolean('NaN');

console.log(test18);//true

//19
let test19 = Boolean(3 * 'abc');

console.log(test19);//false

//20
let test20 = Boolean(Infinity);

console.log(test20);//true

//21
let test21 = Boolean(1 / 0);

console.log(test21);//true