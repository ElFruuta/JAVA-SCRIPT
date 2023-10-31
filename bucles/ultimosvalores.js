function fibonacciArray(n) {

    var fibArr = [0, 1];

    for (var i = 2; i < n ; i++) {
        var fib = fibArr[i-1] + fibArr[i-2];
        fibArr.push(fib);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 
