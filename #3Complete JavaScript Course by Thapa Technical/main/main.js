// ===================== (1) Null vs Undefined ========================
var iAmUseless = null;
console.log(iAmUseless); //this returns null.
// but when you do typeof of iAmUseless it returns object.
console.log(`iAmUseless is an ${typeof iAmUseless}`);

var iAmStandBy;
console.log(iAmStandBy); //this returns standby.

// =========================== (2) NaN ==================================
var myStringNumber = '25';
var myString = 'string';
var myNumber = 12;
console.log(`string - number = ${myString - myNumber}`);
console.log(`stringNumber - number = ${myStringNumber - myNumber} it is a bug`);

// 2.1 isNaN ?
var myPhone = 6969696969;
var myName = 'YashRaj';
console.log(isNaN(myPhone));
console.log(isNaN(myName));

// =================== (3) Operators In JavaScript =========================
// 3.1 Increment and Decrement Operator
console.log('Postfix ->');
// 3.1.1 Postfix
var num0 = 15; //..................num0 = 15
var num1 = num0++ + 5; //..........num1 = 15 + 5, num0 +1
var num2 = num1++ + 5; //..........num2 = 20 + 5, num1 +1
var num3 = num2++ + 5; //..........num3 = 25 + 5, num2 +1
var num4 = num3++ + 5; //..........num4 = 30 + 5, num3 +1

console.log(`num0 -> ${num0}`);
console.log(`num1 -> ${num1}`);
console.log(`num2 -> ${num2}`);
console.log(`num3 -> ${num3}`);

// 3.1.2 Prefix
var numA = 15; //..................numA = 15
var numB = ++numA + 5; //..........numA +1, numB = 16 + 5
var numC = ++numB + 5; //..........numB +1, numC = 23 + 5
var numD = ++numC + 5; //..........numC +1, numD = 29 + 5
var numE = ++numD + 5; //..........numD +1, numE = 35 + 5,

console.log(`numA -> ${numA}`);
console.log(`numB -> ${numB}`);
console.log(`numC -> ${numC}`);
console.log(`numD -> ${numD}`);

// 3.2 Comparison Operator
var a0 = 30;
var a1 = 10;
console.log(`30 = 10 is ${a0 == a1}`);
console.log(`30 != 10 is ${a0 !== a1}`);
console.log(`30 > 10 is ${a0 > a1}`);
console.log(`30 < 10 is ${a0 < a1}`);
console.log(`30 >= 10 is ${a0 >= a1}`);
console.log(`30 <= 10 is ${a0 <= a1}`);

// 3.3 Not Operator [of Logical Operator]
a2 = 10;
b1 = 5;
console.log(a2 > b1 || b1 < 0); //............... returns true
console.log(!(a2 > b1 || b1 < 0)); //............ returns false

// 3.4 Some Observations on Operators
console.log(3 ** 3); // '**' means power.
//.................... therefore the expression says 3 raised to the power 3.

console.log(3 ** -1);
//.................... expression says 3 raised to the power -1 => 1/3

// 3.5 Challenge: swap value to two var numbers.

var aC = 5;
var bC = 10;
console.log(`a before = ${aC}`);
console.log(`b before ${bC}`);
aC = aC + bC;
bC = aC - bC;
aC = aC - bC;

console.log(`a now = ${aC}`);
console.log(`b now = ${bC}`);

// ================= (4) Control Statements & Loops ======================
// 4.1 if else
/* Condition -> If it rains tomorrow , then take a raincoat , if it doesn't then don't take the raincoat*/
var tomorrow;
var rain;
tomorrow = rain;

if (tomorrow == rain) {
	console.log('take a raincoat');
} else {
	console.log("don't take the raincoat");
}

// 4.1.1 Challenge: write a program that works out whether if a given year is a leap year or not?
var year = 1900;
if (year % 4 == 0) {
	if (year % 100 == 0) {
		if (year % 400 == 0) {
			console.log('the year ' + year + ' is a leap year');
		} else {
			console.log('the year ' + year + ' is not a leap year');
		}
	} else {
		console.log('the year ' + year + ' is a leap year');
	}
} else {
	console.log('the year ' + year + ' is not a leap year');
}

// 4.1.2 Falsy values

if ((score = undefined)) {
	console.log('not run this');
} else {
	console.log('run this');
}

if ((score = 0)) {
	console.log('not run this');
} else {
	console.log('run this');
}

