var text11 = document.getElementById("text11");
var text12 = document.getElementById("text12");

function strTrunc(){
    var str = "Hello world!";
    var res = str.substr(0, 10);
    text11.innerHTML = "Input string: " + str;
    text12.innerHTML = "Truncated string (adj to 10 char): " + res;
}