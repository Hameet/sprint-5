for (var number = "#"; number < "#######"; number += "#") // I just replicated the given code for a table of 2 and changed it. 
  console.log(number);

//2nd exercise:

for (var number = 0; number <= 100; number++) 
  { var result = "";
  if (number % 3 == 0) result = "Fizz";
  if (number % 5 == 0) result = "Buzz";
  if (number % 3 == 0 || number % 5 == 0) result = "FizzBuzz"; 

console.log(result || number);}

//chess board Couldn't figure this one out so I had to look the solution up. 
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
