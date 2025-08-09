function question1() {
    var num1 = prompt("Enter first number");
    var num2 = prompt("Enter second number");
    var total = parseInt(num1) + parseInt(num2);
    console.log(total);
}
document.getElementById("q1").addEventListener("click", question1);

function question2() {
    var first = prompt("Enter first number");
    var second = prompt("Enter second number");
    var third = prompt("Enter third number");
    var total = parseInt(first) + parseInt(second) + parseInt(third);
    console.log(total);
}
document.getElementById("q2").addEventListener("click", question2);

function question3() {
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = firstName + lastName;
    alert(fullName);
}
document.getElementById("q3").addEventListener("click", question3);

function question4() {
    var numb1 = prompt("enter first number");
    var numb2 = prompt("enter second number");

    var Sum = parseFloat(numb1) + parseFloat(numb2);
    var Difference = parseFloat(numb1) - parseFloat(numb2);
    var Product = parseFloat(numb1) * parseFloat(numb2);
    var Quotient = parseFloat(numb1) / parseFloat(numb2);

    console.log("Sum:" + Sum);
    console.log("Difference:" + Difference);
    console.log("Product:" + Product);
    console.log("Quotient:" + Quotient);
}
document.getElementById("q4").addEventListener("click", question4);

function question5() {
    var userName = prompt("Enter Your Name");
    var num1 = prompt("Enter First Number ");
    var num2 = prompt("Enter Second Number");
    var total = parseFloat(num1) + parseFloat(num2);
    var message = "Hello" + userName + "!";
    var output = (message) + "the sum of" + (num1) + "and" + (num2) + "is" + (total) + ".";
    console.log(output);
}
document.getElementById("q5").addEventListener("click", question5);

function question6() {
    var num1 = prompt("Enter first number");
    var num2 = prompt("Enter second number");
    var sum = parseInt(num1) + parseInt(num2);
    console.log("The sum is" + sum);
}
document.getElementById("q6").addEventListener("click", question6);

function question7() {
    var number1 = prompt("Enter 1st Number");
    var number2 = prompt("Enter 2nd Number");
    var add = parseInt(number1) + parseInt(number2);
    if (add) {
        console.log("The sum is" + add)
    }
    else {
        console.log("Error! please enter only numbers")
    }
}
document.getElementById("q7").addEventListener("click", question7);

function question8() {
    var num = prompt("Enter any number");
    var add = parseInt(num) + 10;
    console.log(add);
}
document.getElementById("q8").addEventListener("click", question8);

function question9() {
    var integer1 = prompt("enter first number ");
    var integer2 = prompt("enter second number");
    var sum = parseInt(integer1) + parseInt(integer2);
    if (sum % 2 === 0) {
        console.log("The sum is even" + sum);
    }
    else {
        console.log("The sum is odd" + sum);
    }
}
document.getElementById("q9").addEventListener("click", question9);

function question10() {
    var int1 = prompt("Enter first number");
    var int2 = prompt("Enter second number");
    var operator = prompt("+,-,*,/")
    var integ1 = parseInt(int1);
    var integ2 = parseInt(int2);

    var result;

    if (operator === "+") {
        result = integ1 + integ2;
    }
    else if (operator === "-") {
        result = integ1 - integ2;
    }
    else if (operator === "*") {
        result = integ1 * integ2;
    }

    else if (operator === "/") {
        if (integ2 !== 0) {
            result = integ1 / integ2;
        }
        else {
            result = "Error!  0 cannat be divided by zero";
        }
    }
    else {
        result = "Invalid Operator";
    }
    console.log("Result:" + result);
}
document.getElementById("q10").addEventListener("click", question10);













