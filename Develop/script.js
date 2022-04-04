var length


function startPasswordGenerator() {
  window.alert("Welcome to Password Generator! Select the criteria you would like for your password.");
  var length = window.prompt("choose the number of characters you would like 8-128");
    if(length >= 8 && length <=128) {
      window.alert("you chose " + length + " characters for your password.");
      window.confirm("are you sure you would like " + length + " characters?"); 
    } else {
      window.alert("insufficient length, please choose a password length 8-128");
      startPasswordGenerator();
    }     
}

  



startPasswordGenerator();
