'use strict';

const generatedPassword = document.querySelector('.resultPassword');
const lengthSlider = document.getElementById('passwordLengthSlider');
const lengthInput = document.getElementById('passwordLengthInput');
const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
const numbersCheckbox = document.getElementById('numbersCheckbox');
const symbolsCheckbox = document.getElementById('symbolsCheckbox');
const generateBtn = document.querySelector('.generateBtn');
const checkboxes = document.querySelectorAll('.checkbox');

const generatePassword = function () {
	const passwordLength = +lengthInput.value;
	if (passwordLength < 5 || passwordLength > 20) return;

	let tempPassword = [];
	for (let i = 0; i < passwordLength; i++) {
		tempPassword[i] = String.fromCharCode(getRandomInt(97, 122));
	}

	let password = checkboxesChange(tempPassword);
	shuffleArray(password);

	generatedPassword.textContent = password.join('');
};

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

const checkboxesChange = function (password) {
	if (
		uppercaseCheckbox.checked === false &&
		numbersCheckbox.checked === false &&
		symbolsCheckbox.checked === false
	)
		return password;

	if (uppercaseCheckbox.checked === true) {
		password[0] = String.fromCharCode(getRandomInt(65, 90));

		if (password[6]) password[6] = String.fromCharCode(getRandomInt(65, 90));
	}

	if (numbersCheckbox.checked === true) {
		password[1] = String.fromCharCode(getRandomInt(48, 57));

		if (password[7]) password[7] = String.fromCharCode(getRandomInt(48, 57));
	}

	if (symbolsCheckbox.checked === true) {
		password[2] = String.fromCharCode(getRandomInt(33, 47));

		if (password[8]) password[8] = String.fromCharCode(getRandomInt(33, 47));
	}

	return password;
};

const getRandomInt = function (min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const init = function () {
	generatePassword.textContent = `result password`;
	lengthSlider.value = lengthInput.value = 5;
	checkboxes.forEach((checkbox) => (checkbox.checked = true));
	lengthSlider.addEventListener('input', (e) => {
		lengthInput.value = e.target.value;
	});
	lengthInput.addEventListener('change', (e) => {
		lengthSlider.value = e.target.value;
	});
	generateBtn.addEventListener('click', generatePassword);
};
init();
