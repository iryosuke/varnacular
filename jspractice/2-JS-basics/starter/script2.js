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
    console.log(bills * 1.2);
} else if (bills > 50 && bills <= 200) {
    console.log(bills * 1.15);
} else if (bills > 200) {
    console.log(bills * 1.1);
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
    tipcalculator(bills[2])
];

var finalValues = [bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];


console.log(tips);


function tipCaliculator(bill) {
    var tip;
    if (bill < 50) {
        tip = 0.2;
    } else if (bill > 50 && bill < 200) {
        tip = 0.15;
    } else if (bills > 200) {
        tip = 0.12;
    }

    return tip * bill;
}


var bills = [124, 48, 268];
var allTips = [tipCaliculator(bills[0]),
    tipCaliculator(bills[1]),
    tipCaliculator(bills[2])
];

const totalValue = [bills[0] + allTips[0],
    bills[1] + allTips[1],
    bills[2] + allTips[2]
];

console.log(allTips);


//objects and properties 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane', 'Mark', 'bob', 'emily'],
    job: 'teacher',
    isMarried: 'false'
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
    family: ['Jane', 'Mark', 'bob', 'emily'],
    job: 'teacher',
    isMarried: 'false',
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
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var Mark = {
    fullName: "Mark Stephan",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(john.calcBMI(), Mark.calcBMI());

if (john.calcBMI() > Mark.calcBMI()) {
    console.log(john.fullName, john.calcBMI())
} else {
    console.log(Mark.fullName, Mark.calcBMI());
};

// loops and iteration 

for (var i = 0; i < 1000; i += 13) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', 'false'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
};

var i = 0;
while (i < john.length) {
    console.log(john[1]);
    i++;
}

//continue and break statesments

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
};

for (var i = 0; i < 1000; i += 13) {
    if (typeof i === 11 * i) continue;
    console.log(i);
}

var fibonacci_series = function(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci_series(10));

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}


var bills = [124, 48, 268, 180, 42];
for (var i = 0; i < bills.length; i++) {};

function tipCalculator2() {
    var percentage;
    if (bills[i] < 50) {
        percentage = 0.2;
    } else if (bills[i] > 50 && bill <= 200) {
        percentage = 0.15;
    } else if (bills[i] > 200) {
        percentage = 0.1;
    }
    return percentage * bills[i];
};

console.log(tipCalculator2());

function toCelsius(f){
    return 3 * (f-30);
}

console.log(toCelsius(60));

//loop appllication 
var john = {
    fullName : 'John Smith',
    bills : [124, 48, 268, 180, 42], 
    calTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            }else if (bill >= 50 && bill < 200) {
                percentage = .15;
            }else {
                percentage = -1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

john.calTips();
console.log(john);


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

//do the calculation 

john.average = calcAverage(john.tips);
console.log(john);



var john = {
    bills : [124, 48, 268, 180, 42],
    tipCalculate : function() {
        this.tips = [];
        this.totalValue = [];

        for (var i = 0; i < bills.length; i++)
        {
            var bill = this.bills[i];
            var percentage;

            if (bill > 50) {
            percentage = .2;
            } else if (bill > 50 && bill <200) {
            percentage = .15;
            } else {
            percentage = .1;
            }

            this.tips = bill * percentage;
            this.totalValue = bill + bill * percentage;
        }
    }
}
john.tipCalculate();
console.log(john);

async function callApi(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}

callApi();

const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
async function listUsers() {
    // データのやり取り
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    // DOM manipulation
    for(var i = 0; i < users.length; i++) {
        const user = users[i];
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    }

    // users.forEach(function(user){
    //     const list = document.createElement("li");
    //     list.innerText = user.name;
    //     lists.appendChild(list);
    // })
}

button.addEventListener("click",listUsers);

window.addEventListener("load",listUsers);