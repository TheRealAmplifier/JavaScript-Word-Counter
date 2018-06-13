$(function() {

	countWords = () => {
		const regex = /\s/g; // basic regex

		// get textarea input
		let textInput = document.getElementById('textareaInput').value;
		
		// clean up the input and start counting!
		const totalWordCount = textInput.trim().replace(regex, ' ').split(' ').length;
		const totalCharacterCount = textInput.length;
		const totalStrippedCharacterCount = textInput.replace(regex, '').length;

		// target divs & spans
		const resultDiv = document.querySelector('.results');
		const wordCountSpan = document.querySelector('.word-count');
		const characterCountSpan = document.querySelector('.char-count');
		const characterStrippedCountSpan = document.querySelector('.char-stripped-count');

		// check if there is any text inside the textarea
		if( textInput.length >= 1) {
			// show results div.
			resultDiv.style.display = 'block';

			// populate result spans
			wordCountSpan.textContent = totalWordCount;
			characterCountSpan.textContent = totalCharacterCount;
			characterStrippedCountSpan.textContent = totalStrippedCharacterCount;
		} else {
			resultDiv.style.display = 'block';
			resultDiv.innerHTML = 'I cannot count nothing... <br /> Please paste in some nice text before submitting the form!';
		}
	}

	document.getElementById('countWords').addEventListener('click', function(event) {
		event.preventDefault();
		countWords();
	});
});