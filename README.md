# OdinNotes
Notes taken throughout the Project Odin course.


#The Odin Project

##Introduction to Web Development:

**Web Developers:** Primary focus is to create and publish websites onto the internet for clients including non-profits, government, or private companies.

**The Internet:** The internet is a network of linked computers that are constantly communicating to one another.

**Packets: Packets are information sent from a user to a receiver containing information needed to communicate.**

**Web Page:** is the contents of what you see in your browser.

**Web Server:** Contains the code for how the website should look and delivers information to the client side.

**Web Browser:** A piece of software that displays webpages.

**Search Engine:** A Search engine is a web server that searches the internet(all computers linked together) for information. We as users can use a webpage within a web browser to find and locate web pages and view them.

**Client:** The client computer is the computer that asks for information from the server. The client can also be thought of as our computer.

**Server:** The server receives requests from the client in the form of packets and responds with information/data to display.

DNS Servers: also considered the phone book of the internet. DNS converts the IP addresses into easily readable domain names (github.io).

Routers: Connect computers to the internet and then routers communicate to other routers in order to relay information to the appropriate address. Routers are conceived at chokepoints on the internet. 

Modem: Needed to connect the vast networks together. Routers connect to the modems which then connect to ISP which allow communication across ISP’s and help us get our information. 

Autonomous Number System:  A global method for identifying and sharing information across routers.

Your Internet Connection: Connected to a router wireless/wired and then through an ISP to the internet to send and receive information in the form of packets. (the road that leads to the food store)

TCP/IP: Transmission Control Protocol and Internet Protocol. Both dictate how information is sent from one computer to another. (like riding the bike or car to get food.)

DNS: Domain Name Server is essential to find the exact web address you are looking for based on the domain in the url. DNS acts as a website phone book to extract the exact website from the server it is being hosted on. (google maps of the food store).

HTTP: Hypertext transfer protocol is the language used for clients and servers to communicate and send data from one another. (me talking to the cashier).

Component Files: Websites contain many different files and paths which are broken up into two types of components files. (Different items at the shop)
	Code Files: Websites built on ReactJS HTML and JS
	Asset Files: Assets on the website such as images, videos, pdfs etc

The Process:
First i type in the url and the DNS system looks up the domain on the server that hosts the website. Then using HTTP, the browser sends a  request to the server to retrieve the information that the website has using the TCP/IP protocols. If approved, the server sends data back in the form of data packets which are assembled to create the website and all of its webpages!

DNS explained: Real Website addresses(IP addresses) are long numerical decimals that represent unique locations on the web. DNS was invented to match the IP address with the domain name for easy url access to websites.

CLI: Command Line Interface can be used to launch applications and manipulate the operating system using various commands.
	Pwd: present working directory location.
	Ls or ls -l: to display contents in folder or to display contents in a list format
	Rm or rmdir: to remove files or remove directories
	Mv folder/file folder/file: This will move folders and files to new locations.

Bash: Bourne Again SHell is a software shell on our computer that lets us interact with our operating system by using commands.

Resources: https://vimeo.com/128575085

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work#Summary

https://www.youtube.com/watch?v=7_LPdttKXPc&feature=youtu.be&t=46s

https://www.youtube.com/watch?v=72snZctFFtA&feature=youtu.be&t=45s

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works#Clients_and_servers

----------------------------------------------------------------------------------------------------------------------------

#Introduction to Git:

Git:  a version control program used to make edits locally and push code to the web to github. Git tracks changes in each individual file and creates time stamps to view code at a certain time, a save button on word only updates and the latest version.

Git is all stored locally and uses snapshots to replicate each directory as it once was making it easy to access contents from previous changes, unlike previous VCS that used a delta based update mechanism version control model.

Git uses a checksum method before storing the data, which means git is tracking all and every change made. It does this using SHA-1 hashes comprised of the hexadecimal format. 

Committed: this means git has successfully stored to the local database.
Modified: this means an edit has been made but it has not been stored(aka committed).
Staged: this means a file is marked in its current version to be deployed on a commit. (Git Add)

Git Status: checks the status to see any changes since the last commit
Git log:  views our commit history

Central VCS: all user have access to the files on a single server which can create issues for manipulating code with errors, the server is down, and can only get access with network connection or else you will only see files you already have access to.

Distributed VCS (Git): everyone has a local copy of the master branch. Everyone has an entire back up and a network connection is not necessary to see the changes, in fact you can work offline as well.

Gitignore file: used to ignore files in the git repository

3 Phases of git: Working Area - - - - Staging Area - - - - Git Directory online

Git reset: git reset “name of file” will reset the file in the the staging phase of the git process.
Git log: creates the SHA-2 Hash for each commit
Git diff:  shows changes made to files in git
Git merg “Branch Name”: Merges the branch that was previously worked in with the master and then git push origin master to send to the git repository.
Git branch -d  “branch name”:  delete a local branch
Git push origin --delete “branch name”: deletes a branch on the remote repository

