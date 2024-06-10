

function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    avg = null;
    sum = 0;
    
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        
        sum += arr[i];
        avg = sum/arr.length;
        avg = Number(avg.toFixed(2))  
            
    }
    
    console.log({ min:min, max:max, avg:avg });
    return { min:min, max:max, avg:avg };
  }

getArrayParams([-99, 99, 10])
getArrayParams([1, 2, 3, -100, 10])


