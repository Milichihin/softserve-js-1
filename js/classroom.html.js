// const - constant 
// let - variable 
// var - old variable

const greetings = 'Hello';
alert(greetings);

const userName = prompt('Enter your name');
const userGreet = 'Hello ' + userName;
alert(userGreet);

const userAge = parseInt(prompt('Enter your age'));
const newAge = addNums(userAge, 1);
alert('Next year you will be ' + newAge);

if (Number.isNaN(userAge)) {
    alert('Incorrect data');
} else if (userAge < 18) { // > <= >= !== === || &&
    alert('You are child');
} else if (userAge > 90) {
    alert('You are old');
} else {
    alert('You are adult');
}

function addNums(a, b) {
    return a + b;
}

// square root Math.sqrt()
