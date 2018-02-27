for (var number = "#"; number < "#######"; number += "#") // I just replicated the given code for a table of 2 and changed it. 
  console.log(number);

//2nd exercise:

for (var number = 0; number <= 100; number++) 
  { var result = "";
  if (number % 3 == 0) result = "Fizz";
  if (number % 5 == 0) result = "Buzz";
  if (number % 3 == 0 && number % 5 == 0) result = "FizzBuzz"; 

console.log(result || number);}

//While revising I solved it myself. Guess I have learned a bit of Javascript.  

for (var number = 0; number < 8; number++) 
  { var result = "";
  if (number % 2 !== 0) result = "# # # #";
  if (number % 2 == 0) result =  " # # # #";
console.log(result);}
