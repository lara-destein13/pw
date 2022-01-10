var lengthString = window.prompt("Please enter the number of characters you would like in your password (8-128).");
var length = parseInt(lengthString);
var includeLower = window.confirm("include lower?");
var includeUpper = window.confirm("include upper?");  
var includeSpecialPrompt = window.confirm("include special?");
var specialInclude = []



console.log(length);

function startPasswordGenerator() {
  while (length >= 8 && length <= 128) {
    window.alert("You chose " + length + " characters.");
    var confirmLength = window.confirm("Are you sure you want " + length + " characters?"); 
    if (confirmLength === true) {
      charactersToInclude();
      break;
    } else {
      startPasswordGenerator();
      break;
    }
  }  
}

startPasswordGenerator();

var includeLower

var charactersToInclude = function() {

switch() {
  case "includeLower":
    var includeLower = window.confirm("Would you like your password to contain lowercase characters?");
    if (includeLower === true) {
      window.alert("You have chosen to include lowercase characters.");
      // need function to include lower letters in pw

    } else {
      window.alert("You have chosen to NOT include lowercase characters.");
    }
    break;

    case includeUpper:




  }







  function includeLower() {



  // confirm want lowercaase

  // ask player if they want uppercase

  // confirm want upperercaase

  // ask player if they want numeric

  // confirm want numeric

  // ask player if want special 

  // confirm want special
}



var createNewPassword = window.confirm("would you like to create a new password?");

function endPasswordGenerator() {
  if (createNewPassword === true) {
    startPasswordGenerator();
  } else {
    window.alert("Thank you for using password generator");
  }
}

endPasswordGenerator();



// if player is still alive and we're not at the last enemy in the array
if (playerHealth > 0 && i < enemyNames.length - 1) {

}


var num = 5;

switch(num) {
  case 1:
    console.log("the variable was 1");
    break;
  case 2:
    console.log("the variable was 2");
    break;
  case 3:
    console.log("the variable was 3");
    break;
  default:
    console.log("the variable was something else");
    break;
}

// SAME AS:

if (num === 1) {
  console.log("the variable was 1");
}
else if (num === 2) {
  console.log("the variable was 2");
}
else if (num === 3) {
  console.log("the variable was 3");
}
else {
  console.log("the variable was something else");
}











// function newPasswordGenerator() {
//   let length;
//   let lengthString;

//   // Repeatedly prompt the user for a length until length is valid.  

//   while (true) {
//     lengthString = window.prompt("Please enter the number of characters you would like in your password (8-128).");
//     length = parseInt(lengthString);

//     // Check that the number entered is valid.  If not prompt again.
//     if (length < 8 || length > 128) {
//       window.alert('please select a value > 8 and < 128');
//       continue;
//     }

//     // Give the user a chance to pick a different length;
//     var confirmLength = window.confirm("Are you sure you want " + length + " characters?"); 
//     if (confirmLength === false) {
//       continue;
//     }

//     // The length is valid, and the user confirmed.  We're done getting the length.
//     break;
//   }

//   // At this point we have a valid length.
// }


// newPasswordGenerator();







