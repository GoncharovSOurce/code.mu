//Массивы
//01
let arr = ['a','b','c'];

console.log(arr);

//02
console.log(arr[0]);//a
console.log(arr[1]);//b
console.log(arr[2]);//c

//03
let array = ['a','b','c','d'];
let a = ['a+'];
let b = ['b+'];
let c = ['c+'];
let d = array[3];


console.log(a + b + c + d);

//04
let Arr = [1, 2, 3];

console.log(Arr[0] + Arr[1] + Arr[2]);

//05
let newarr = [2, 5, 3, 9];
let num = newarr[0] * newarr[1];
let num1 = newarr[2] * newarr[3];
let result = num + num1;

console.log(result);

//Длинна массиива  - так же как и строка находиться с помощью свойства length
//06
console.log(Arr.length);

//Последний элемент массива
//07
console.log(array[array.length - 1]);

//Изменение массива - Элементы массивов, в отличие от символов строк, можно изменять:
//08
let NewArray = ['a','b','c'];
NewArray[0] = 1;
NewArray[1] = -2;
NewArray[2] = -3;

console.log(NewArray);

//Перезапись элементов
//09
let Newarray = [1, 2, 3, 4];
Newarray[0] += 3;
Newarray[1] += 3;
Newarray[2] += 3;
Newarray[3] += 3;

console.log(Newarray);

//Инкремент и декремент
//10
let NewArrays = [2,3,4,5];
++NewArrays[0];
++NewArrays[1];
++NewArrays[2];
++NewArrays[3];

console.log(NewArrays);

//Заполнение массива
//11
let testarr = [];
testarr[0] = 1;
testarr[1] = 2;
testarr[2] = 3;

console.log(testarr);

//12
let arr1 = [1, 2, 3];
arr1[3] = 4;
arr1[4] = 5;

console.log(arr1);

//Несуществующие элементы - Обращение к несуществующему элементу массива вернет undefined
let arr2 = ['a', 'b', 'c'];
console.log(arr2[10]); // выведет undefined

//Разреженный массив
