
var large = document.getElementById("large");

function findLarge() {
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    
    if(a==b){
        large.innerHTML = "Both are equal";
    }
    
    else if(a>b){
        large.innerHTML = a + " is larger";
    }

    else if(a<b){
        large.innerHTML = b + " is larger";
    }
}