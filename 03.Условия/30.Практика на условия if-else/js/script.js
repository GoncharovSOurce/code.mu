//Практика на условия if-else

//01
//В переменной month лежит какое-то число из интервала от 1 до 12.
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 10;

if ( month >= 1 && month <=2  ) {
    console.log( 'зима' );
} else if ( month >= 3 && month <= 5 ) {
    console.log('весна');
} else if ( month >= 6 && month <= 8 ) {
    console.log('лето');
} else if ( month >= 9 && month <=11 ) {
    console.log('осень');
} else if ( month == 12 ) {
    console.log('зима');
}

//02
//Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
let str1 = 'abcde';

if ( str1[0] == 'a' ) {
    console.log('да')
} else {
    console.log( 'нет' )
}

//03
//Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
let num1 = 12345;
let Str = String(num1);

if ( Str[0] == 1 || Str[0] == 2 || Str[0] ==  3) {
    console.log('да')
} else {
    console.log( 'нет' )
}


//04
//Дано трехзначное число. Найдите сумму цифр этого числа.
let a = 222;
let str =String(a);
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);

console.log(sum);

//05
//Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так - выведите 'да', в противном случае выведите 'нет'
let num = 123456;
let str2 = String(num);
let sum2 = Number(str2[0]) + Number(str2[1]) + Number(str2[2]);
let sum3 = Number(str2[3]) + Number(str2[4]) + Number(str2[5]);

if ( sum2 == sum3 ) {
    console.log('да')
} else {
    console.log('нет')
}
