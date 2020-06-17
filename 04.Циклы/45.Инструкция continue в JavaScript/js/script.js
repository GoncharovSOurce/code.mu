//45
// Инструкция continue в JavaScript

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
    let result;

    if (elem % 2 == 0) {
        result = elem * elem;
        console.log(result);

    } else if (elem % 3 == 0) {
        result = elem * elem * elem;
        console.log(result);

    }
}*/

//Как вы видите, строчка console.log(result) повторяется два раза. Давайте вынесем ее за if, вот так:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
    let result;

    if (elem % 2 == 0) {
        result = elem * elem;
    } else if (elem % 3 == 0) {
        result = elem * elem * elem;
    }

    console.log(result); // вынесли вывод за условие
}

//Теперь наш скрипт, однако, работает немного не так: получится, что и для обычных элементов, не обработанных через
// наш if будет выполнятся вывод переменной result в консоль, что по условию нашей задачи нам не нужно.
//
// Поправим проблему, добавив к нашему if еще условие else, которое будет срабатывать для элементов, не делящихся на 2 и 3,
// и вызовем там инструкцию continue, которая сразу же будет перебрасывать нас на новую итерацию цикла:



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
    let result;

    if (elem % 2 == 0) {
        result = elem * elem;
    } else if (elem % 3 == 0) {
        result = elem * elem * elem;
    } else {
        continue; // перейдем на новую итерацию цикла
    }

    console.log(result); // выполнится, если делится на 2 или 3
}