
function startPasswordGenerator() {
  var length = window.prompt("How many characters would you like in your password. (must be between 8 and 128");
  while (length >= 8 && length <= 128) {
    window.alert("length suffienct")
  }
};

startPasswordGenerator();
  





  // while (length >= 8 && length <= 128) {
  //   window.alert("You chose " + length + " characters.");

  



// function charactersToInclude() {
//   var confirmLower = window.confirm("would you like your password to include lowercase characters?");
//     if (confirmLower) {
//       window.alert("abcdefghijklmnopqrstuvwxyz");
//     } else {
//       window.alert("no lowercase");      
//   }
// }

// var createNewPassword = window.confirm("would you like to create a new password?");

// function endPasswordGenerator() {
//   if (createNewPassword === true) {
//     startPasswordGenerator();
//   } else {
//     window.alert("Thank you for using password generator");
//   }
// }

// endPasswordGenerator();
