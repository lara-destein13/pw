const lowercase = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const special = ['!', '?', '+', '-', '~', '*', ':']
const numeric = ['0','1','2','3','4','5','6','7','8','9']

// function startPasswordGenerator() {
function criteria () {
  window.alert("Welcome to Password Generator! Select the criteria you would like for your password.");
  var length = '' 
  while (true) {
    length = window.prompt("choose the number of characters you would like 8-128");
    if (length >= 8 && length <= 128) {
      var confirmed = window.confirm("are you sure you would like " + length + " characters?"); 
      if (confirmed) {
        break;  
      }  
    }
    window.alert("insufficient length, please choose a password length 8-128");
  }
  console.log(length);

  var lower = ''
  while (true) {
    lower = window.confirm("would you like your password to include lower case characters?");
    if (lower) {
      var confirmed = window.confirm("Are you sure you would like to include lower case characters?");
      if (confirmed) {
        break;
      }
    }
    window.alert("you would not like lower case characters");
  }

  var upper = ''
  while(true) {
    upper = window.confirm("Would you like your password to include uppercase characters?");
    if(upper) {
      confirmed = window.confirm("Are you sure you would like your password to include uppercase characters?")
      if(confirmed) {
        break;
      }  
    }
    window.alert("you would not like upper case characters");
  }

  var special = ''
  while(true) {
    special = window.confirm("Would you like your password to include special characters?");
    if(special) {
      confirmed = window.confirm("Are you sure you would like special characters included in your password?")
      if (confirmed) {
        break;
      }  
    }
    window.alert("you would not like special characters");
  }

  var numeric = ''
  while(true) {
    numeric = window.confirm("Would you like your passowrd to include numeric characters?");
    if(numeric) {
      confirmed = window.confirm("Are you sure you would like your password to include numeric characters?")
      if(confirmed) {
        break;
      }
    }
    window.alert("You have chosen to not include numeric characters");
  }

}

criteria();
    
    