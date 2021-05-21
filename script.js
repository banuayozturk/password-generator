// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters for User Choice Declared

 var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'y', 'z' ];
 var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Y', 'Z' ];
 var specialChar = [ '!' , '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '-', '|', '{', '}','//']  
 //!@#$%^&*()_+~`|}{[]\:;?><,./-=
 var numbers = [ '0','1', '2','3', '4', '5', '6', '7', '8','9']


// Function Codes for Randomly Choosing Characters from Arrays
function getRandomLower(){
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpper(){
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomSpecialCharacter(){
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function getRandomNumber(){
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// Functions above are Called by Object Method
const randomFunc = {
  isLowerCase: getRandomLower,
  isUpperCase: getRandomUpper,
  isNumbers: getRandomNumber,
  isSpecialChar: getRandomSpecialCharacter
}


function generatePassword(){
  

  //User asked for Character Lenght and Character Types
  let passwordLength = prompt('How many characters you want?');
    //User Lenght Choice Validated
  if(passwordLength < 8 || passwordLength > 128){
        alert("warning!");
        return generatePassword();
    }
  let isNumbers = confirm('Do you want numbers?');

  let isUpperCase = confirm('Do you want uppercase letters?');

  let isLowerCase = confirm('Do you want lowercase letters?');

  let isSpecialChar = confirm('Do you want special characters?');
  
  const charNum = isUpperCase + isLowerCase + isNumbers + isSpecialChar;


  // User Character Choices Calculated
  console.log(charNum);
  const charArr = [{isNumbers}, {isUpperCase}, {isLowerCase}, {isSpecialChar}].filter(
    item => Object.values(item)[0]
    );

    console.log(charArr);

    let generatedPassword = "";

    
   //Password Character Type Validated
    if(charNum === 0){
      alert("please select miminim 1 character type");
      generatePassword();
    }

    for(let i=0; i<passwordLength; i+=charNum) {
      charArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
        });
      }
      
      
      const finalPassword = generatedPassword.slice(0,passwordLength);
      
      
      return finalPassword;

}

  
// Code for Printing Password
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
   }
 // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
    