if ((score = '')) {
	console.log('not run this');
} else {
	console.log('run this');
}

// 4.2. Conditional or ternary operator
var age = 17;
// 4.2.1 statement using if else.
if (age >= 18) {
	console.log('you can vote');
} else {
	console.log(`From if else-> you cant vote`);
}
// 4.2.2 same statement using conditional statement.
console.log(
	`From conditional-> ${age >= 18 ? 'you can vote' : 'you cant vote'}`
);

// 5.3. While loop
// to get number from 1 to 10
/* One method will be -
console.log(1);
console.log(2);
console.log(3);
console.log(4);
☝️ This is the worst method one can use 😂 
*/

// better to use While loop -
var num = 0;
while (num <= 10) {
	console.log(num);
	num++;
}
// ☝️ see how easy it is you poor guy 👿

// 4.3 Do while loop
// we will do the same 1 to 10 with do while loop and see the difference -
var num = 0;
do {
	console.log(num);
	num++;
} while (num <= 10);

// Do while loop first gives the 1st output then checks the condition
// For e.g ->
console.log("dowhile loop's first output even after 20 is not smaller than 10");
var num = 20;
do {
	console.log(num);
	num++;
} while (num <= 10);

// ☝️ Here is the proof of the difference.

// 4.4 For Loop
// we will do the same 1 to 10 with for loop and see the difference -
for (let num = 0; num <= 10; num++) {
	console.log(num);
}

// For loop works like while loop , It first checks the condition then runs the code.

// Challenge: to print table for given number using for loop.
for (let num = 1; num <= 10; num++) {
	// console.log(num);
	var tableOf = 8;
	console.log(`${tableOf} * ${num} = ${tableOf * num}`);
}

// ☝️ Now using this method we can print table of any number upto 10s.

// ===================(5) Functions in javascript===================

// 5.1 Return statement
function multiply(a, b) {
	return a * b;
}

console.log(multiply(5, 5));

// Here caller is in console multiply(5,5);
// return statement returns the value to the caller.

// =======================(6) ES6=======================================

// 6.1 Fat Arrow Function
const sum = () => `the sum of two number is ${(a = 5) + (a = 6)}`;
// ☝️ Actually it is like this => const sum = () => {return `something`};
// But in ES6 fat arrow if there is only one line of code returing a value then there is no need to add curly braces and return keyword.
console.log(sum());

// ==============(7) Arrays in JavaScript===============================
// 7.1 Array
var friends = ['ramesh', 'suresh', 'nitin', 'mukesh'];

// 📝Note: In other programming languages we can add only one type of datatype in an array, if we are adding string then only string no numbers or other datatypes.

// 📝 But in JavaScript this is very sorted we can add any datatype to an array.

// 7.2 Traversal in Array
// Showing single data
console.log(`first element ${friends[1]}`);

// 7.3 Showing last data
console.log(`last element ${friends[friends.length - 1]}`);

// 7.4 display all data in friends array
console.log('Normal For Loop=>');
// 7.4.1 Normal For Loop
for (i = 0; i < friends.length; i++) {
	console.log(friends[i]);
}

// 7.4.2 For in Loop
// 📝Note you can use variable say elements without adding var just simply write elements.

for (let elements in friends) {
	console.log(elements);
}

// 7.4.3 For of Loop
// same as for in just replace in with of.

// ForEach() Loop
friends.forEach(function (element, index, array) {
	console.log(element);
});

// 7.5 Array Methods
// 7.5.1. IndexOf()

var myFriendNames = ['vinod', 'bahadur', 'thapa', 'thapatechnical', 'ramesh'];
// Shows the index no of the name entered.
console.log(myFriendNames.indexOf('thapatechnical', 2));
// The number entered after comma(,) tells it to search from that specific index no . This method can be used as a filter.

// 👇See it starts searching from index 2 thus, it could not find bahadur even if it is in the the array.
console.log(myFriendNames.indexOf('bahadur', 2));

// 👇 if there the data entered doesn't match any in the array it returns -1.
console.log(myFriendNames.indexOf('not exist'));

// 7.5.2 lastIndexOf()
console.log(myFriendNames.lastIndexOf('bahadur'));

// The what's the dirrerence?
// 😊 It starts searching from backwards. while IndexOf searches form forward.

