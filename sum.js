
var array = [5,10,11,8];
var text8 = document.getElementById("text8");
var text9 = document.getElementById("text9");

function sumSqr(){
    var out=0;
    for (var i=0; i<array.length; i++) 
    {
        out=out+(array[i]*array[i]);  
    }
text8.innerHTML = array
text9.innerHTML = "The sum of the square of elements of array: " + out;
}
