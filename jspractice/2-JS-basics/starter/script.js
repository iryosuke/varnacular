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
var age = 28;
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
console.log(firstName + ' ' + lastName);

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
    console.log(firstName + 'is married');
} else {
    console.log(firstName + 'will hopefully marry soon :)');
}

var isMarried = true;
if (civilStatus === 'married') {
    console.log(firstName + 'is married');
} else {
    console.log(firstName + 'will hopefully marry soon :)');
}

// Boolean logic

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + 'is a boy')
} else if (age >= 13 && age < 20) {
    console.log(firstName + 'is a teenager')
} else if (age >= 20 && age < 30) {
    console.log(firstName + 'is a young man')
} else {
    console.log(firstName + ' is a man')
}

// the ternary operator 

var firstName = 'John';
var age = 16;

// TRENARY OPERATOR
age >= 18 ? console.log(firstName + 'drink beer') :
    console.log(firstName + 'drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// console.log(drink);

//SWITH statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to Code.');
        break;
    case 'driver':
        console.log(firstName + ' drives uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' makes a beatuful website');
        break;
    default:
        console.log(firstName + ' does somethng else');
}

// Truthy and falsy values 

// falsy values: undefined, null, 0, '', NaN

// truthy values: NOT falsy values 

var height;
height = 0;

if (height || height === 0){
    console.log('variable is defined');
} else {
    console.log('variable has not been defined')
};

 
var johnTeam1 = 89;
var johnTeam2 = 120; 
var johnTeam3 = 103;

// solution 1
var johnAverage = (johnTeam1 + johnTeam2 + johnTeam3) / 3;
console.log('John team score is' + johnAverage );

var mikeTeam1 = 116;
var mikeTeam2 = 94;
var mikeTeam3 = 123;

var mikeAverage = (mikeTeam1 + mikeTeam2 + mikeTeam3) / 3;
console.log('Mike team score is' + mikeAverage );



if (johnAverage > mikeAverage){
    console.log('John wins with' + johnAverage)
} else{
    console.log('Mike wins with' + mikeAverage )
}; 

// solution2 way shorter
var johnAverage = (89 + 120 + 103);
var mikeAverage = (116 + 94 + 123);
var marryAverage = (97 + 134 + 105);
console.log(johnAverage, mikeAverage);

if (johnAverage > mikeAverage && johnAverage > marryAverage){
    console.log('john wins');
} else if (mikeAverage > johnAverage && mikeAverage > marryAverage){
    console.log('mike wins');
} else if (marryAverage > johnAverage && marryAverage > mikeAverage){
    console.log('marry wins');
} else {
    console.log('there is a draw');
}



// if (johnAverage > mikeAverage){
//     console.log('John wins with' + johnAverage);
// }else if (mikeAverage > johnAverage){
//     console.log('Mike wins with' + johnAverage);
// } else {
//     console.log('There is a draw');
// }


// var maryTeam1 = 116;
// var maryTeam2 = 94;
// var maryTeam3 = 123;

// var maryTeam = (maryTeam1 + maryTeam2 + maryTeam3) / 3;
// console.log('her average score is' + maryTeam);

// if (johnAverage > mikeAverage){
//     console.log('John wins with' + johnAverage)
// } else{
//     console.log('Mike wins with' + mikeAverage )
// }; 

// Function
function calculateAge(birthYear) {
    return (2018 - birthYear);
}
 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJane, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;

     if (retirement > 0){
         console.log(firstName + 'retires in ' + retirement + 'years.');
     } else {
         console.log(firstName + 'already retired');
     }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1948, 'Mike');
 yearsUntilRetirement(1969, 'jane');


//  Function Statement and Expressions
// Function declaration
//function whatDoYouDo(job, firstName){}


//Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + 'teaches kids how to code';
        case 'driver':
            return firstName + 'teaches kids how to drive';
        case 'designer':
            return firstName + 'teaches kids how to design';
        default: 
        return firstName + 'shit';   
    }
}

 console.log(whatDoYouDo('teacher', 'John'));

//  arrays

 var names = ['john, 'Mark', 'Jane']