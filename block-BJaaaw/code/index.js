// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = prompt("Enter a number");
if(num%2 == 0){
  console.log("Number is even");
} else{
  console.log("Number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
if(num1 > num2){
  alert("First number is the max value");
}else {
  alert("Second number is the max value");
}

// 3. Convert the above code using`?` terniary operator

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let maxValue = num1 > num2 ? alert("First number is the max value") : alert("Second number is the max value"); 

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("Enter your house name");
if(houseName == "stark"){
  console.log("Winter is coming");
}else if(houseName == "lannister"){
  console.log("A lannister always pays his debt");
}else{
  console.log("All men must die");
}

// 5. Convert the above code using`?` terniary operator

let houseName = prompt("Enter your house name");
(houseName == "stark") ? alert("Winter is coming") : (houseName == "lannister") ? alert("A lannister always pays his debt") : alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthNumber = Number(prompt("Enter any month's number"));
switch(monthNumber){
  case monthNumber = 1:
    alert("The number of days in this month is 31");
    break;
  case monthNumber = 3:
    alert("The number of days in this month is 31");
    break;
  case monthNumber = 5:
    alert("The number of days in this month is 31");
    break;
  case monthNumber = 7:
    alert("The number of days in this month is 31");
    break;
  case monthNumber = 8:
    alert("The number of days in this month is 31");
    break;
  case monthNumber = 10:
    alert("The number of days in this month is 31");
    break;
  case monthNumber = 12:
    alert("The number of days in this month is 31");
    break;    
  case monthNumber = 2:
    alert("The number of days in this month is 28");
    break;
  default:
    alert("The number of days in the month is 30");
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt("Enter your salary"));
if(salary<=20000){
  inHand = salary - (10/100 * salary);
  alert(inHand);  
}else if(salary>=20000 & salary<=40000){
  inHand = salary - (20/100 * salary);
  alert(inHand);
}else if(salary > 50000){
  inHand = salary - (30/100 * salary);
  alert(inHand);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("Enter your marks"));
if(marks > 100){
  alert("Marks can't be greater than 100");  
}else if(marks > 80 && marks <= 100){
  alert("Grade A");
}else if(marks > 50 && marks <= 80){
  alert("Grade B");
}else if(marks > 30 && marks <= 50){
  alert("Grade C");
}else if(marks >= 0 && marks <= 30){
  alert("Grade D");
}


// let marks = Number(prompt("Enter your marks"));
// switch(marks){
//   case marks > 100:
//     alert("Marks can't be greater than 100 ");
//     break;
//   case marks > 80 && marks <= 100:
//     alert("Grade A");
//     break;
//   case marks > 50 && marks <= 80:
//     alert("Grade B");
//     break;
//   case marks > 30 && marks <= 50:
//     alert("Grade C");
//     break;
//   case marks >= 0 && marks <= 30:
//     alert("Grade D");
//     break;
// }



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weatherCOndition = String(prompt("What is the weather like outside?"));
if(weatherCOndition == "sunny"){
  alert("Wear a T-shirt");
}else if(weatherCOndition == "rainy"){
  alert("Don't forget to take your raincoat");
}else if(weatherCOndition == "hot"){
  alert("Don't forget to take your raincoat");
}else if(weatherCOndition == "freezing"){
  alert("Get your sweeter on");
}else{
  alert("Not a valid input");
}
