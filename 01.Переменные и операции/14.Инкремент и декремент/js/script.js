// Операции инкремента и декремента в JavaScript
//01

let num = 10;
num++;
num++;
num--;
console.log(num);

//Префиксный и постфиксный тип
//префиксальный
let num1 = 0;
let num2 = num1++; // в переменную num2 запишется 0
alert(num2); // выведет 0
alert(num1); // выведет 1 - переменная num1 поменялась после записи в num2

//постфиксальный
let num1 = 0;
let num2 = ++num1; // в переменную num2 запишется 1
alert(num2); // выведет 1


//02
let num = 3;

console.log(++num);//4

//03
let num1 = 3;

console.log(num1++);//3

//04
let num2 = 3;

console.log(--num2);//2

//05
let num3 = 3;

console.log(num3--);//3

//06
let num4 = 3;
let num5 = ++num4;

console.log(num4);//4
console.log(num5);//4

//07
let num6 = 3;
let num7 = num6++;

console.log(num6);//4
console.log(num7);//3


//08
let num1 = 3;
let num2 = --num1;
console.log(num1);//2
console.log(num2);//2

//09
let num1 = 3;
let num2 = num1--;
console.log(num1);//2
console.log(num2);//3


 //10
let num1 = 3;
num1++;
let num2 = num1--;
console.log(num1++);//3
console.log(--num2);//3
