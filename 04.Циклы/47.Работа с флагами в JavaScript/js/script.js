//Работа с флагами в JavaScript
//Как уже упоминалось выше,flag - это такая переменная, которая может принимать два значения: true или false.
let arr = [1, 2, 3, 4, 5];
let flag = false; // считаем, что элемента 3 нет в массиве

for (let elem of arr) {
    if (elem == 3) {
        flag = true; // элемент есть - переопределим переменную flag
        break; // выйдем из цикла
    }
}

if (flag === true) {
    console.log('есть');
} else {
    console.log('нет');
}

//Задача
//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. Проверьте, что в этом массиве есть элемент 'c'.
// Если есть - выведите 'да', а если нет - выведите 'нет'.

let array = ['a', 'b', 'c', 'd', 'e'];
let flag1 = false;

for (let elem1 of array) {
    if (elem1 == 'c') {
        flag1 = true;
        break;
    }
}

if (flag1 === true ) {
    console.log('есть')
} else {
    console.log('нету')
}