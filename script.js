// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerCharacter = ['abcdefghijklmnopqrstuvwxyz']
var upperCharacters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var numericCharacters = "1234567890"
var specialCharacters = "!@#$%^&*()-+/"
var potentialCharacters = ""
var passwordText = ""


// Write password to the #password input
function writePassword() {
    var passwordText = ""
    var password = {
        legnth: 0,
        mixed: false,
        num: false,
        special: false
    }
    var generatePassword = function() {
       password.legnth = window.prompt("Please choose a length for your password of at least 8 characters and no more than 128 characters.")
       var legnth = parseInt(password.legnth)

       if (legnth >= 8 && legnth <= 128) {
            confirmTypes();
       }
       else {
            window.alert("Please enter a valid length")
            generatePassword();
        }
        function confirmTypes() {
            password.mixed = window.confirm("Would you like to include upper and lowercase characters?")
            if (password.mixed === false) {
               var lowerCase = window.confirm("Would you like to include only lowercase characters?")
               if (lowerCase === false) {
                   var upperCase = window.confirm("Would you like to include only uppercase characters?")
               } 
            }
            password.num = window.confirm("Would you like to include numeric characters?")
            
            password.special = window.confirm("Would you like to include special characters?")

            //checks to see that at least 1 of the character types have been selected, if not it reloops to the top of the function
            if (password.mixed === false && password.num === false && password.special === false && lowerCase === false && upperCase === false) {
                window.alert("You need to select at least 1 character type.")
                confirmTypes();
            } 
            //checks to see if each character type is true, and if it is true it adds that string into the string of possible characters to use for the random generator
            if (password.mixed) {
                potentialCharacters = potentialCharacters.concat(upperCharacters, lowerCharacter)
            }
            if (lowerCase) {
                potentialCharacters = potentialCharacters.concat(lowerCharacter)    
            }
            if (upperCase) {
                potentialCharacters = potentialCharacters.concat(upperCharacters)
            }
            if (password.num) {
                potentialCharacters = potentialCharacters.concat(numericCharacters)
            }
            if (password.special) {
                potentialCharacters = potentialCharacters.concat(specialCharacters)
            }
        }

        //With each loop password text is equal to password text plus a random character between the two indices (randomnum & randomnum +1)
        for (var i = 0; i < legnth; i++) {
            var randomNumber = Math.floor(Math.random() * potentialCharacters.length);
            passwordText += potentialCharacters.substring(randomNumber, randomNumber +1);
        }
        //sets the password id to the value of the passwordText
        document.querySelector("#password").value = passwordText;
    }
    generatePassword(); 

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
