 //First Example
 
 function findMin ( myArray){
     if (myArray.length === 1) {
         return myArray[0];
     }
     else {
         if ( myArray[0] > myArray[1]){
            myArray.splice(0);
         }
         else {
             myArray.splice(1);
         }
     }
     return findMin(myArray);
}


//Second Example

var i = 0, min = arr[0];
function findMin(arr){
    if ( i < arr.length - 1){
        if ( arr[i] < arr[i+1]){
            if ( min > arr[i] ){
                min = arr[i];
            }
        } else {
            if ( min > arr[i+1]){
                min=arr[i+1]
            } 
        }
        i++;
    } else {
        return min;
    }
    return findMin(arr);
}
