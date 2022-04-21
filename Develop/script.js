const lower = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upper = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const special = ['!', '?', '+', '-', '~', '*', ':']
const numeric = ['0','1','2','3','4','5','6','7','8','9']
const password = []
let eligableCharacters = []
let length = 0

var button = document.querySelector("button");
button.addEventListener("click", function() {
  const eligableCharacters = criteria();
  console.log(eligableCharacters);
  for (let i = 0; i < length;  i += 1) {
    const index = Math.floor(Math.random() * eligableCharacters.length);
    const char = eligableCharacters[index]
    password.push(char) 
  }
  window.alert(password.join(""));
  document.getElementById("password").innerHTML = password.join("");
});

function criteria () {
  window.alert("Welcome to Password Generator! Select the criteria you would like for your password.");
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

  while(true) {
    let lowerCase = window.confirm("click ok if you would like your password to include lowercase characters.");
    if (lowerCase === true) {
      let confirm = window.confirm("click ok if you are sure you would like lowercase characters.");
      if (confirm === true) {
        for (i = 0; i < lower.length; i++) {
          let char = lower[i] 
          eligableCharacters.push(char);
        }
        break;
      }  
    } else {
      let confirm = window.confirm("click ok if you are sure you would like to ommit lowercase characters.");
      if (confirm === true) {
        break;
      }
    }
  }   

  while(true) {
    let uppercase = window.confirm("click okay if you would like to include uppercase characters");
    if (uppercase === true) {
      let confirm = window.confirm("click ok if you are sure you would like to include uppercase characters");
      if(confirm === true) {
        for(i = 0; i < upper.length; i++) {
          let char = upper[i]
          eligableCharacters.push(char)
        }
        break;
      }
    } else {  
      let confirm = window.confirm("click ok if you would like to ommit uppercase characters.");
      if(confirm === true) {
        break;
      }
    }  
  }

  while(true) {
    let specialChar = window.confirm("Click ok if you would like your password to include special characters");
    if(specialChar === true) {
      let confirm = window.confirm("Click ok if you are sure you would like your password to include special characters");
      if(confirm === true) {
        for (i = 0; i < special.length; i++) {
          let char = special[i]
          eligableCharacters.push(char); 
        }
        break;
      }  
    } else {
      let confirm = window.confirm("click ok if you would like to ommit special characters.");
      if(confirm === true) {
        break;
      }
    }  
  }  

  while(true) {
    let numericChar = window.confirm("click ok if you would like your password to include numeric characters.");
    if (numericChar === true) {
      let confirm = window.confirm("click ok if you are sure you would like to include numeric characters.");
      if (confirm === true) {
        for(i = 0; i < numeric.length; i++) {
          let char = numeric[i]
          eligableCharacters.push(char);
        }
        break;
      }
    } else {
      let confirm = window.confirm("click ok if you would like to ommit numeric characters.");
      if (confirm === true) {
        break;
      }
    }
  }
  return eligableCharacters
}  




    


    