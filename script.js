//Variables, functions, arrays, conditional statements homework3

//Parameters for password
// Array of special characters to be included in password
specialCharacters = ["$","#","?", "*", "<", "@", "~", "'", "%", """, "+", ",", "-", "\", ".", "/", ":", ";", "&", "=", ">", "^", "_", "`", "|", "{", "}", "!" ];
// Array of lowercase characters to be included in password
lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password
upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Array of numeric characters to be included in password
var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// User input variables 
var enter;
var confirmNumeric;
var confirmCharacter;
var confirmUppercased;
var confirmLowercased;

// Choices declared outside the if statement so they can be concatenated
var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
        // Asks for length from user
        enter = parseInt(prompt("How many characters between 8 and 128 would you like your password?"));
        // If statement for user validation 
        if (!enter) {
            alert("My friend enter a value");
        } else if (enter < 8 || enter > 128) {
            // Validates & Start user input
            enter = parseInt(prompt("Please choose between 8 and 128"));
            // Continues once input is validated
        } else {
            confirmNumeric = confirm("Will it contain numbers?");
            confirmCharacter = confirm("Will it contain special characters?");
            confirmUppercased = confirm("Will it contain uppercase letters?");
            confirmLowercased = confirm("Will it contain lowercase letters?");
        };

        // Else if for 4 negative options and Choices
        if (!confirmCharacter && !confirmNumeric && !confirmUppercased && !confirmLowercased) {
            choices = alert("Please choose at least one criteria!");

        }
        // Else if for 4 positive choices
        else if (confirmCharacter && confirmNumeric && confirmUppercased && confirmLowercased) {

            choices = character.concat(character, numericCharacters, upperCasedCharacters, lowerCasedCharacters);
        }
        // Else if for 3 positive choices
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
        // Else if for 2 positive choices 
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
        // Else if for 1 positive choice
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

        // Password variable is an array holder for user choice length received assistance
        var password = [];

        // Create random selection variables:
        // Random selection for all variables: 
        for (var i = 0; i < enter; i++) {
            var pickChoices = choices[Math.floor(Math.random() * choices.length)];
            password.push(pickChoices);
        }
        // This joins the array and converts it to a string 
        var ps = password.join("");
        UserInput(ps);
        return ps;
    }
// This puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
 var copy = document.querySelector("#copy");
 copy.addEventListener("click", function() {
         copyPassword();
});
// This copies the password value confirmed that it works
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied use it wisely!");
}
