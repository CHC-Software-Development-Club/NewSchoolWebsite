# New Programmers Guide

Oh Hello! I'm assuming since you are here, you are new to programming. This is a cheat sheet. 

During this year's club, we will be working with HTML, CSS, JavaScript (And React). DONT WORRY ABOUT BACKEND! People with knowledge will be working on that along side working with you (the brave soul wanting to learn).

# HTML
- Concept:
 Html is what the the webpage interperates. If you open inspect element, that is HTML. Think of it as directions to a LEGO set. The website interprets it, and builds it. 
 
One MAJOR part of this is elements. An element is a "part" of a project. Think of it like a periodic table element. They each have their own function. That's the same with HTML elements. They each make up a part of a webpage.

Below I put a table of common HTML Elements, which is INCREDIBLY useful for very new HTML programmers. Don't worry. This language is fairly easy. 
![Common HTML Element Chart](https://3.bp.blogspot.com/-nTFGSrgQkig/VtSMGZrsZyI/AAAAAAAAKvg/93T3baoPQFo/s1600/html-tags-list.jpg)

- Basic HTML File
```
<html> #This declares the file an HTML file. 
<div id="Hai> #This declares a section or "division" of the code
<p>Hello World<p> #This is the paragraph element (It is for well... a paragraph!)
</div>
</html> #The Slash ends any element
```


# JavaScript

- Concept:
 Javascript is all about logic. If x does not equal y, then do z. Stuff like that. You are able to declare variables, which are simple statements stating certain text, true or false statements. There are 3 different types. In this club, we are mostly using two for security and practicality:
```
const express = require('express-js'); //U will see this type latr.
const x = 'Some text idk'; //This is a constant. It stays constant throughout the WHOLE FILE. There's no changing it once it's declared

var num = 1 //A basic Variable. Won't be using it much as it has its flaws and causes multiple errors if done wrong.

let x = 'some text' //Let is a variable in a function, and only that function. It will only work there. At the end of the function, it will stop working.
```

There are also something called functions. Functions are basically recallable code as I like to think of it. You can program as many logic statements in a function as you want and helps later. The Best way to think of a function is like... A machine in a factory. The machine has the same function, which it just does everytime it's activated. In the case below, I had to define a function first. Tell it what it is. After, I had to call it (See Ref1 code). This actually runs it.
```
function printConsole(someText) {
this.someText = someText //Don't need to know this QUITE yet. Something u will pick up.
 console.log(someText); //The command to log something in console
}

printConsole(x) //Ref1
```
# CSS
