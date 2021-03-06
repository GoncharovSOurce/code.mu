//Заполнение массивов через цикл в JavaScript
 //ЗАДАЧА 1
//Объявите пустой массив, а затем заполните его числами от 1 до 10.
let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;

console.log(arr);

//Задача 2
//
// Объявите пустой массив, а затем заполните его 5-ю буквами x.
let Arr = [];

Arr[0] = 'x';
Arr[1] = 'x';
Arr[2] = 'x';
Arr[3] = 'x';
Arr[4] = 'x';

console.log(Arr);

//Заполнение массива в цикле
let arr1 = [];

for (let i = 0; i <= 4; i++) {
    arr1[i] = i + 1;
}

console.log(arr1);


//Задача 3
// С помощью цикла заполните массив числами от 1 до 100.

let arr2 = [];

for(let i = 1; i <= 100; i++) {
    arr2[i] = i;
}
console.log(arr2);

//Заполнение значениями не по порядку
// Пусть мы хотим в цикле заполнить массив значениями не по порядку. К примеру, мы хотим записать в массив все четные
// числа в промежутке от 2 до 100.
//
// Для того, чтобы цикл перебирал четные числа, нам придется в каждой итерации увеличивать счетчик цикла на 2.
// Из-за этого массив получится с пропусками:
let arr3 = [];

for (let i = 2; i <= 100; i += 2) {
    arr3[i] = i;
}

console.log(arr3); // массив получится с пропусками

//Для решения проблемы можно просто ввести два счетчика: счетчик i пусть отсчитывает четные числа,
// а счетчик j - итерации цикла для использования в ключах массива:

let arr4 = [];

for (let i = 2, j = 0; i <= 100; i += 2, j++) {
    arr4[j] = i;
}

console.log(arr4);

//Задача 4
//С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

let arr5 = [];

for (let i = 1, j = 0; i <= 99; i +=2, j ++) {
    arr5[j] = i;
}
console.log(arr5);