// 7.5.3 includes()
console.log(myFriendNames.includes('thapa', 3));
// 📝NOTE: And yes it also searches forward so incuding index no affects the result unlike lastIndexOf() method.

// 7.5.4 find()
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12

console.log(myFriendNames.find((element) => element > 1));
// ☝️ Returns undefined if no data is find.

// 7.6 Perform CRUD(create, read, update and delete)
const animals = ['pigs', 'goats', 'sheep'];
// 7.6.1 Add data in array.
// Push()
animals.push('chicken');
console.log(animals);

// Add data at the end.
// ☝️ It Returns the new lenght of the array.
// 👇 We can add more than one element at a time
animals.push('cow', 'duck', 'gabi');
console.log(animals);

// unshift().
// Yeah 😂😂 It adds from the start burh!😎
animals.unshift('first meat');
console.log(animals);

// 7.6.2 Remove data in array.
// pop().
// Removes the last element.
animals.pop();

// 👇 returns the removed element .
console.log(animals.pop());

// 👇 Changes the length of array.
console.log(animals);

// shift().
// Yeah removes the first element. 👿👿 bruh!.
animals.shift();

// 👇 Removes element and returns it
console.log(animals.shift());

// 👇 Changes the length of array Ofcourse!
console.log(animals);

/* 7.7 Challenge: 
1. Add dec at the end of array.
2. What is the return value of splice method?
3. update march to March (update) ?
4. Delete June from an array.

=> const months = ['Jan', 'march', 'April', 'June', 'July'];
*/

const months = ['Jan', 'march', 'April', 'June', 'July'];
// 📝Note: we need to do all of this using splice() method.

/*Splice method Parameters :- index	no. , howmany (Number of items to be removed) item1, ..., itemX	(New elements(s) to be added)*/

// const newMonth = months.splice(5,0,'Dec');
// ☝️ Instead of writing the end value manually we can use the .length() method.
// 1. Ans
const newMonth = months.splice(months.length, 0, 'Dec');
console.log(months);

// 2. Ans
console.log(newMonth);
// ☝️ Splice method returns the deleted element, and if there's not it returns an empty arrray.

// 3. Ans
// const March = months.splice(1, 1, 'March');
// ☝️ We don't have to write index manually , when we have JavaScript -

let IndexOfmonth = months.indexOf('march');
if (IndexOfmonth !== -1) {
	const updateMonth = months.splice(IndexOfmonth, 1, 'March');
} else {
	console.log('No such data found');
}

console.log(months);

// 4. Ans

IndexOfmonth = months.indexOf('June');
if (IndexOfmonth !== -1) {
	const updateMonth = months.splice(IndexOfmonth, 1);
	console.log(updateMonth);
} else {
	console.log('No such data found');
}

console.log(months);
// And this time if we console the updateMonth basically splice method we will not get an empty string but we will get the deleted month = ['June'];

// 7.8 Map() .
const array2 = [1, 4, 9, 16, 25];

// num >9

let newArr = array2.map((curElem, index, arr) => {
	return curElem > 9;
});

console.log(array2);
console.log(newArr);
// 📝NOTE: I have told you that map() method doesn't affect the original array so there will be no change in array2 and it returns a new array with the result .

// Challenge Time: (Using Map Method)
/* 1. Find the square root of each element in an array.
	let arr = [25, 36, 49, 64, 81];

	2. Multiply each elements by 2 and return only those elements which are 
	greater then 10.
	let arr = [2,3,4,6,8];
	
*/

// Sol 1
let arr = [25, 36, 49, 64, 81];
// let arrSquare = arr.map((curElem) => {
// 	return Math.sqrt(curElem);
// });

// ☝️ 📝NOTE: We know that if we are using fat arrow function and want to return a value then there is no need to write return or use paranthesis.👇
let arrSquare = arr.map((curElem) => Math.sqrt(curElem));

console.log(arrSquare);

// Sol 2
let arr2 = [2, 3, 4, 6, 8];
let arr3 = arr2
	.map((curElem) => {
		return curElem * 2;
	})
	.filter((curElem) => {
		return curElem > 10;
	});

// ☝️ This is an example of chaining style , in which we can use different methods on one element.
// And yes we can remove return and parantheses while using fat arrow function.

console.log(arr3);

// 7.9 Reduce().
let arr4 = [5, 6, 2];
let sumOfArr = arr4.reduce(
	(accumulator, curElem, index, arr) => (accumulator += curElem)
);

