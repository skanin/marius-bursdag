const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const defaultRoutes = require('./routes/default.js');

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	// Caesar Cipher
	const caesarCipher = (string, shift) => {
		// Alphabet
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ';
	
		// Encoded Text
		let encodedText= '';
	
		// Adjust Shift (Over 26 Characters)
		if (shift > 29) {
			// Assign Remainder As Shift
			shift = shift % 29;
		}
	
		// Iterate Over Data
		let i = 0;
		while (i < string.length) {
		// Valid Alphabet Characters
		
			if (alphabet.indexOf(string[i].toUpperCase()) !== -1) {
				// Find Alphabet Index
				const alphabetIndex = alphabet.indexOf((string[i]).toUpperCase());
		
				// Alphabet Index Is In Alphabet Range
				if (alphabet[alphabetIndex + shift]) {
					// Append To String
					
					encodedText += alphabet[alphabetIndex + shift];
				}
				// Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
				else {
					// Append To String
					encodedText += alphabet[alphabetIndex + shift - 29];
				}
			}
			// Special Characters
			else {
				// Append To String
				encodedText += string[i];
			}
			// Increase I
			i++;
		}
		return encodedText.toLocaleLowerCase();
	};
	
	if(req.originalUrl !== '/midi' && req.originalUrl.length === 5 && req.originalUrl !== '/qmhm') {
		for(let i = 1; i < 29; i++){
			if (caesarCipher(req.originalUrl, i) === '/midi') {
				res.sendFile('routes/views/nope.html', {root: __dirname});
				return;
			}
		}
	}
	

	next()
})

app.use('/', defaultRoutes);

// If default routes fails, we have 404.
app.use((req, res) => {
	res.status(404);

	res.sendFile('error.html', {root: __dirname});
	
})

var port = process.env.PORT || 3003;

app.listen(port, () => {
	console.log('Up and running!!');
});