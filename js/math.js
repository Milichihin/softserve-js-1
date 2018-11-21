const greetings = "Let's study!";
alert(greetings);

const coefficientA = parseInt(prompt("ax2 + bx + c = 0\nTo solve the quadratic equation above please choose an any number for the coefficient \"a\" and insert this one into the cell below"));
const coefficientB = parseInt(prompt("ax2 + bx + c = 0\nTo solve the quadratic equation above please choose an any number for the coefficient \"b\" and insert this one into the cell below"));
const coefficientC = parseInt(prompt("ax2 + bx + c = 0\nTo solve the quadratic equation above please choose an any number for the coefficient \"c\" and insert this one into the cell below"));


if (Number.isNaN(coefficientA)) {
    alert('Incorrect data when you choose the number for \"A\" coefficient')
}
if (Number.isNaN(coefficientB)) {
    alert('Incorrect data when you choose the number for \"B\" coefficient')
}
if (Number.isNaN(coefficientC)) {
    alert('Incorrect data when you choose the number for \"C\" coefficient')
}

const discriminant = solveDisc (coefficientA, coefficientB, coefficientC);
alert ("solve of the discriminant = " + discriminant)
function solveDisc (a, b, c) {
    return b*b-4*a*c;
}

if (discriminant < 0) {
    alert ("There are no real roots.")
} else if (discriminant === 0) {
    alert ("There is one real root.")
} else if (discriminant > 0) {
    alert ("There are two real roots.")
}

const x1 = realRoot1(coefficientA, coefficientB, discriminant);
alert("solve of the first root X1 = " + x1)
function realRoot1(a, b, d) {
    return (-b + Math.sqrt(d)) / 2*a;
}

const x2 = realRoot2(coefficientA, coefficientB, discriminant);
alert("solve of the second root X2 = " + x2)
function realRoot2(a, b, d) {
    return (-b - Math.sqrt(d)) / 2*a;
}
