/*Write a function that takes in a string and returns true if it's a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: "Watch Jeopardy, Alex Trebek's fun TV quiz game"
Output: true

Input: "Five hexing wizard bots jump quickly"
Output: true

Input: "JavaScript is the best"
Output: false */



var isPangram = function(string){

    var lettersOnly= string.toLowerCase().replace(/[^a-z]/g,"");
    var letterSet = new Set(lettersOnly);
    return letterSet.size === 26;
    
}

console.lo