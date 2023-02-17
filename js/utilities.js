// get element by id
function getElementByID(elementId) {
	const element = document.getElementById(elementId);
	return element;
}

// get element value by id
function getElementValue(valueId) {
	const elementId = document.getElementById(valueId);
	const elementValueString = elementId.value;
	const elementValue = parseInt(elementValueString);
	return elementValue;
}

// get element text by id
function getElementText(textId) {
	const elementId = document.getElementById(textId);
	const elementTextString = elementId.innerText;
	const elementText = parseInt(elementTextString);
	return elementText;
}

// Generate pin
function generatePin() {
	const randomNumber = Math.round(Math.random() * 10000);
	return randomNumber;
}

// Verify and display Pin
function randomPin() {
	const pin = generatePin();
	const pinString = pin + "";

	const displayId = getElementByID("display-pin");

	if (pinString.length < 4) {
		return generatePin();
	} else {
		displayId.value = pin;
	}
}

// Display Number
function displayNumber(number) {
	const displayNumberId = getElementByID("display-number");
	const oldNumberValue = displayNumberId.value;

	if (isNaN(number)) {
		if (number === "C") {
			displayNumberId.value = "";
		} else if (number === "<") {
			const numberString = oldNumberValue + "";
			const numberSplit = numberString.split("");
			numberSplit.pop();
			const remainingNumber = numberSplit.join("");
			displayNumberId.value = remainingNumber;
		}
	} else {
		displayNumberId.value = oldNumberValue + number;
	}
}
