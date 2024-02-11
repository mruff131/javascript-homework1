/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/

const stringToNumber = function(str){
    return parseInt(str)
  }

  console.log(stringToNumber("100"))
  console.log(typeof(stringToNumber("100"))) //checks type

/*
In this Kata, you will be given an array of numbers 
in which two numbers occur once and the rest occur only twice.
Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

Good luck!
*/

// Using indexOf can be used as a counter because for each match,
// the index of each index comes back, 
// then when there are no matches, -1 will return

function repeats(arr){
    let sum = 0
    
    for (let num of arr) {
        let occurences = 0;
        let index = arr.indexOf(num);

        while (index !== -1) {
          occurences++
          index = arr.indexOf(num, index + 1) // this will move the postion up by one to continue to check for other matches from the new position
        } 
        if(occurences == 1){
          sum = sum + num
        }
    }
      return sum
  };

  console.log(repeats([4,5,7,5,4,8]))


/*
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
*/
function invert(array) {
    let empty = []; 
    for (let num of array) {
        empty.push(-num)
    }
        
    return empty

}
console.log(invert([1,-2,3,-4,5]))


/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]
*/


function oddOnesOut(nums) {
    let empty = [];
    for (let num of nums) {
        let occurrences = 0;
        let index = nums.indexOf(num)
      
        while (index !== -1)  {
        occurrences++
        index = nums.indexOf(num, index + 1)
        }

      if (occurrences % 2 == 0) {
        empty.push(num)
      }
    }
    return empty
  }