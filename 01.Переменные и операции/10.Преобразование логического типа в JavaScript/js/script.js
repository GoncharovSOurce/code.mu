//Преобразование логического типа в JavaScript

//Сейчас мы с вами рассмотрим, как ведут себя специальные значения true и false при преобразовании их к строкам или числам. Эти знания вам потребуются в следующих уроках.
//Итак, попробуем выполнить преобразование к строке, используя функцию String:
console.log(String(true)); // выведет 'true'
//console.log((String(false)); // выведет 'false

//Как вы видите, значение true преобразуется в строку 'true', а значение false - в строку 'false'.
//То есть при попытке сложения строки и логического значения, это логическое значение преобразуется в строку и произойдет сложение строк:
console.log('a' + true); // выведет 'atrue'

//Давайте теперь рассмотрим преобразования к числу:
console.log(Number(true)); // выведет 1
console.log(Number(false)); // выведет 0


//01
console.log(true + 3);//4

console.log(true + true);//2

console.log(true - true);//0

console.log(true + false);//1

console.log('1' + true);//1true

console.log( String(true) + 1 );//true1

console.log( String(true) + Number(true) );//true1
