//44
//Инструкция break в JavaScript

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem == 3) {
        console.log('есть');
        break; //выйдем из цикла
    }
}

//Инструкция break может завершать любые циклы: обычный for, while и так далее.


//Задача 1
//
// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор,
// пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

let Arr = [1, 2, 3, 5, 0];

for (let Elem of Arr) {
    if (Elem == 0) {
        console.log('Есть 0');
        break;// остановка цикла
    }
}

//Задача 2
//Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

let array = [ 1, 2, 3, 4, -1];
let result = 0;

for (let el of array) {
    if ( el > 0 ) {
        console.log(' > 0');
        result += array[el];
        break;

    } else if (result += array[el]) ;
     console.log(result)

}console.log(result);