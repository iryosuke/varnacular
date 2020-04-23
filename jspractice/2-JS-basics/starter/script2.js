const todos = [{
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'take out trash',
        isCompleted: false
    },

];

const todoJason = JSON.stringify(todos);
console.log(todos)

//for
// for (let i = 0; i < 10; i++) {
//     console.log('For Loop Number': $ { i }, );
// }

var john = ['John', 'smith', 1990, 'designer'];
const isDesigner = john.indexOf('designer') === -1 ? 'john is NOT a designer' : 'John Is a designer';

console.log(isDesigner)


var bills = [124, 48, 268];

    if (bills <= 50) {
        console.log (bills * 1.2);
    } else if (bills > 50 && bills <= 200) {
        console.log (bills * 1.15);
    } else if (bills > 200) {
        console.log (bills * 1.1);
    }

function tipcalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }

    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipcalculator(bills[0]),
            tipcalculator(bills[1]),
            tipcalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];


console.log(tips);


function tipCaliculator(bill){
    var tip;
    if (bill < 50 ) {
        tip = 0.2;
    } else if (bill > 50 && bill < 200) {
        tip = 0.15;
    }else if (bills > 200) {
        tip = 0.12;
    }

    return tip * bill;
}


var bills = [124, 48, 268];
var allTips = [tipCaliculator(bills[0]),
                tipCaliculator(bills[1]),
                tipCaliculator(bills[2])];

const totalValue = [bills[0] + allTips[0],
                    bills[1] + allTips[1],
                    bills[2] + allTips[2]];

console.log(allTips);


//objects and properties 

var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: '1990',
    family:['Jane', 'Mark', 'bob', 'emily'],
    job:'teacher',
    isMarried:'false'
};

console.log(john);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.birthYear = 1969;
jane['lastname'] = 'Smith';
console.log(jane);

var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: '1990',
    family:['Jane', 'Mark', 'bob', 'emily'],
    job:'teacher',
    isMarried:'false',
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


var john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95, 
    calcBMI: function(){
        this.bmi = this.mass / (this.mass * this.height); 
    }
};

var Mark = {
    fullName: "Mark Stephan",
    mass: 78,
    height: 1.69, 
    BMI: function(){
        this.mass / this.height^2; 
    }
};

john.calcBMI();
console.log(john);