console.log(sumOfArr);

// 7.10 Filter().
// Do this from other channel 😔

// 7. 11 Concat()
let str1 = 'Hello ';
let str2 = 'world!';
let res = str1.concat(str2);
console.log(res);

// ==============(8) Strings in JavaScript==================
// 8.1 Creating String and Escape Character
// 👇Strings created using literals(primitives).
let Name = 'vinod thapa';
let ChannelName = 'vinod thapa';

// 👇 Strings created using string() constructor(non-primitive/object).
let ytName = new String('Thapa Technical');
// 📝But you should'nt use string constructor it is just for knowledge.
console.log(Name);
console.log(ytName);

// .lenght propety
console.log(ytName.length);

// Escape character
// console.log('this is \'escape character\'');
// one more way to do this is by using combination of single and double quotes 👇
console.log("this is 'escape character'.");

// 8.2 Finding string in a string
// IndexOf() method
const myBioData = 'I am Thapa Technical';
console.log(myBioData.indexOf('Thapa'));
// 📝NOTE: Every letter and space get index no.
console.log(myBioData.indexOf('h'));
// ☝️ See there spaces also get index no 😎

// And remember we can specify from which index number to search and indexOf searches from forward and lasIndexOf() searches from the last.

// 8.3 search() method.
console.log(myBioData.search('Thapa'));
// Difference b/w search and indexOf() is that is doesn't take a second start position as an argument like indexOf() method.

// 8.4 Extracting Strings
// 8.4.1 slice() method
var fruits = 'Apple, Banana, Kiwi';
let slice = fruits.slice(0, 5);
// ☝️ We had to give the end value to 5 so that slice method takes value from 0 to 4 as it does not include end position.
console.log(slice);
console.log(fruits.slice(7, -2));
// ☝️ negative value represent 'from last' so it wil not take 2 values from last and return the rest from 7 .

/* 
8.4.2 Challenge time 
1. display only 280 characters of a string.
*/

let displayWords =
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores deserunt veritatis quo pariatur, iusto laudantium aliquam voluptatum autem excepturi exercitationem ea, porro ab quaerat? Nostrum accusamus natus voluptatum animi dolorum eveniet soluta sed inventore, doloribus, enim non illum aliquam delectus voluptate tempore. Dolores cupiditate quis et adipisci vel molestias incidunt autem deserunt? Dicta aliquam velit voluptate consequuntur deleniti! ';

// ☝️ displayWords contain 457 chars..
// We need to display only upto 280 chars.

let onlyWords = displayWords.slice(0, 280);
// dhyan de: kyuki index 0 se start hai to 280 tk ye 280 chars ho chuka hoga
console.log(onlyWords);
// 👇 To check use .length property.
console.log(onlyWords.length);

// 8.4.3 substr()
console.log(fruits.substr(0, 5));
// 👇 extracts data from backside.
console.log(fruits.substr(-4));

// 8.5 Replacing String Content
// 8.5.1 .replace(searchFor, replaceWith);
let toReplace = 'I am vinod bahadur thapa vinod';
let replaceData = toReplace.replace('vinod', 'Vinod');
console.log(replaceData);

// If there are same data then it will only replace the first one , in our case it replaces the first vinod but didn't change the vinod at last.

// To avoid this replaceAll() is used replace all the data, but the problem is that it doesn't work now . I dont know why??

// 8.6 Extracting string characters
// 8.6.1 charAt() method
let charStr = 'HELLO WORLD';
console.log(charStr.charAt(0));

// 8.6.2 charCodeAt() method
console.log(charStr.charCodeAt(0));

/*
8.6.3 Challenge : 
1. return the unicode of the last character in a string
let str = 'HELLO WORLD';
*/

let lastChar = 'HELLO WORLD';
console.log(lastChar.charCodeAt(lastChar.length - 1));

// 8.6.4 property access [ ]
console.log(charStr[1]);

// 8.7 Other useful method
// 8.7.1 toUpperCase() & toLowerCase
let mixedName = 'vInOd';
console.log(mixedName.toUpperCase());
console.log(mixedName.toLowerCase());

// 8.7.1 concat() method
let fName = 'vinod';
let lName = 'thapa';

console.log(fName.concat(' ', lName));
// ☝️ add space using space under quotes.

// 8.7.2 trim() method
var remWhiteSpace = '             Hello             ';
console.log(remWhiteSpace);
console.log(remWhiteSpace.trim());
// ☝️ This method remove while space(space befor and after word).

