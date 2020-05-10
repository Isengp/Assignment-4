var text16 = document.getElementById("text16");
var txt = "";
function patStar() {   
var i, j; 
   
        for(i=0; i<4; i++) 
        {      
            for(j=0; j<i; j++) 
            { 
                text16.innerHTML = txt += "* ";   
            }
            text16.innerHTML = txt += "* " + "</br>";
        } 
   }