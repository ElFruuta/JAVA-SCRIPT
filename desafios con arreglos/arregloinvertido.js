var myArray = ['a', 'b', 'c', 'd', 'e'];

//console.log(myArray[0]);
//console.log(myArray[myArray.length - 1]);

//myArray[0] = myArray[myArray.length - 1];


var left = 0;
var right = myArray.length - 1;

while (left < right) {
    var dummy = myArray[left];
    
    myArray[left] = myArray[right];
    myArray[right] = dummy;
    
    left++;
    right--;
    
}

console.log(myArray);












