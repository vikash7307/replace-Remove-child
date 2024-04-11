var newElement = document.createElement("li");

var newText = document.createTextNode("Wow new Text");

newElement.appendChild(newText);

var target = document.getElementById("list");

var oldElement = target.children[0];

console.log(oldElement);

target.replaceChild(newElement, oldElement);