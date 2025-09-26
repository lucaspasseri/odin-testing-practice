const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

export default function caesarCipher(string, factor) {
	const output = Array.from(string)
		.map(char => {
			const lowerCaseChar = char.toLowerCase();

			const alphabetIndex = alphabet.findIndex(char => char === lowerCaseChar);

			if (alphabetIndex !== -1) {
				const newAlphabetIndex = (alphabetIndex + factor) % alphabet.length;

				if (char === char.toUpperCase()) {
					return alphabet[newAlphabetIndex].toUpperCase();
				}
				return alphabet[newAlphabetIndex];
			}

			return char;
		})
		.join("");

	return output;
}
