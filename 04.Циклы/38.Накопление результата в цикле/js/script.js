//Накопление результата в цикле

//Найдите произведение целых чисел от 1 до 20.
//01
let result = 0;

for ( let i = 1; i <= 20; i++ ) {
    result = result + i
}
console.log(result);


//Найдите сумму четных чисел от 2 до 100.
//02
let result1 = 0;

for ( let i = 2; i <= 100; i+=2 ) {
    result1 = result1 + i
}
console.log(result1);

//Найдите сумму нечетных чисел от 1 до 99.
//03
let result2 = 0;

for ( let i = 1; i <= 99; i+=2 ) {
    result2 = result2 + i
}
console.log(result2);