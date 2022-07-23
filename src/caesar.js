
/* 
  This code is creating a function called caesarModule.Then, it creates an object within the function and assigns it to the variable caesarModule.The code then returns this new object with two methods inside of it.One method is named caesar which takes in three parameters(input, shift, encode).This method will return false if any of these conditions are not met. */
//----------------------------------------------------------------//

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //guard clause.
    if (!input || shift === 0 || shift > 25 || shift < -25) return false;
    if (!encode) shift *= -1;
    //taking the letter and shifting it by the shift value.
    // The offset is added to make sure that if a lowercase letter is shifted, it will still be in range of az.
    const letterShift = (letter, shift, offset) => {
      return String.fromCharCode(
        ((letter.charCodeAt() - offset + shift + 26) % 26) + offset
      );
    }
    //   This code is taking the input and converting it to lowercase. Then, it's replacing each letter with a new letter shifted by the shift value.
    return input.toLowerCase()
      .replace(/[a-z]/g, (char) => letterShift(char, shift, 97))
  }
  //----------------------------------------------------------------//
  return { caesar };
})
  ();
module.exports = { caesar: caesarModule.caesar };