// 8.7.3 split() method
var txt = 'a,b,c | d,e';
console.log(txt.split(',')); //........ splits by comma.
console.log(txt.split(' ')); //........ splits by space.
console.log(txt.split('|')); //........ splits by bar.

// ====================(9) Date&Time In JavaScript======================
// 9.1 Date Methods
// 9.1.1 new Date().
let currDate = new Date();
console.log(currDate);
// ☝️ returns the current date and time.

// toLocalString(). - gets time in local convention = 2/7/21 etc
console.log(new Date().toLocaleString());

// toString(). - gets time same as in browser
console.log(new Date().toString());

// Date.now().
console.log(Date.now());
// returns every milliseconds since 1 jan 1970

// 9.1.2 new Date(year, month, ....)
console.log(new Date(2021, 0, 5, 12, 30, 30, 0).toLocaleString());

// 😕 But can you notice that every time we are getting time free with date . why??

// 9.1.3 new Date(dateString).
var dateString = new Date('October 13, 2021 11:13:00');
console.log(dateString.toLocaleString());

// 9.1.4 new Date(milliseconds).
console.log(new Date(0));
console.log(new Date(0).toLocaleString());
// ☝️ We can see that it takes milliseconds since 1 jan 1970 , therefor 0 => 1 jan 1970.
console.log(new Date(1609574531435));
console.log(new Date(1609574531435).toLocaleString());
// ☝️ how many milliseconds passed since 1 jan 1970.

// Date Methods()
console.log(new Date().toLocaleString());
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
// 😂 got tricket here ☝️ always remenber that months start from 0 .
console.log(new Date().getDate());
console.log(new Date().getDay());

// how to set individual date ?
// we have seen all the getter (get) methods() now 👇 setter (set) methods().

console.log(new Date().setFullYear(2022));
console.log(new Date().setFullYear(2022, 10, 5));
// setFullYear is used to set month and day primarly. 😎
console.log(new Date().setMonth(10));
console.log(new Date().setDate(5));
// ☝️🧐 setter methods returns year, date,... in milliseconds

// 9.2 Time Methods
console.log(new Date().getTime());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());
console.log(new Date().getMilliseconds());
// the above ☝️ are getters

// 👇 These are setters
console.log(new Date().setTime(6, 5, 10, 0));
console.log(new Date().setHours(6));
console.log(new Date().setMinutes(5));
console.log(new Date().setSeconds(10));
console.log(new Date().setMilliseconds(0));

// These methods are more usable while working on dom elements 😊 So stay tuned.

// more getters
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleString());

// =========================(10) Math Object=============================
// 10.1 Math.PI -> used insted of 𝝅
console.log(Math.PI);

// 10.2 Math.round() -> rounds off the decimal.
let mathNum = 10.499;
console.log(Math.round(mathNum));

// 10.3 Math.pow() -> raised to power.
console.log(Math.pow(2, 3));

// 10.4 Math.sqrt -> square root
console.log(Math.sqrt(25));

// 10.5 Math.abs() -> returns positive value.
console.log(Math.abs(-55));
console.log(Math.abs(4 - 6));

// 10.6 Math.ceil() -> returns +1 everytime
console.log(Math.round(4.4));
// ☝️ returns according to convention.
console.log(Math.ceil(4.4));
console.log(Math.ceil(6.1));
// ☝️ returns the largest nearest value.

// 10.7 Math.floor() -> returns the same number. simply ignore the decimal.
console.log(Math.floor(4.4));
console.log(Math.floor(4.6));

// 10.8 Math.min() -> minimum value ofcourse
console.log(Math.min(0, 1, 2, 3, 4));

// 10.9 Math.max -> yes maximum !
console.log(Math.max(0, 1, 2, 3, 4));

// 10.10 Math.random() -> random value
console.log(Math.random());
// ☝️ gives number b/w 0 and 1.

console.log(Math.random() * 10);
// ☝️ after multiplying by 10 , now it gives number b/w 0 and 10.

console.log(Math.floor(Math.random() * 10));
// ☝️ We can use Math.floor() to eliminate decimal and get integer value.

// 10.11 Math.trunc() (trunket method) -> returns integer part.
console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.99));
// 👇 Math.floor() behaves strangely?? IDK why.
console.log(Math.floor(-4.1));

