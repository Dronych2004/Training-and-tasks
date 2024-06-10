'use strict'

const arrOfArr = [[1, 2, 3, 4], [100, 20, -10, -20], [1000, -100, 500], [100, 50, 30]]
function worker(arr) {
    let sum = 0;
    let i; // надо объявить переменную внутри функции
    for (i = 0; i < arr.length; i+=1) {
        sum += arr[i];
    }
    return sum;
}



function makeWork(arrOfArr, func) {
    let max = -Infinity;
    let j;// надо объявить переменную внутри функции (она должна отличаться от переменной в функции worker)
    for (j = 0; j < arrOfArr.length; j+=1) {
        let sumArr = worker(arrOfArr[j]);
        if (sumArr > max) {
            max = sumArr
        }
    }
    return max;
}

console.log(makeWork(arrOfArr, worker))