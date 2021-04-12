// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = prompt(`Enter your age`);
switch(true){
  case age<=55 && age>=12:
    alert(`You can participate in the marathon`);
    break;
  case age<=11 && age>=4:
    alert(`You are too young to participate in the marathon`);
    break;
  case age<4:
    alert(`Hey Kiddo! Can You Walk ?`);
    break;
  default:
    alert(`You are too old to participate in the marthon`);
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let n = Number(prompt(`Enter a positive integer`));
let letter = "e";
let result = "";
for(i=0;i<n;i++){
  result = result + letter;
}
alert(`H${result}llo`);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let num = Number(prompt(`Enter a value`));
let sum = 0;
for(i=0;i<=num;i++){
  sum = sum + i;
}
console.log(sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let userNumber = +prompt(`Enter a number`);
switch(userNumber){
  case userNumber = 1:
    alert(`ONE`);
    break;
  case userNumber = 2:
    alert(`TWO`);
    break;
  case userNumber = 3:
    alert(`THREE`);
    break;
  case userNumber = 4:
    alert(`FOUR`);
    break;
  case userNumber = 5:
    alert(`FIVE`);
    break;
  case userNumber = 6:
    alert(`SIX`);
    break;
  case userNumber = 7:
    alert(`SEVEN`);
    break;
  case userNumber = 8:
    alert(`EIGHT`);
    break;
  case userNumber = 9:
    alert(`NINE`);
    break;
  default:
    alert(`PLEASE TRY AGAIN`);
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let userMarks = Number(prompt(`Enter number of marks between 0-100`));
switch(true){
  case userMarks > 90:
    alert(`Your Grade is AA`);
    break;
  case userMarks > 80 && userMarks <=90:
    alert(`Your Grade is AB`);
    break;
  case userMarks > 70 && userMarks <=80:
    alert(`Your Grade is BB`);
    break;
  case userMarks > 60 && userMarks <=70:
    alert(`Your Grade is BC`);
    break;
  case userMarks > 50 && userMarks <=60:
    alert(`Your Grade is CC`);
    break;
  case userMarks > 40 && userMarks <=50:
    alert(`Your Grade is CD`);
    break;
  case userMarks > 30 && userMarks <=40:
    alert(`Your Grade is DD`);
    break;
  case userMarks <= 30:
    alert(`Your Grade is FF`);
    break;
  default:
    alert(`Please enter marks within the given range`);
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let userFirstInteger = +prompt(`Enter first integer`), userSecondInteger = +prompt(`Enter second integer`);
if(userFirstInteger > userSecondInteger){
  alert(`The larger number is ${userFirstInteger}`);
}else{
  alert(`The larger number is ${userSecondInteger}`);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let userFirstNumber = +prompt(`Enter first number`), userSecondNumber = +prompt(`Enter second number`), userThirdNumber = +prompt(`Enter third number`);
let resultNumber = userFirstNumber * userSecondNumber * userThirdNumber;
console.log(resultNumber);
if(resultNumber > 0){
  alert(`The resultant product value's sign is "+" `);
}else{
  alert(`The resultant product value's sign is "-" `);
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let calcNumOne = +prompt(`Enter first Number to calculate`), calcNumTwo = +prompt(`Enter second Number to calculate`);
let calcOperation = prompt(`Enter the type of Operation you need - "ADD"/"SUB"/"MULT"/"DIV"`);
if(calcOperation == "ADD"){
  let calcResult = calcNumOne + calcNumTwo;
  alert(calcResult);
}else if(calcOperation == "SUB"){
  if(calcNumOne > calcNumTwo){
    let calcResult = calcNumOne - calcNumTwo;
    alert(calcResult);
  }else{
    alert(`Number Two is larger then Number one`);
  } 
}else if(calcOperation == "MULT"){
  let calcResult = calcNumOne * calcNumTwo;
  alert(calcResult);
}else if(calcOperation == "DIV"){
  if(calcNumOne > calcNumTwo){
    let calcResult = calcNumOne / calcNumTwo;
    alert(calcResult);
  }else{
    alert(`Number Two is larger then Number one`);
  }
}else{
  alert(`Enter a valid choice`);
}