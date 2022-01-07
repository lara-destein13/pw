// var passwordLength
// var characterTypes = [ "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
// var finalPassword 


// function generatePassword() {
//   window.alert("Please enter your password criteria");

// }

// generatePassword();


window.alert("Please enter your password criteria");

function getLength() {
  var length = window.prompt("Please enter the number of characters you would like for your password. (must be between 8 and 128)");
  console.log("You chose " + length + " characters for your password.");
}

getLength();

function checkLength() {
  if (length < 8 || length > 128) 
  console.log("number of characters incorrect, please try again")

  // if (length) > 8 && length < 128)
}

checkLength();


// var getLength = function() {
//   window.prompt("Please enter the number of characters you would like for your password. (must be between 8 and 128)");
// };

// console.log("You chose " + getLength + " characters for your password.");