// =======================(11) Dom In Javascript=========================
// 11.1 Window vs Document objects
console.log(window.location.href);
// ☝️ See we can access location , href of website everyting in window object.

// NOTE : we dont need to write window here ☝️ we can also do it like this 👇
console.log(location.href);
// But we cannot access them in DOM.

// 11.2 Window Objects example -
// alert/confirm/prompt
// alert(location.href);
// if (confirm('Want to visit thapatechnical')) {
// 	location.href = 'https://www.youtube.com/thapatechnical';
// }

// 11.3 Dom Navigation
// 11.3.1 document
console.log(document);
// ☝️ shows the full document data.
console.log(document.head);
// ☝️ shows the data in head tags.
console.log(document.body);
// ☝️ shows the data in body tags.

// 📝Note: ☝️ we need to write document before using the properties.

// To find how many nodes in body tags.
console.log(document.body.childNodes);
// ☝️ we will see the nodes in array form.
// 🧐 Spaces also count as text , so if you have whitespaces it will also count as text.

// Find childrens
console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);

// CSS document style example ->
document.body.firstElementChild.firstElementChild.style.color = 'red';

// ☝️ We can see this method to get the elements is very lenthy to do right?
// Therefore we have some methods to get the elements quickly ->
document.querySelector('#title').style.backgroundColor = 'blue';

// Find parents
console.log(document.body.parentNode);
console.log(document.body.parentElement);
console.log(document.head.parentElement);
// in all cases the result is html because html is the parent of both body and head element.

console.log(document.body.firstElementChild.parentElement);
// ☝️ returns body element because its the child of body so body is the parent of its first child element.

// Find siblings
console.log(document.body.previousSibling);
// Same problem here with only previousSibling it will return whilespaces or tabs as text elements, so use previousElementSibling

console.log(document.body.previousElementSibling);
// ☝️ Now we will get head element because it head, body are children of html element so they all are siblings of each other.
console.log(document.body.nextElementSibling);

// ☝️ and if you check the sibling after body there isnt' any.

// Searching and getting elements using DOM.
console.log(document.getElementById('title'));
console.log(document.getElementsByClassName('className'));
console.log(document.getElementsByTagName('h3'));
// 📝Note:- it is to be noted that class and tags represent all the elements with the same class and tags so any anction performed on one will apply to all.
console.log(document.getElementsByName('gender'));
// ☝️ uses the name attribute like as in form's input elements.

// QuerySelector and QuerySelectorAll
document.querySelector('.para').innerHTML = 'I changed again';
// ☝️ query selector returns the first matching value only.

document.querySelectorAll('.para').innerHTML = 'Did I changed?';
// ☝️ query selector all does not change the data , it is used to return all matching elements only.

console.log(document.querySelector('.para'));
console.log(document.querySelectorAll('.para'));
// ☝️☝️ see the difference qs returns the very first matching element
// and qsall returns all the matching elements.

// ===================(12) Events in JavaScript========================
// 12.1 Event types
// use inline html events.
// use functions and call em'.
const callingFunction = () => {
	alert('By calling a function is most common way of writing functions');
};
// ☝️ The flaw in this method is that it can get overwritten by the events if written down to it.
// use inline events.
const internalEvent = document.getElementById('internalEvent');
internalEvent.onclick = () => {
	alert('Third way use internal Event');
};
// use eventListeners.
const useEventList = document.getElementById('eventListener');
useEventList.addEventListener('click', () => {
	alert('Third way and the most popular one is eventListener');
});
// ☝️ The good thing about this is that we can use it multiple times and it doesn't get over written by down events.

// 12.2 Event Objects
useEventList.addEventListener('click', () => {
	console.log(event);
	// ☝️ this shows the Event object and shows all the elements like target, type e.t.c.
});

// 12.3 Mouse Events
let myPara = document.getElementById('myp');
const mouseDown = () => {
	myPara.style.color = 'red';
	console.log('clicked');
};

const mouseUp = () => {
	myPara.style.color = 'blue';
	console.log('released');
};

// ☝️ The above was done through our first method of adding events that is through inline events.

// 👇 Now we will fire some events with eventlisteners ->
const mouseEvList = document.getElementById('useEventList');
mouseEvList.addEventListener('mouseenter', () => {
	mouseEvList.style.border = '2px solid #333';
	console.log('mouse enter');
});

