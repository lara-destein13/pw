function startPasswordGenerator() {
  var length = window.prompt("How many characters would you like in your password. (must be between 8 and 128");
  console.log(length);
  if (length >= 8 && length <= 128) {
    window.alert("You chose " + length + " characters for your password.");
  } else {
    window.alert("Insufficient character length, please choose a number 8-128");
    (startPasswordGenerator());
  }
};

startPasswordGenerator();
  



