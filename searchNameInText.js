/*jshint multistr:true */

var text = "Jasey is the name of the best Jasey in the Jaseyverse";

var myName = "Jasey";

var hits = [];


for (i = 0; i < text.length + 1; i++) {
    if(text[i] === myName[0]) {
        
        for(var j = i; j < (myName.length + i); j++) {
           
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}

if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
