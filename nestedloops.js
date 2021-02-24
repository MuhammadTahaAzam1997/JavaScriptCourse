
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; 
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullName =[];
for(var i=0;i< firstNames.length;i++){
    for(var j=0;j<lastNames.length;j++){
    fullName.push(firstNames[i]+lastNames[j]);
    
    
    }
    
}
for(var a=0; a<fullName.length;a++){
    document.writeln(fullName[a].toLowerCase()+ "<br>")}