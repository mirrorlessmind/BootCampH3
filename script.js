//Variables, functions, arrays, conditional statements homework3

// Array of special characters to be included in password
var specialCharacters = ["$","#","?", "*", "<", "@", "~", "'", "%", "+", ",", "-", "\", ".", "/", ":", ";", "&", "=", ">", "^", "`", "|", "{", "}", "!" ];;
// Array of numeric characters to be included in password
var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// User input variables 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Choices declared outside the if statement so they can be concatenated
var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
        // Asks for length
        enter = parseInt(prompt("How many characters between 8 and 128 would you like your password?"));
        // If statement for user validation 
        if (!enter) {
            alert("This needs a value");
        } else if (enter < 8 || enter > 128) {
            // Validates & Start user input
            
            enter = parseInt(prompt("You must choose between 8 and 128"));

        } else {
            // Continues once user input is validated
            confirmNumber = confirm("Will it contain numbers?");
            confirmCharacter = confirm("Will it contain special characters?");
            confirmUppercase = confirm("Will it contain uppercase letters?");
            confirmLowercase = confirm("Will it contain lowercase letters?");
        };

        // Else if for 4 negative options
        if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
            choices = alert("Please choose at least one criteria!");

        }




        // If statement with user input prompts to determine choices
        // Else if for 4 positive options
        else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

            choices = character.concat(Character, numericCharacters, upperCasedCharacters, lowerCasedCharacters);
        }


        // Else if for 3 positive options
        else if (confirmCharacter && confirmNumber && confirmUppercase) {
            choices = character.concat(number, upperCasedCharacters);
        }
        else if (confirmCharacter && confirmNumber && confirmLowercase) {
            choices = character.concat(number, lowerCasedCharacters);
        }
        else if (confirmCharacter && confirmLowercase && confirmUppercase) {
            choices = character.concat(character, lowerCasedCharacters, upperCasedCharacters);
        }
        else if (confirmNumber && confirmLowercase && confirmUppercase) {
            choices = number.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
        }


        // Else if for 2 positive options 
        else if (confirmCharacter && confirmNumber) {
            choices = character.concat(number);

        } else if (confirmCharacter && confirmLowercase) {
            choices = character.concat(lowerCasedCharacters);

        } else if (confirmCharacter && confirmUppercase) {
            choices = character.concat(upperCasedCharacters);
        }
        else if (confirmLowercase && confirmNumber) {
            choices = alpha.concat(number);

        } else if (confirmLowercase && confirmUppercase) {
            choices = lowerCasedCharacters.concat(upperCasedCharacters);

        } else if (confirmNumber && confirmUppercase) {
            choices = number.concat(upperCasedCharacters);
        }


        // Else if for 1 positive option
        else if (confirmCharacter) {
            choices = character;
        }
        else if (confirmNumber) {
            choices = number;
        }
        else if (confirmLowercase) {
            choices = lowerCasedCharacters;
        }
        else if (confirmUppercase) {
            choices = upperCasedCharacters;
        };

        // password variable is an array placeholder for user generated length
        var password = [];

        // Start random selection variables:
        // Random selection for all variables: 
        for (var i = 0; i < enter; i++) {
            var pickChoices = choices[Math.floor(Math.random() * choices.length)];
            password.push(pickChoices);
        }
        // This joins the password array and converts it to a string received help
        var ps = password.join("");
        UserInput(ps);
        return ps;
    }
// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

 var copy 
 document.querySelector("#copy");
 copy.addEventListener("click", () => {
         copyPassword();
     });
// This copies the password value confirmed that it works

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}