mouseEvList.addEventListener('mouseleave', () => {
	mouseEvList.style.border = 'none';
	console.log('mouse leave');
});

// 12.4 Keyboard Events
const keyDisplay = document.getElementById('displayKey');
const keyPress = () => {
	console.log('keypress');
	keyDisplay.innerHTML = event.key;
	// shows the key pressed.
};

const keyDown = () => {
	console.log('keydown');
	keyDisplay.innerHTML = event.key;
};
const keyUp = () => {
	console.log('keyup');
	keyDisplay.innerHTML = event.key;
};

// 12.5 Inputs Events
const inputChange = document.getElementById('inc');
const iceCreams = document.getElementById('iceCreams');
const selectElement = () => {
	console.log(`${inputChange.value} and ${iceCreams.value}`);
};
// ☝️ to get what is written in input we use .value property.
// ☝️ to get what is written in text tags use .innerText or .innerHTML.

// ==================(13) Timing based events in JS=======================
// 13.1 setTimeout().
const showName = document.getElementById('showMyName');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	showName.innerHTML = 'Loading..👻';
	setTimeout(() => {
		showName.innerHTML = 'vindo bahadur thapa';
	}, 1000);
});

// 13.2 clearTimeout().
const start_ = document.getElementById('startP');
const stop_ = document.getElementById('stopP');

start_.addEventListener('click', () => {
	alert('destruction started...');
	myvar = setTimeout(() => {
		alert("you couldn't stop the destruction 💥");
	}, 2000);
});

// ☝️📝 Notice:- we need to give a reference to setTimeout for clearTimeout like the above myvar = setTimeout...

stop_.addEventListener('click', () => {
	alert('destruction aborted...');
	clearTimeout(myvar);
});

// 13.3 setinterval().
const para_interval = document.querySelector('#intervalPara');
const btn_interval = document.querySelector('#btnNew');
const stopBtn = document.querySelector('#btnToStop');
let num_interval = 0;

btn_interval.addEventListener('click', () => {
	para_interval.innerHTML = 'loading...👻';
	interval = setInterval(() => {
		para_interval.innerHTML = num_interval;
		num_interval++;
	}, 1000);
});

stopBtn.addEventListener('click', () => {
	clearInterval(interval);
});

// ====================(14) OOPS IN JS=================================
// 14.1 Creating an object (1st way)
let bioData = {
	myName: 'thapatechnical',
	myAge: '26',
	getData: function () {
		console.log(`My name is ${bioData.myName} and My age is ${bioData.myAge}`);
	},
};

console.log(bioData);
console.log(bioData.myName);
bioData.getData(); //...... NOTE here we just need to call the method and dont need to console log because we are already console logging in the method itself.
// 🔔 functions in objects are called as methods.

// 14.1.1 Creating an object (2nd way)
// We don't need to write function while making a function in objects.(es6) ->
// 👉 we can just write => getData : (){}.

// 14.1.2 Objects inside Objects
let realBioData = {
	myName: {
		myRealName: 'vinod',
		myRealAge: 30,
	},
};

// ☝️ See we used another pair of curly braces to create an object inside an object.
// 🧐 How to call??
console.log(realBioData.myName.myRealName);
// 🔔 just keep adding properties(.).

// 14.2 'this' object in JS
// 14.1 example 1 ->
console.log(this);
//  this returns window object , as window is our global object and 'this' object at this place belongs to window object.

console.log(this.alert('awesome'));
// 🧐 See 'this' not belongs to window object and can use the methods and properties of window object now

// 14.1.2 example 2 ->
function ex2() {
	console.log(this);
}
ex2();

// ☝️ after doint this also , we get this belonging to the global object and not the function scope.

// 🔔 Point to be noted :- this object inside a funcion refers to the global object too.

// 14.1.3 example 3 ->
let myNames = 'vinod';
function myNamefunction() {
	console.log(this.myNames);
}
myNamefunction();

// 14.1.4 example 4 ->
const obj = {
	myAge: 26,
	myRealName: 'vinod',
	myName() {
		console.log(this);
		// console.log(myRealName);
		// ☝️ The above will throw an errow while accessing the obj properties but adding 'this' here make it belong to the obj scope and allows to use the obj properties like this 👇
		console.log(this.myRealName);
		console.log(this.myAge);
	},
};

obj.myName();

// 14.1.5 object with fat arrow function method.

