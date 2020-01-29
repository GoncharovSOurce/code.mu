//Сложные условия в if-else
//Логическое И &&
//01
let num = 3;
if (num > 0 && num < 5){
    console.log('good')//good
} else {
    console.log('no good')
}

//02
if ( num => 10 && num <= 20) {
    console.log('верно')
} else {
    console.log('неверно')
}

//03
let num1 = 2;
let num2 = 7;

if ( num1 <= 1 && num2 >= 3) {
    console.log('верно')
} else {
    console.log('неверно')
}

//Логическое Или  ||
let num4 = 5;
let num3 = 5;

if (num4 >= 0 || num3 >= 0) {
    console.log('верно');
} else {
    console.log('неверно');
}


//Приоритет операций сравнения
//Операция && имеет приоритет над ||.
let num6 = 3;

if (num6 > 0 && num6 < 5 || num6 > 10 && num6 < 20) {
    console.log('верно');
} else {
    console.log('неверно');
}

//Группировка условий
//12
let num7 = 3;

if ((num7 > 5 && num7 < 10 ) ||  num7 == 20) {
    console.log('верно');
} else {
    console.log('неверно');//неверно
}

//13

if ((num > 5 || num > 0) && num < 3) {
    console.log('верно');
} else {
    console.log('неверно');
}

//14
if ((num == 9 )|| (num > 10 && num < 20 )|| (num > 20 && num < 30)) {
    alert('верно');
} else {
    alert('неверно');
}