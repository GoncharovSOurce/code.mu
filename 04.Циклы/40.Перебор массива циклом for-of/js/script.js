//Перебор массива циклом for-of
//В ES6 появился новый цикл for-of, предназначенный конкретно для перебора массивов. Он имеет следующий синтаксис:
//for (let переменнаяДляЭлемента of массив) {
    /*
        В переменнуюДляЭлемента по очереди
        будут попадать элементы перебираемого массива.
    */
//}


//ПРИМЕР
//     let arr = [1, 2, 3, 4, 5];
//
//      for (let elem of arr) {
// 	    console.log(elem);
//      }


//01
//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.
let arr = [ 'a', 'b', 'c', 'd', 'e' ];

for ( let elem of arr ) {
    console.log(elem)
}


//02
//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.
let arr1 = [ 1, 2, 3, 4, 5 ];

for ( let sum of arr1 ) {
    console.log(arr1[0] + arr1[1] +arr1[2] + arr1[3] + arr1[4])
}