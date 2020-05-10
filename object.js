function readObj(){
    var person = [{name:"George", gender:"male", age:25},{name:"betty", gender:"female", age:22},{name:"Aby", gender:"male", age:24}];

    var x;
    var text = ""; 
    for(i=0;i<person.length;i++){      
        for (x in person[i]) {
            text += person[i][x] + " ";
        }
    }
    
    person.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    var y;
    var text1 = ""; 
    for(i=0;i<person.length;i++){      
        for (y in person[i]) {
            text1 += person[i][y] + " ";
        }
    }
    document.getElementById("text13").innerHTML = "Object from array: " + text;
    document.getElementById("text14").innerHTML = "Sorted object (according to name): " + text1;
}