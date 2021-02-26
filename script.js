//Variables, functions, arrays, conditional statements homework3

//Parameters for password
// Array of special characters to be included in password
var specialCharacters = ["$","#","?", "*", "<", "@", "~", "'", "%", "+", ",", "-", "\", ".", "/", ":", ";", "&", "=", ">", "^", "`", "|", "{", "}", "!" ];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Array of numeric characters to be included in password
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// User input variables 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercased;
var confirmLowercased;

// Choices variable added for concantonation
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
    // User validation If Statement 1
    if (!enter) {
        alert("My friend enter a value");
    } else if (enter < 8 || enter > 128) {
    // Validates & Start user input
        enter = parseInt(prompt("Please choose between 8 and 128"));
     
    } else {
        confirmNumber = confirm("Will it contain numbers?");
        confirmCharacter = confirm("Will it contain special characters?");
        confirmUppercased = confirm("Will it contain uppercase letters?");
        confirmLowercased = confirm("Will it contain lowercase letters?");
    };
    // Else if for 4 negative options and Choices
        if (!confirmCharacter && !confirmNumber && !confirmUppercased && !confirmLowercased) {
            choices = alert("Please choose at least one criteria!");

        }
        // Else if for 4 positive choices
        else if (confirmCharacter && confirmNumber && confirmUppercased && confirmLowercased) {

            choices = character.concat(number, uppercased, lowercased);
        }
        // Else if for 3 positive choices
        else if (confirmCharacter && confirmNumber && confirmUppercased) {
            choices = character.concat(number, uppercased);
        }
        else if (confirmCharacter && confirmNumber && confirmLowercased) {
            choices = character.concat(number, lowercased);
        }
        else if (confirmCharacter && confirmLowercased && confirmUppercased) {
            choices = character.concat(lowercased, uppercased);
        }
        else if (confirmNumber && confirmLowercased && confirmUppercased) {
            choices = number.concat(characters, lowercased, uppercased);
        }
        // Else if for 2 positive choices 
        else if (confirmCharacter && confirmNumber) {
            choices = character.concat(number);

        } else if (confirmCharacter && confirmLowercased) {
            choices = character.concat(lowercased);

        } else if (confirmCharacter && confirmUppercased) {
            choices = character.concat(uppercased);
        }
        else if (confirmLowercase && confirmNumber) {
            choices = alpha.concat(number);

        } else if (confirmLowercased && confirmUppercased) {
            choices = lowerCasedCharacters.concat(uppercased);

        } else if (confirmNumber && confirmUppercased) {
            choices = number.concat(uppercased);
        }
        // Else if for 1 positive choice
        else if (confirmCharacter) {
            choices = character;
        }
        else if (confirmNumber) {
            choices = number;
        }
        else if (confirmLowercased) {
            choices = lowercased;
        }
        else if (confirmUppercased) {
            choices = uppercased;
        };

        // Password variable is an array holder for user choice 
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
 copy.addEventListener("click", function () {
         copyPassword();
});

// This copies the password value confirmed that it works
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied use it wisely!");
}
