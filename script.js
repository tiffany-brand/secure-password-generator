// Select generate password button
const generateBtn = document.querySelector('#generate');

// Select password parameters form elements
const lengthBox = document.querySelector('#length');
const lowerBox = document.querySelector('#lowercase');
const upperBox = document.querySelector('#uppercase');
const numbersBox = document.querySelector('#numbers');
const specialCharBox = document.querySelector('#special-char');

// Write password to the #password input
function writePassword() {
	let password = generatePassword();
	let passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// Logic to randomly generate password based on parameters chosen
function generatePassword() {

	// Create arrays to hold password parameters elements
	const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const numbers = '0123456789'.split('');
	const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');

	// Initialize array for possible password characters
	let passChoices = [];

	// Initialize array for generated password
	let passBuilder = [];

	// Get length from form
	let pswdLength = parseInt(lengthBox.value);

	// Add possible password characters to array of choices based on checkboxes
	if (lowerBox.checked) {
		passChoices = passChoices.concat(lowerLetters);
	}
	if (upperBox.checked) {
		passChoices = passChoices.concat(upperLetters);
	}
	if (numbersBox.checked) {
		passChoices = passChoices.concat(numbers);
	}
	if (specialCharBox.checked) {
		passChoices = passChoices.concat(specialChars);
	}



	// Make sure at least one character type is checked
	if (passChoices.length) {
		// Validate that a length of appropriate size was input
		if (pswdLength < 8 || pswdLength > 128 || isNaN(pswdLength)) {
			alert('Please enter a password length between 8 and 128 characters.');
			return '';
		} else {
			// Choose random characters to add to password
			for (let i = 0; i < pswdLength; i++) {
				let randChar = Math.floor(Math.random() * passChoices.length);
				passBuilder.push(passChoices[randChar]);
			}

			// Create string of final password and return it
			let password = passBuilder.join('');
			return password;
		}
	} else {
		// Alert if no character types are checked
		alert('Please check at least one character type.');
		return '';
	}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
