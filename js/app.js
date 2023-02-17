document.getElementById("btn-generate").addEventListener("click", function () {
	randomPin();
});

document
	.getElementById("calculator-numbers")
	.addEventListener("click", function (event) {
		const number = event.target.innerText;
		displayNumber(number);
	});
