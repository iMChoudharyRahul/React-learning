Create a Tictactoe game 
Step 1--> create three row div 's and each contain three child squere divs.
step-2 --> all 9 boxes set values passing props--> useState(Array(9).fill(null))
 [0, 1, 2]
 [3, 4, 5]
 [6, 7, 8]
 step 2--> set all square with x  or o.
 step 3--> create a reset button
 step 4 --> handle turns --> onClick function check which person is turns now  if it's X then set state to X else O
 step 5 --> write wining Logic that return  true if any of the player wins else false.
 logic: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

<!-- ------------------------------------------------->
 x x x null null null
 x x x null null null
 x x x null null nul
 [null, null, null ......9 items] --> useState(Array(9).fill(null))
 click index 4  --> array [4] = x || 0 --> true --> x  false --> 0
//Check  for win condition --> 

 [0, 1, 2] ---> [x, x, x] ==> [0, 1, 2] 
 [3, 4, 5] ---> [0, 0, 0]--> [3, 4, 5]  ===> row
 [6, 7, 8] ---> [x, x, x]--> [6, 7, 8]
  |  |  |  [0, 4 8] ==> digonal
           [2, 4, 6]

  |  |  |
  [0, 3, 6]
  [1, 4, 7] ==> coloumn
  [2, 5, 8]