// Assignment Code
const generateBtn = document.querySelector('#generate');

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
	const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');

	let passChoices = [];
	let passBuilder = [];
	let passLength = 0;

	let inclLower = confirm('Include lower case letters?');
	let inclUpper = confirm('Include upper case letters?');
	let inclNumbers = confirm('Include numbers?');
	let inclSpecial = confirm('Include special characters?');

	if (inclLower) {
		passChoices = passChoices.concat(lowerLetters);
	}

	if (inclUpper) {
		passChoices = passChoices.concat(upperLetters);
	}

	if (inclNumbers) {
		passChoices = passChoices.concat(numbers);
	}

	if (inclSpecial) {
		passChoices = passChoices.concat(specialChar);
	}

	console.log(passChoices);

	pswdLength = prompt('Enter length of password: 8 to 128 characters');
	pswdLength = parseInt(pswdLength);
	console.log(pswdLength);
	while (pswdLength < 8 || pswdLength > 128 || isNaN(pswdLength)) {
		pswdLength = prompt('Invalid number. Please enter a length between 8 and 128 characters');
	}

	for (let i = 0; i < pswdLength; i++) {
		let randChar = Math.floor(Math.random() * passChoices.length);
		console.log(randChar);
		passBuilder.push(passChoices[randChar]);
	}

	let password = passBuilder.join('');
	console.log(password);

	return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
