//Вложенные циклы в JavaScript
/*
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
}

//Задача 1
// С помощью двух вложенных циклов выведите на экран следующую строку:111222333444555666777888999
for (let i = 1; i <= 9; i++ ) {
    for(let k = 1; k <= 3; k++) {
        document.write(i)
    }
}
*/


//Задача 2
//С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33



/*for(let i = 1; i <= 3; i++ ) {
    for(let k = 1; k <= 3; k++) {
        document.write(i , k + ' ')
    }
}*/


/*
for (let i = 0; i < 5; i++) {
    //i = 1
    for (let k = 0; k < 10; k++) {
        document.write('*');
    }
    document.write('<br>');
}

*/
for (let i = 1; i<=10; i++) {
   // document.write('3*' +i+ '='+ (i*3) + '<br>');

    for (let k = 1; k <= 10; k++) {
        document.write(`${i}*${k} = ${i * k}<br>`);//конкатенация
    }
    document.write('<hr>')
}