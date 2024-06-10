
//первое решение 
/*const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);


console.log(compareArrays([8, 9], [6])) // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])) // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])) // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])) // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])) // true*/

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((element, i) => element === arr2[i]);
    } else {
        return false;
    }
}

console.log(compareArrays([8, 9], [6])) // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])) // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])) // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])) // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2]))