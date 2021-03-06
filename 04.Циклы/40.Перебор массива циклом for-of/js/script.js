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




//Цикл for vs for-of
// Возникает вопрос, когда же для перебора массива применять цикл for-of, а когда обычный for? Правило тут такое:
// если вам не нужны номера элементов массива - используйте for-of, а если нужны - используйте обычный for.

//03
// Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива.
// Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.
//через for - of
let mounth2 = [ ' январь ' , ' февраль ' , ' март ' ];

for (  let all of mounth2) {
    console.log(all)
}


//другой пример просто через for
let mounth1 = [ ' январь ' , ' февраль ' , ' март ' ];

for (  let i = 0; i < mounth1.length; i++) {
    console.log(mounth1[i])
}


////04     НЕ РЕШИЛ
//Пусть у вас есть массив с днями недели. Пусть в переменной month хранится номер текущего месяца, например, 10.
// С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом.
// Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

let day = [ 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье' ];
let mounth = 10;

for ( let mounth of day ) {
    console.log(mounth)
}

