var n = [7,10,11,15,18,24];
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");

function display(){
    var flag = true;
    text1.innerHTML = n;
    text2.innerHTML = "The first number of the array is " + n[0];

    if(n[0]==1){
        text3.innerHTML = n[0] + " is neither prime nor composite";
    }
    else{
        for(let i = 2; i <= n[0]-1; i++){
            if (n[0] % i == 0){
                text3.innerHTML = n[0] + " is not a prime number";
                flag=false;
            }
        }
        if(flag==true){
            text3.innerHTML = n[0] + " is a prime number";
        }
    }
}
