

//Variables functions arrays conditional statements
// User choice variables
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmCharacter;

// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Array of numeric characters to be included in password
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array of lowercase characters to be included in password
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of uppercase characters to be included in password
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Function to generate password
// Validates user choice
// Begin choice prompts
function generatePassword() {
    // Asks for choices between 8 and 128
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // If statements choices needed for generating password based on choosing at least one
    if (!enter) {
        alert("Please choose a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Please choose between 8 and 128"));

    } else {
        confirmNumber = confirm("Will password contain numbers?");
        confirmCharacter = confirm("Will password contain special characters?");
        confirmUppercase = confirm("Will password contain Uppercase letters?");
        confirmLowercase = confirm("Will password contain Lowercase letters?");
    };

    // Else if for not choosing any of the parameters from criteria
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("Please choose a criteria!");
    //Use of .concat to combine array choices to create cleaner code
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, lowercase, uppercase);
    }
    // Else if for 3 positive choices from criteria
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowercase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowerercase, uppercase);
    }

    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, uppercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowercase, uppercase);
    }
    // Else if for 2 positive choices from criteria 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    } 
    else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowercase);
    } 
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowercase.concat(number);
    } 
    else if (confirmLowercase && confirmUppercase) {
        choices = lowercase.concat(uppercase);
    } 
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(uppercase);
    }
    // Else if for 1 positive choice from criteria
    else if (confirmLowercase) {
        choices = lowercase;
    }
    else if (confirmUppercase) {
        choices = uppercase;
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    };

    // password variable is an the choices in array placeholder for length
    var password = [];

    // For statment of random selection of variables using the choice
    // Creating random selection for all variables
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
//Copy password to clipboard
function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}



