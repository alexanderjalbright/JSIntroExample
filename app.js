// Make h1 in header have different text
var header = document.querySelector("header");
var headerH1 = header.querySelector("h1");
headerH1.innerHTML = "Javascript Practice";

// Make nav ul li elements get larger when you hover over them
var navItems = document.querySelectorAll("li");
var navItemsSize = navItems[0].style.fontSize;
navItems.forEach(function(item){
    
    item.onmouseover = function(){ item.style.fontSize = "50px";},
    item.onmouseout = function(){ item.style.fontSize = navItemsSize;}

});

// Add another element to the main element
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var main = document.querySelector("main");
main.appendChild(para);

// Dynamically change the color of the background on the footer when the user hovers over it
var footer = document.querySelector("footer");
var footerBkgdColor = footer.style.backgroundColor;
footer.onmouseover = function(){ footer.style.backgroundColor = "#00bbff"};
footer.onmouseout = function(){ footer.style.backgroundColor = footerBkgdColor};

// Change the font size of the paragraphs in the main element when the user clicks them
var mainParas = main.querySelectorAll("p");
mainParas.forEach(function(item){
    
    item.onclick = function(){ item.style.fontSize = "50px";}
});

// Change the text in the footer when the user clicks it
footer.onclick = function(){footer.innerText = "poop";}

// Remove the h1 element in the header
headerH1.remove();

// Put something in the place of the h1 in the header
var element = document.createElement("h2");
element.innerText = "Replacement of header h1";
header.insertBefore(element, header.childNodes[0]); 

// Change the text in one of the paragraph tags in the main element
mainParas[1].innerText = "I CHANGED IT.";

// Change the size of the header element to 200px using grid syntax
var headerHeight = document.querySelector(".container");

headerHeight.style.gridTemplateRows = "200px auto 12px";