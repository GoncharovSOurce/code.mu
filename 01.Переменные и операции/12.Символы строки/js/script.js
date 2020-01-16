// Получение символов строки на JavaScript
//01
let str = 'abcde';

console.log(str[0]);//a
console.log(str[2]);//b
console.log(str[4]);//c

//02
console.log(str[4]+str[3]+str[2]+str[1]+str[0]);//edcba

//03
let num = 3;

console.log(str[num]);//d

//Последний символ строки
//04
console.log(str[str.length - 1]);//e

//05
console.log(str[str.length - 2]);//d

//06
console.log(str[str.length - 3]);//c

//Строки с цифрами
//Что бы найти сумму чисел строки нужно использовать для этого ффункцию Number
//07
let test = '12345';

console.log(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));

//Обращение к цифрам числа
//Пусть теперь в переменной у нас хранится не число в кавычках, а просто число. В этом случае попытка обратится к его отдельному символу выдаст undefined.
//08
let Test = String(12345);

console.log(Number(Test[0]) + Number(Test[1]) + Number(Test[2]) + Number(Test[3]) + Number(Test[4]));

//09
console.log(Number(Test[0] * Test[1] * Test[2] * Test[3] * Test[4]));

//10
console.log(Number(Test[4]+Test[3]+Test[2]+Test[1]+Test[0]));

//Неизменяемость строк в JavaScript
//Строки в JavaScript (в отличие, например, от PHP) неизменяемы:


