/*****
 * varibale and data type
 */

var firstName = 'John';
console.log(firstName);

var LastName = 'Smith';
var age = '28';

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


var _3years = 3;
var johnMark = 'joh and johnMark';


/* mutation and type coercion */

var firstName = 'John';
var age =28;
console.log(firstName + ' ' + age);

var job, isMarried; 
job = 'teacher';
isMarried = false; 

console.log(firstName + ' is a' + age + ' year old ' + job + 'is he married' + isMarried); 


// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a' + age + ' year old ' + job + 'is he married' + isMarried); 

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName) ;

// Basic operators

var year, yearJohn, yearMark;
var now = 2020;
ageJohn = 28;
ageMark = 33;
// Math operator
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operators

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is oder than John');

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// table precedence
var isFullAge = now - yearJohn >= fullAge; 
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assigment
var x, y;
x = y = (3 + 5) * 4 - 6; 
 console.log(x, y);

//  more operator 
x *= 2;
console.log(x);

x = x + 1;
x++;

// Mark and John 

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92; 
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('BMI mark' + BMIMark);
console.log('BMI John' + BMIJohn);


var markHeigher = BMIMark > BMIJohn;
console.log('IS Mark BMI higher than John?' + markHeigher);

// If / else Statement

var firstName = 'John';
var civilStatus = 'married';
if (civilStatus === 'married') {
    console.log( firstName + 'is married');
} else {
    console.log(firstName + 'will hopefully marry soon :)');
}

var isMarried = true;
if (civilStatus === 'married') {
    console.log( firstName + 'is married');
} else {
    console.log(firstName + 'will hopefully marry soon :)');
}
