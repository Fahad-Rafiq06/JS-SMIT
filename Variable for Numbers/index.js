// Variables for Numbers

var age = 19

alert("I am " + age +  " years old");

var clicks = 23;

alert("you have visited to this website " + clicks + " times");

var birthYear = 2003;

document.write("My Birth year is" + birthYear + "</br>" + "Data type of my declared variable is number " + "</br>");

var client = prompt("your name");

var product = prompt("Product title");

var quantity = prompt("Quantity of the product in digits");

document.write( client + " ordered " + quantity + " " + product + " from SMIT Store");

// // Legal and Illegal Variables

var randomVars , secondVar , thirdVar;

// // Legal Variables

// var camelCase , dinner2Go , i_AM_HUNGRY , hello1 , fahad;

// // Illegal Varaibles

// var 1fahad , *fahad , fahad^ , (fahad , %fahad ;

    // MAth Expressions

     // Operators

     var x = 10;

     var y = 12;

     var z = x + y;

     var g = x - y;

     var h = x * y;

     var i = x / y;

     alert("sum of 10 + 12 is " + z);

     alert("subtraction of 10 - 12 is " + g)

     alert("Multiplication of 10 * 12 is " + h)

     alert("Division of 10 / 12 is " + i);

     var value = 2;

     document.write("Initial value " + value);

     value++

     document.write("<br>" + "value after increemnt " + value);

     value = value + 5;

     document.write("<br>" + "after addition of 5 is " + value);


     var ticket = 500;

     alert("total cost to buy 5 tickets to a movie is " + ticket * 5);

    //  Table Multiplications

    var table = prompt("type any number for table", "5");

    alert(table + "x 1 = " + table + "\n" + table + " x 2 = " + table * 2 + "\n" + table + " x 3 = " + table * 3 + "\n" + table + " x 4 = " + table * 4 + "\n" + table + " x 5 = " + table * 5
    + "\n" + table + " x 6 = " + table * 6 + "\n" + table + " x 7 = " + table * 7 + "\n" + table + " x 8 = " + table * 8 + "\n" + table + " x 9 = " + table * 9 + "\n" + table + " x 10 = " + table * 10
    );

     var totalMarks = prompt("Total Marks");

     var obtainedMarks = prompt("Obtained Marks");

     var percentage = obtainedMarks * 100 / totalMarks;

     alert("your Percentage " + percentage + "%")

    var item_1 = 500;

    var item_2 = 400;

    quantity_1 = 5;

    quantity_2 = 10;

    shipping_charges = 200;

    total = (item_1 * quantity_1) + (item_2 * quantity_2) + shipping_charges;

    alert("Item 1 is of " + item_1 + "\n" + "Item 2 is of " + item_2 + "\n" + "quantiy of item 1 is " + quantity_1 + 
    "\n" + "quantity if Item 2 is " + quantity_2 + "\n" + "and Shipping charges are " + shipping_charges + "\n" + "total cost is " + total)