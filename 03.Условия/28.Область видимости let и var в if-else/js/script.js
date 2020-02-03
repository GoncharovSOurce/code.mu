/*
//Область видимости let и var в if-else
//01
let age5 = 17;
let adult5;

if (age5>= 18) {
    adult5 = true;
} else {
    adult5 = false;
}

console.log(adult5);//false


//Ньансы
//02
let age1 = 19;
let adult1;

if (age1 >= 18) {
     adult1 = true;
} else {
     adult1 = false;
}

console.log(adult1);//false

//03
let age2 = 17;
let adult2;

if (age2 >= 18) {
    adult2 = true;
} else {
    adult2 = false;
}

console.log(adult2);

//04
let age = 17;
let result;

if (age >= 18) {
    if (age <= 23) {
         result = 'от 18 до 23';
    } else {
         result = 'больше 23';
    }
} else {
    result = 'меньше 18';
}
console.log(result);

//05
let age3 = 19;
let result3;

if (age3 >= 18) {
    if (age3 <= 23) {
        result3 = 'от 18 до 23';
    } else {
        result3 = 'больше 23';
    }
} else {
    result3 = 'меньше 18';
}

console.log(result3);
*/

//06
let num = 1;

if (num == 1) {
    var result = 'верно';
} else {
    var result = 'неверно';
}

console.log(result);

//Замечания по поводу let и var

//Как я упоминал ранее, объявление переменных через let появилось в JavaScript позже, чем объявление переменных через var.
//
// В настоящее время рекомендуется объявлять переменные именно через let,
// так как область видимости таких переменных ограничена фигурными скобками (это защищает код от случайных ошибок).