Program | Action | Destination

Git | Add | .
Git | commit -m | ‘message’

Git Add: is essentially gathering everyone to take a picture and figuring out who is in and who is out. The people are the files and the photograph will become the commit and push.

Git commit: is the actual staging of the files and the “picture” being taken

Origin: Set up default by github in order to connect to the remote url of the repository. You can set up different unique remotes to access different names.

Master: the name of the branch that the changes are being placed into. Master is the live official branch. It is important to create subbranches to not conflict data and other people’s contributions.


#Front end Web Development:

HTML/CSS/Javascript: these languages and functions live in the browser. HTML acts as the structure of the website, CSS acts as the design,and javascript acts as the functionality of the webpage.

NaN is the only type of value not equal to itself: var a = NaN, a!==a → true

Markup Language: A language that that defines a specific structure or style and presentation of raw text.

HTML Element: content comprised of tags that contains raw data. <p></p> <h1></h1> <div></div> etc are all HTML elements.

Nesting tags: HTML tags and content within another tag is nested. One nested element is considered to be the child, 2 would be the grandchild of the respective element.

Attributes: Expand an HTML using attributes added to the beginning of the opening tag. Attributes are made of two components: The name of an attribute i.e. “id” “class” etc and a value to go with it.



#Javascript fundamentals:

How do you declare a variable?
What are three different ways to declare a variable?
Which one should you use when?
What are the rules for naming variables?
What are operators, operands, and operations?
What is concatenation and what happens when you add numbers and strings together?
What are the different type of operators in JavaScript?
What is the difference between == and ===?
What are operator precedence values?
What are the increment/decrement operators?
What is the difference between prefixing and post-fixing them?
What are assignment operators?
What is the “Unary +” Operator?
Javascript numbers: there is only one type of number in javascipt and that is 64bit floating point numbers.

Numbers are stored in 64 bits where the fraction is the the bits 0-51 and the exponent 52-62.

Good practice: adding (.1*10) + (.3*10) to solve the rounding error.
Operand:  number being operated on
Operator: mathematical operation being conducted on operands i.e. +, -,/

The browser in an increment returns the variable and then increments the value.

Assignment operators += , -= , *= all do a mathematical operation on the number on the right to the number or variable on the left side of the operator and assign the variable appropriately. 

Operator: an operator is unary if it only has one operand
	Let x =1
	x= -x → unary operator
An operator is binary if it has two operands attached.

If one value is a string in a  “+” operator equation then the result will be returned as a concatenated string.

Unary: a unary “+” converts string values into numbers and has no effect on variables that are numbers already.

Incrementing prefix vs postfix: prefix returns the new value of the increment or decrement whereas the postfix returns the old value before doing the operation.

Variables:  used in programming applications to assign information or data and reuse the keyword throughout the code to change the application.

Dynamically Typed: in programming dynamically typed  languages allow for variables to store various types of data types and not be bound to a single one.

JavaScript Data Types PRIMITIVE:
Numbers: numbers serve as both floats and integers.
Infinity: any value that’s greater than any number.	
NaN: Not a Number: an operation in which a value cannot be computed. NaN is not equal to itself so a!==a should result in true.

