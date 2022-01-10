# Password Generator Starter Code

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
    - add event listener to button
    - create event handler to start the start password generator function
    - wrap the password generator logic in a start password generator function
    - nest prompts in start password generator function
    - while conditions are true then move to next prompt but first confirm with user that their selections were made intentionally. If yes, move forward, if no, break out of while loop
    - create generate password funtion which takes into acocunt user input and randomly generates a password. 
    - alert user of their generated password
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

