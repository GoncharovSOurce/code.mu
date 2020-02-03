//Комбинации конструкций if-else
//01
let day = 15;

if ( day > 1 && day <= 10 ) {
    console.log('первая декада')
}
if ( day >= 11 && day <= 21 ) {
    console.log('вторая декада')
}
if ( day >= 22 && day <= 31 ) {
    console.log('третья декада')
}

//Конструкция else if
//02
if ( day > 1 && day <= 10 ) {
    console.log('первая декада')
} else if ( day >= 11 && day <= 21 ) {
    console.log('вторая декада')
} else if ( day >= 22 && day <= 31 ) {
    console.log('третья декада')
}

//Преимущество else if
//Преимуществом использования else if вместо нескольких ифов является возможность отловить ситуацию,
//когда значение переменной num не подходит ни под одно из условий:
//03
if ( day > 1 && day <= 10 ) {
    console.log('первая декада')
} else if ( day >= 11 && day <= 21 ) {
    console.log('вторая декада')
} else if ( day >= 22 && day <= 31 ) {
    console.log('третья декада')
} else {
    console.log('error')
}

//Вложенные if
//Конструкции if-else можно вкладывать друг в друга произвольным образом.
//04
//доделать

let num = 15;
let sum = num[arr];

if (num > 10) {
    if (num < 99) {
        alert('от 10 до 99');
    } else if (sum <= 9) {
        alert('сумма однозначна')
    } else if (sum >= 10) {
        alert('сумма двузначна')
    } else {
        alert('больше 99');
    }
} else {
    alert('меньше 10');
}
