function isInvalidNumber(value) {
	if (typeof value !== "number" || Number.isNaN(value)) {
		return true;
	}
	return false;
}

const calculator = {
	add(a, b) {
		if (isInvalidNumber(a) || isInvalidNumber(b)) {
			throw new TypeError("Inputs must be numbers");
		}
		return a + b;
	},

	subtract(a, b) {
		if (isInvalidNumber(a) || isInvalidNumber(b)) {
			throw new TypeError("Inputs must be numbers");
		}
		return a - b;
	},

	divide(a, b) {
		if (isInvalidNumber(a) || isInvalidNumber(b)) {
			throw new TypeError("Inputs must be numbers");
		}

		if (b === 0) {
			throw new Error("Cannot divide by zero");
		}
		return a / b;
	},

	multiply(a, b) {
		if (isInvalidNumber(a) || isInvalidNumber(b)) {
			throw new TypeError("Inputs must be numbers");
		}
		return a * b;
	},
};

export default calculator;
