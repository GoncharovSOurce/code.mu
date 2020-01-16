//Принудительное преобразование типов - сложение с использованием (специальной функции Number)
//01

let a = '10';
let b = '20';

console.log(Number(a)+Number(b));//30

//02
console.log( Number('2') + Number('3') );//5

//03
console.log( 2 + Number('3') );//5

//04
console.log( '2' + Number('3') ); //23


//Альтернатива специальной функции Number и это +
//05
let y = +'2';
let x = +'3';
console.log(x + y);//5

/*Number и нецифры  - При попытке преобразовать строку, содержащую не только цифры, но и другие символы,
 функция Number вернет своим результатом значение NaN:
*/ console.log(Number('2s'));// выведет NaN


/*Выделение числа - parseInt , parseFloat .
Пусть нам необходимо достать стоящее в начале число, отбросив строковую часть.
Для такой операции существует функция parseInt */
//parseInt - извлекает число если оно целое
//parseFloat - извлекает число если оно дробное
//06
let c = parseInt('5px');
let d = parseInt('6px');

console.log(c + d);//11

//07
let num = parseFloat('5.5px');
let num1 = parseFloat('6.25px');

console.log(num + num1);//11.75

//08
console.log(num + num1 + 'px');//11.75px

//Преобразование к строке - String
//Иногда нужно выполнить обратное преобразование - из числа в строку. Для этого предназначена функция String
//09
let num2 = 3;
let num3 = 5;

console.log(String(num2)+ String(num3));//35


//Применение преобразование к строке
//10
let num4 = 12345;

console.log(String(num4).length);//5

//11
let num5 = 12;
let num6 = 28;
let str = String(num5).length + String(num6).length;

console.log(str);

