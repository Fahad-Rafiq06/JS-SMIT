var yourName = prompt("your name");

alert("hi," + yourName);

var table = prompt("type any number for table", "5");

    alert(table + "x 1 = " + table + "\n" + table + " x 2 = " + table * 2 + "\n" + table + " x 3 = " + table * 3 + "\n" + table + " x 4 = " + table * 4 + "\n" + table + " x 5 = " + table * 5
    + "\n" + table + " x 6 = " + table * 6 + "\n" + table + " x 7 = " + table * 7 + "\n" + table + " x 8 = " + table * 8 + "\n" + table + " x 9 = " + table * 9 + "\n" + table + " x 10 = " + table * 10
    );

var city = prompt("enter your city name");

if(city == "karachi"){
    alert("Welcome to the city of lights")
}

var gender = prompt("Type your gender");

if(gender == "male"){
    alert("Welcome sir")
}
if(gender == "female"){
    alert("Welcom Ma'am")
}


var light = prompt("is light red, yellow or green?");

if(light == "red"){
    alert("Light is red and vehicle must stop")

}

if(light == "yellow"){
    alert("light is yellow and vehicles should be ready to move")
}

if(light == "greeen"){
    alert("light is green and vehicles can move now")

}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// Output is true

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// No Output

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

// // Condition 2 is true


if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// Condition 4 is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// Value is True


