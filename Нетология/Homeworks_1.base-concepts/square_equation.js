'use strict';

function solveQuadratic(a, b, c) {
    let d = b * b - 4 * a * c;
    if (d < 0) {
        return [];
    } else if (d === 0) {
        return [(-b / (2 * a))];
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    }
}

console.log(solveQuadratic(2, 10, 3))


