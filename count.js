
function frequency(){
var arr=[2,8,'a',6,'b',2,8,'c',8];
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var mf = 1;
var counter = 0;
var item;

text4.innerHTML = arr;

for (var i=0; i<arr.length; i++) 
{
        for (var j=i; j<arr.length; j++) 
        {
                if (arr[i] == arr[j])  
                 counter++; 

                if (mf<counter)  
                {
                  mf=counter;     
                  item = arr[i]; 
                }
        }
        counter=0; 
}

text5.innerHTML = "The most frequent item is '" + item + "' appearing " + mf + " times ";
}