const obj2 = {
	myAge: 26,
	myRealName: 'vinod',
	myName: () => {
		console.log(this);
		// console.log(myRealName);
		// ☝️ The above will throw an errow while accessing the obj properties but adding 'this' here make it belong to the obj scope and allows to use the obj properties like this 👇
		console.log(this.myRealName);
		console.log(this.myAge);
	},
};

obj2.myName();
// 🔔 See now it returns window object and undefined.

// ===================(15)ECMA Script 2015 to 2020=====================
// 15.1 Array Destructuring.
const dArray = ['vinod', 'bahadur', 'thapa', 26];
let myFName = dArray[0];
let myAge = dArray[3];

console.log(myFName);
// 🔔 The above ☝️ method of getting data using index can be lenthy and sometimes time consuming, therefor we have array destructuring in JavaScript.

let [myRealFName, myMName, myLName, myRealAge] = dArray;
console.log(myMName);

// 🔔 This is very handy.
// Not only we can get elements but also add elements using assignment operator 🧐
// let[myRealName, myName, myFatherName = 'Sanjay' ];

// 15.1.2 Object Destructuring.
const dObj = {
	friendName: 'shivam',
	friendFather: 'strotam',
	friendAge: 70,
};

let fName_ = dObj.friendName;
console.log(fName_);
// ☝️ Again we need to do this lenthy method, but we can destructure it using object destructuring ES6.

let { friendName, friendFather, friendAge, friendMother = 'surita' } = dObj;
console.log(friendName);
console.log(friendMother);

// 15.2 Object Properties
// 15.2.1 Dynamic Properties
let myName_ = 'vinod';
const myBio_ = {
	myName_: 'hello how are you?',
	26: 'is my age',
};

console.log(myBio_);

// 🙋‍♂️ We would like to get vinod as or key value (dynamic data).
// 😎 Hey smart boy just use sqaure brackets for this.

// [myName_] : 'something'.

let my_Name = 'vinod';
const my_Bio = {
	[my_Name]: 'hello how are you?',
	26: 'is my age',
};

console.log(my_Bio);

// 15.2.2 if key and value both are same , then no need to write em in pair just write the name.

let myName1 = 'vinod thapa';
let myAge1 = 26;

const myBio1 = {
	myName1: myName1,
	myAge1: myAge1,
};

console.log(myBio1);

// In the above ⬆️ Case when key and value pair names are same then , just write then name and it will automatically figure out what is key and what is value .

// like this 👇

const myBio2 = { myName1, myAge1 };

console.log(myBio2);

// ☝️ See the result 💯

// 15.3 Spread Operator
const colors = ['red', 'green', 'blue', 'white'];
const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];
// 1st we took a colors array
// 2nd We needed to make another array containing the same elements as in colors operator but also adding more elements.
// 🙏 Do not repeat the same thing , we already have an array with all the data we just needed to get its data and put it into another big array.
// 🔔 We can do this with the help of Spread Operator(...).

const myfavColors = [...colors, 'yellow', 'black', 'green'];
// ☝️ In this demonstration we see that we can add (...) three dots with the array name to get its data and add it to another array.
console.log(myfavColors);

// ==================(16) ECMA Script 2016 (ES7)====================
// 16.1 inclueds() method.
console.log(colors.includes('red', 'green'));

// 16.2 exponintian ** operator
console.log(3 ** 2);

// ==================(17) ECMA Script 2017 (ES8)=====================
// 1. String.padding.
// 2. Object.values().
// 3. Object.entries().

// 17.1 To add padding in a string use String.padding.
const message_ = 'vinod';
console.log(`'${message_.padEnd(10)}'`);

// 17.2 Object.values().
const person_ = { name: 'Fred', age: '17' };
console.log(Object.values(person_));
console.log(Object.entries(person_));
// 🔔 Notice theat the returned value is in arrays, so Object.values converts objects in arrays.
const arr_ = [
	['zone1', 'zone2'],
	['zone3', 'zone4'],
	['zone5', 'zone6'],
	['zone7', ['zone_7', 'zone_8']],
];

console.log(arr_);
console.log(arr_.flat());
console.log(arr_.flat(2));
// ☝️ you can give level parameters to flat to flatten the two dimensional or three dimensional arrays.
// 🔔 you can add infinity to flatten all levels.

// Function Currying
const _sum = (_num1) => (_num2) => (_num3) => console.log(_num1 + _num2 + _num3);
_sum(2)(4)(6);
