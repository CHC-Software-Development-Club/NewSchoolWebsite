# New Programmers Guide

Oh Hello! I'm assuming since you are here, you are new to programming. This is a cheat sheet. 

During this year's club, we will be working with HTML, CSS, JavaScript (And React). DONT WORRY ABOUT BACKEND! People with knowledge will be working on that along side helping you out (the brave soul wanting to learn).

# HTML
- Concept:
 Html is what the the webpage interperates. If you open inspect element, that is HTML. Think of it as directions to a LEGO set. The website interprets it, and builds it. 
 
One MAJOR part of this is elements. An element is a "part" of a project. Think of it like a periodic table element. They each have their own function. That's the same with HTML elements. They each make up a part of a webpage. Elements can contain text and other elements within them.

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
 Javascript is all about logic. If x does not equal y, then do z. Stuff like that. You are able to declare variables, which are simple statements stating certain text, true or false statements. There are 3 different types of variable, `const`, `let`, and `var`. In this club, we are mostly using two for security and practicality:
```
const x = 'Some text idk'; //This is a constant. It stays constant throughout the WHOLE FILE. There's no changing it once it's declared

var num = 1; //A basic Variable. Won't be using it much as it has its flaws and causes multiple errors if done wrong.

let x = 'some text'; //Let is a variable in a function, and only that function. It will only work there. At the end of the function, it will stop working.
```

There are also something called functions. Functions are basically recallable code as I like to think of it. You can program as many logic statements in a function as you want and helps later. The Best way to think of a function is like... A machine in a factory. The machine has the same function, which it just does everytime it's activated. In the case below, I had to define a function first. Tell it what it is. After, I had to call it (See Ref1 code). This actually runs it.

Functions take in "parameters", like `someText`, and can return values using the `return` statement so they can be used in another place in your program (the function below doesn't return anything, it just logs a value to the console).

```
function printConsole(someText) {
  console.log(someText); //The command to log something in console
}

printConsole(x) //Ref1
```

Finally, there is the if statement. This will be the logic part of it. The if statement is simple. If something equals something else, then a series of code will run. It is written something like this:
```
if(x == y) {
  console.log("x equals y");
} else { //Else is of course meaning that statement wasn't true, and the code in the else will run.
  console.log("x did not equal y");
}
```
# CSS
Finally, we have CSS. I like to compare CSS to the Google Drive toolbar for documents. CSS is basically just a language to style your HTML (Pretty cool right?).
![Google Drive Bar](https://i.imgur.com/2VpQxa6.png)
Anything you can do on that can be done in CSS. it is written something like this:
```
p {
  font-family: comic-sans;
  color: green;
}
```
Just like HTML, it's just a TON of commands instead of much logic and theory behind it. So here is another list of commands (Ikik I'm lazy)

![CSS Properties](https://www.dummies.com/wp-content/uploads/221806.image0.jpg)


# React
Finally, we are left with React. The main language we will be using as a front end. React is a weird mix of both HTML and Javascript. It's quite a useful language for web development. 

This readme will only include the basics. Recommended learning tools are listed at the bottom. 

Some of the main imports used in React:
```
import React from "react"; //Without this, there'd be no react.
import ReactDOM from "react-dom"; //This allows us to render components, elements, JSX... react.
import styled from "styled-components"; //Used to stylize our JSX (HTML) elements with CSS.
import {element here} from "./{file here}"; //Allows variables, functions, etc. exported from other files to be used.
```
Now let's make some React. React isn't a language, it's a javascript library. So, all of our frontend files will be written in javascript. However, this doesn't mean we're escaping from HTML or CSS. React utilizes a weird hybrid called JSX, that looks like this:
```
class coolHeading extends react.component() {
   render (
      return (
         <div>
            <h1>Cape Henry Collegiate</h1>
         </div>
      );
   )
}
```
See how it's javascript and HTML at the same time? Strange. This is JSX. React compiles it into javascript that it can make sense of. Convenient! 

All that class stuff earlier looks disgusting. Let's use a function instead! 
```
function coolHeading() {
   return (
      <div>
         <h1>Cape Henry Collegiate</h1>
      </div>
  );
}
```
Easier to understand, right? Time to render it. We'll utilize ReactDOM for this:
```
ReactDOM.render(
   <coolHeading/>, //Element is placed in single tag </>.
   document.getElementById("place we want to render") //HTML element with said id is where the element is rendered
);
```
Amazing. The actual header, not so much. Let's make it live up to it's name! Time to stylize it:
```
const Header = stylized.h1`       //Utilizing "styled-components" to declare a constant h1 with certain CSS properties
   text-align: center;
   color: red;
   text-decoration: underline;
`;

function coolHeading() {
   return (
      <div>
         <Header>Cape Henry Collegiate</Header>  //Tag changed to const element
      </div>
  );
}
```
Nice. On a good track to making a fully fledged website. One more thing, what if you want to pass an element to another file? Simple!
```
export function coolHeading() {   //Just put "export" before it and "import" in said file
   return (
      <div>
         <Header>Cape Henry Collegiate</Header>  
      </div>
  );
}

//OR, afterwards:

export default coolHeading; 
```
That's it for the basics! Here's some tools to help:
1. [Codecademy Basics](https://www.codecademy.com/learn/react-101)
2. [React Documentation](https://reactjs.org/docs/getting-started.html)
3. [React App Creation Docs](https://facebook.github.io/create-react-app/docs/getting-started)
