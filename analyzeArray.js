export default function analyzeArray(arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError("Input must be an Array");
	}

	if (arr.length === 0)
		return {
			average: null,
			min: null,
			max: null,
			length: 0,
		};

	let sum = 0;
	let max = -Infinity;
	let min = +Infinity;

	arr.forEach(element => {
		if (typeof element !== "number" || Number.isNaN(element)) {
			throw new TypeError("Array elements must be a number");
		}
		sum += element;
		if (element > max) {
			max = element;
		}
		if (element < min) {
			min = element;
		}
	});

	return {
		average: sum / arr.length,
		min,
		max,
		length: arr.length,
	};
}
