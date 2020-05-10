var text10 = document.getElementById("text10");
var txt1 = "";

function iterNum(){

    for (var i=0;i<=15;i++) {
        if (i % 2 == 0){     
        text10.innerHTML = txt1 += i + " - Even;  ";
        }
        else{
        text10.innerHTML = txt1 += i + " - Odd;  ";
        }   
    }
}