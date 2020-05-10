var text6 = document.getElementById("text6");
var text7 = document.getElementById("text7");
function swapCase() {

var str = "The Quick Brown Fox";
    var out = '';
    for (var i=0; i<str.length; i++) {
        if (str[i].toLowerCase() == str[i]) {
           out += str[i].toUpperCase();
        } 
        else {
           out += str[i].toLowerCase();
        }
    }
    text6.innerHTML = "Input string: " + str
    text7.innerHTML = "String with swapped case: " + out;
  }
  