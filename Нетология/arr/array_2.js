const advancedFilter = (arr) => arr.filter(element => element > 0).filter(element => element % 3 === 0).map(element => element * 10)

console.log

console.log(advancedFilter([-1,6,-9,3])); 
console.log(advancedFilter([-10,-21,12,123])); 
console.log(advancedFilter([-1,-2]));