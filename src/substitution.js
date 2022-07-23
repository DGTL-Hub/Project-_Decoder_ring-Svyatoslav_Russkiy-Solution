   /*BJ BROKEN CODE JB
   BY.YYYY#@#YYYY.YB
   5PYJJ! B&B !JJYP5
       77 B&B 77
       BROKEN COD 
       PG:7?7:GP
       P5YJJJY5P*/
/*     const myAlpha = "abcdefghijklmnopqrstuvwxyz";
    const myKey = "nopqrstuvwxyzabcdefghijklm"
    const myAlphabetArr = [...myAlphabetStr];
    let result = [];
      if (!alphabet || alphabet.length !== 26) return false;
      if ((/[a-z]/).test(char)) true;
      // spreading parameter alphabet into an array
      const codedAlphabetArr = [...alphabet];
      // for storing my result for returning at the end
       myAlpha.find()
 */
/* 
        // check for unique letter and get the length
        const uniqueArr = codedAlphabetArr.filter((char, idx, arr) => arr.indexOf(char) == idx).length;
        // if uniqueArr doesnt contain 26 return false
        if (uniqueArr !== 26) return false;

 */

//----------------------------------------------------------------//
/* const substitutionModule = (function
  () {
  const myAlpha = "abcdefghijklmnopqrstuvwxyz";
  const myKey = "nopqrstuvwxyzabcdefghijklm";
  const myAlphabetArr = [...myAlpha];
  const codedAlphabetArr = [...myKey];
  let result = [];
  function substitution(input, alphabet, encode = true) {
    //handling errors.
    if (!alphabet || alphabet.length !== 26) return false;
    if ((isCharacterALetter) => alphabet(/[a-z]/).test(isCharacterALetter)) return false;
    //handling errors.
    let encodedMessage = input(encode && alphabet(/[a-z]/));
    encode should be set to false if im going to decode the message.
    let decododedMessage = input(!encode && alphabet(/[a-z]/));
    if (encode === true && isCharacterALetter)  return  ; 
  let result.join("")
  }
  return { substitution, };
})
  (); */
/* GGYTHINK? ?YYYYYB
   BJ BROKEN CODE JB
   BY.YYYY#@#YYYY.YB
   5PYJJ! B&B !JJYP5
       77 B&B 77
       PP B@B PP
       PG:7?7:GP
       P5YJJJY5P*/

//trying to refactor code below will come back...
//return output ? encode(output) : !encode(output);

//----------------------------------//
//This code is taking the input and mapping it to a standard alphabet.
const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //handling edge case.
    //This code is checking to see if the alphabet variable has 26 characters and that it doesn't include "abc".
//If this condition is met, then we return false.Otherwise, we continue with our code.
    if (!alphabet || alphabet.length != 26 || alphabet.includes("abc")) {
      return false;
    }
    //handling data map .
/*     This code is taking the input and converting it to lowercase, then splitting it into an array of letters.
Then we are mapping over each letter in the array and finding its index in our standard alphabet string.
      We're returning that number as a string so we can concatenate them together later on.
    */
      const standard = "abcdefghijklmnopqrstuvwxyz"; 
    let output = "";
    const encrypt = input.toLowerCase().split("").map((letter) => standard.indexOf(letter));
    const decrypt = input.toLowerCase().split("").map((letter) => alphabet.indexOf(letter));
    //encode loop
/* This code is taking the input string and encrypting it using a simple substitution cipher.
The code block takes in an array of numbers, which are used to index into the alphabet array. 
If there is no number at that index, then we add a space to our output string.If there is a number at that index,
      then we take the letter from the alphabet array and append it to our output string. */
    if (encode) {
      for (let index in encrypt) {
        if (encrypt[index] === -1) {
          output += " ";
        } else {
          output += alphabet[encrypt[index]];
        }
      }
      return output
    }  
    //decode loop.  
/*     This code is decoding the encrypted message.It's doing this by using a for loop to iterate through each character in the string and checking if it matches any of the characters in our standard alphabet array. If it does, then we add that index number from our standard alphabet array into an output variable which will be returned at the end of this function.
 */
    if (!encode) {
      for (const i in decrypt) {
        if (decrypt[i] === -1) {
          output += " ";
        } else {
          output += standard[decrypt[i]];
        }
      }
      return output;
    } 
  
  
  
  }
  return {substitution};
})();

module.exports = { substitution: substitutionModule.substitution };




