var names = ["Devin", "Michelle", "Faison", "Derek", "Nicole", "Daria"];
var name = prompt("Enter a name to search for: ");  
var position = names.indexOf(name);
if (position >= 0) {
    alert ("Found " + name + " at position " + position);
} else {
    alert (name + " not found in array.");
}