Strings: Strings in javascript must be quoted. There are 3 types of quotes: “ ‘ `, double single and backticks.
Backticks: allow us in javascript to enter in expressions or variables using `${}` format.
Boolean logical types: Evaluate to either true or false.

Null: in javascript has an empty value or nothing or value unknown.

Undefined value: value not assigned and a value could not be found.


#NOT PRIMITIVE:
Object: objects are used to store more than one data value and can be used to store various entities.

Symbol:  used to create unique identifiers for objects.

--------------

typeof: typeof operator returns the type of the argument passed into the parameters.
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

7 basic data types in javascript:

String, number, object, undefined, symbol, null, boolean AND typeof operator that takes arguments and returns there data type hence “type of”.

#Strings:
Strings are a way for us to visualize and see text on web browsers. 
Concatenating: In programming it is used to join strings or join objects together. This is used with the “+” operator.

Number Object: can convert strings into numbers

var convert = “612”

mathConvert= Number(convert)


toString: can be used to convert numbers into strings
var myNum = 123;
var myString = myNum.toString();
typeof myString;




Primite Values cannot have properties or methods because they are not objects but in Javascript methods and properties are available to strings and other primitive values because they are treated like objects.

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

Indexof(): this method returns the index or position of the first occurence of a specified text.

Lastindexof(): returns the last index or position of the specified text

Both return -1 if no value is found

Search(): this method searches a string for a specified value and returns the position.

Search() cannot take a second start position value unlike Indexof but Search() can take regular expressions which indexof() cannot.

Methods for Extracting Strings:
There are 3 methods to extract parts of strings.
slice(start,end)
substring(start,end)
substr(start, length)

Splice: This method takes part of the string and returns the extracted part into a string. This method requires a start position and end position parameter that will be extracted. If the parameter is negative the position is determined from the end of the string.

Substring: This method acts the same as Slice but it cannot take negative parameter values.

Substr: This method is similar to Slice except that the second parameter is the length of the returned string. If not length is specified Substr will slice out the rest of the string. This method can take negative parameters that count from the end of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
Banana, Kiwi

Replace: The Replace method takes a specified value and replaces it with another one.
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
Result: Please visit W3Schools!

Replace is case sensitive and can only return the first value it finds

Regular expressions: these expressions can be used to find global matches and overcome the obstacle of case sensistivity.
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
//   /g is the global regular expression and does not take double or single or backticks to be represented.


Touppercase() and tolowercase(): methods used to convert strings to upper and lower case.

concat(): this method brings 2 or more strings together similarly to the operator “+”.
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

Trim(): The trim method removes white space around the string in order to return the desired result and not extra white space that could cause problems later on. 


Methods for Extracting String Characters:
charAt(position)
charCodeAt(position)
Property access []

charAt(): this method returns the character from a specified position within a string.
var str = "HELLO WORLD";
str.charAt(0);            // returns H

charCodeAt(): This method returns the unicode of the character at a specific index. It returns a UTF-16 code (integer).

Split a String into an array using Split() to omit separators.


Conditionals and Operators:

==: checks to see if values match
===: checks to see if values and types match

Comparison Operators: Comparison operators convert null into a number.

|| OR : used to compare left to right, expressions and will find the first truthy value or return the last operand.

&& AND: used to compare left to right, expressions and will find the first false value or return the last operand.

When to use if and else and switch:
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

Switch Statements: Take a single expression or value as an input that compares it through a list of choices to find a match that then executes the code associated with that value.
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;
    
  // include as many cases as you like

  default:
    actually, just run this code
}

******Tenary Operator*******: An operator that takes one condition and returns one value or expression if it true and one value or expression if false.

**Switch Cases**: evaluate and expression and runs a block of code with the matching case.
	Default: Acts as an “else” in Switch statements


Dev Tools Part 2:

DOM -  Document object model vs HTML - when a page is loaded it gathers and loads all the initial HTML code to the page. The current representation of the page is also known as the DOM, which can be changed over time.	

Console logs: Console log can be used to view relevant information in the console window in Dev Tools. It can be used to debug and view diagnostic code. 
	console.error(): can be used to console log potential errors in the code
	console.warn(): can be used to warn or caution for potential problems.
-not: operator used to show every message in console log that does not contain “not”

REPL: The console acts as a REPL (Read, Evaluate, Print, Loop). This allows us to write javascript code in the console and run it.

****An iframe element lets you embed a page within another page, without giving that sub-page access to your main page. This is how most ads on the web are distributed.*****


Fundamentals Part 3:
Methods: Are defined as being built in browser functions. Methods are defined inside of objects and their variables(properties), make code run efficiently and easier to handle.

Invoking a function: The method used to call or use a function after it has been defined with code blocks.

Anonymous function: a functioned defined as having no name and being “anonymous.
  
Can be used as such:
var myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('hello');
}
Funcion assignment: functions can also be assigned to variables and invoked by that variable name:
var anotherGreeting = function() {
  alert('hello');
}
Parameters: inside the function() parathesis, the values stored are known as the function parameters. This is used to pass values from function to function and accept various inputs.

Scope: Function scope is defined by the different compartments that the code variables are stored under. Global and local are the two main types of scopes.
	Global Scope: can be accessed by any function and variable within the code.
	Local Scope: can be accessed by the function it lays within or

Return Values: values returned to the function when it completes.


Shadow Variables:  variables declared inside a function i.e. let x = 9 as opposed to reassigning the global variable x=9.

Default Value: Parameter values not provided will become “undefined”. To avoid this a default value can be assigned to the arguments 
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

Instead of a value “Text” can also be assigned a complex expression such as an entire function if no parameter is set.

***A function with an empty return or without it returns undefined***
If a function does not return a value, it is the same as if it returns undefined:function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true
Never add a new line when using return or else javascript will interpret it as a semicolon thus rendering it undefined.

Naming a function: always use some type of verb as the prefix when naming a function such as get, create, calc  and then add what that function will do such as getScores, createForm, calcAnswer.
Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
A function can return a value. If it doesn’t, then its result is undefined.
Function Expression: var sayHi = function()

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
Here’s what happens above in detail:
The Function Declaration (1) creates the function and puts it into the variable named sayHi.
Line (2) copies it into the variable func.
Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would writethe result of the call sayHi() into func, not the function sayHi itself.
Now the function can be called as both sayHi() and func().
**Using the parenthesis when assigning a function to a variable copies the result into the variable whereas stating the function name copies the source code into it.**

Code blocks and other syntax structures do not require semicolons at the end such as function declarations, if, for, while etc. function expressions require them not because of the function, but because the statement needs to be closed e.g. a variable being assigned a function needs a semicolon to end it.

Call Back or Callbacks functions: functions that contain other functions as arguments within their parameters to be invoked at a later time and displayed or used sequentially. 

**values such as strings and numbers are representative of data when functions represent actions being taken.

Function Declaration: function exampleFunction(){   “code here” }
	A function declared as a separate statement in the main code of flow.
Function Expression: var abc = function(){ “code here “ };
	A function created inside an expression or other inside another syntax

Function Declaration vs Function Expression:
Function Expressions flow from left to right, once the right side(the function declaration) is reached the function is created and can be used from that point onward. Function expressions are created when the code execution reaches them.
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};


Function Declarations are prepared at the start of the script runtime similar to an initialization stage, which they can then be used for execution. NOTE: because of this a function can be declared before it is assigned.
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

When a Function Declaration is made within a code block, it is visible everywhere inside that block. But not outside of it.

Arrow function: let func = (arg1, arg2, ...argN) => expression
Summary
Functions are values. They can be assigned, copied or declared in any place of the code.
If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
If the function is created as a part of an expression, it’s called a “Function Expression”.
Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
Function Expressions are created when the execution flow reaches them.
In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.
So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
Arrow functions are handy for one-liners. They come in two flavors:
Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.


**Fundamentals of Javascript Part 4**

Arrays:  a special variable that can hold more than one value at a time.
var array_name = [item1, item2, ...];  
In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.

toString(): method that converts array into strings separated by commas.
join(): method that joins array elements into a string and allows the method to have the join separator specific e.g. join(“ * “) array broken in to strings separated by *.
pop(): used to take items out of an array
push(): used to push items into an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits

loops:
Counter: used to keep track of the start of the loop
Exit condition: a way to exit the loop after a condition is met
Iterator: a way to increment the counter by a small amount for each successful loop until an exit condition is met.

Test Driven Development(TDD): it describes writing automated tests that describe how the code should function.


The filter() method creates a new array with all elements that pass the test implemented by the provided function.
	
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

The DOM:

DOM Document Object Model: tree like representation of the contents on a webpage referring to different nodes on the tree and how they relate to one another (parent, child, sibling, etc).

Working with the DOM: when working with the DOM, we will use selectors to target specific nodes that we wish to work with. In one example we can use CSS Style selectors and the relationship properties of the nodes(parent, child etc) to edit and alter site content.
	<div class="display"></div>:
	We can use different selector options to grab the class “display”
		
div.display
.display
#container > .display
div#container > div.display
When HTML code is parsed by web browsers it is converted to the DOM. Each of the nodes act as objects with various methods and properties attached to them. We will use these methods and properties to manipulate our web pages with javascript. 

Query Selectors:
 element.querySelector(selector) returns a reference to the first match of selector.
element.querySelectAll(selectors) returns a nodelist containing all references that match the selectors 

When using querySelectAll(selectors) the return value is not in the form of an array. It will look like an array, but it is really a nodelist. Methods in nodelist are different than methods that can be applied to arrays. Convert the nodelist to an array should a problem arise with Array.from() or spread operator.

Element Creation: document.createElement(tagName,[options]) will create a new element with a tagName with a specific tag type (p, div, etc) and options in this case refers to various parameters when initializing the new tag. This does not place the new element onto the DOM just yet, but it is stored in the memory.

Appending Elements:
parentNode.appendChild(childNode) appends childNode as the last child of parentnode.
parentNode.insertBefore(newNode, referenceNode) inserts a newNode into parentNode before referenceNode.
Removing Elements:
parentNode.removeChild(child) removes child from parentNode on the DOM and returns reference to child. Reference as in a variable assigned to the DOM element using a selector.
div.setAttribrute(type(id), name),  div.getAttribute(id), div.removeAttribute(‘id’)

div.setAttribute('id', 'theDiv');                              
// if id exists update it to 'theDiv' else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute




Working With Classes:

div.classList.add(“new”);
Adds the class “new” to the div
div.classList.remove(“new”);
Remove “new” class from div
div.classList.toggle(“active”);
If div does not have class “active” then add it and if it does then remove it.

Adding Text content:

div.textContent = “Hello World”
-creates a text node containing Hello World and inserts it into the div


div.innerHTML = “<span> Hello World! </span>;
-renders html inside the div but it can pose a security risk when the html code renders user input.

****note**** Java script alters the DOM, not the HTML file, this means the html will remain the same but then browser will look different because of the html.

Adding Inline Style:

 
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';         
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');  
// adds several style rules


