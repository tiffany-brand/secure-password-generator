// Assignment Code
const generateBtn = document.querySelector('#generate');
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

function generatePassword() {
	const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const numbers = '0123456789'.split('');
	const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');

	let passChoices = [];
	let passBuilder = [];

	let pswdLength = parseInt(lengthBox.value);

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

	console.log(passChoices);

	if (passChoices.length) {
		console.log(pswdLength);

		if (pswdLength < 8 || pswdLength > 128 || isNaN(pswdLength)) {
			alert('Please enter a password length between 8 and 128 characters.');
			return '';
		} else {
			for (let i = 0; i < pswdLength; i++) {
				let randChar = Math.floor(Math.random() * passChoices.length);
				console.log(randChar);
				passBuilder.push(passChoices[randChar]);
			}

			let password = passBuilder.join('');
			console.log(password);

			return password;
		}
	} else {
		alert('Please check at least one character type.');
		return '';
	}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
