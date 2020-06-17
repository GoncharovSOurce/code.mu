//48
//Нахождение простых чисел на JavaScript
let num = 31;

let flag = true;
for (let i = 2; i < num; i++ ) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}

console.log(flag);