import calculator from "./calculator";

test("Basic path", () => {
	const a = 1;
	const b = 2;
	expect(calculator.add(a, b)).toBe(3);
	expect(calculator.subtract(a, b)).toBe(-1);
	expect(calculator.divide(a, b)).toBeCloseTo(0.5);
	expect(calculator.multiply(a, b)).toBe(2);
});

test("Type different from number", () => {
	const inputs = [null, undefined, NaN, false, "abc", [], {}];
	inputs.forEach(input => {
		expect(() => calculator.add(0, input)).toThrow("Inputs must be numbers");
		expect(() => calculator.add(input, 0)).toThrow("Inputs must be numbers");
	});
	inputs.forEach(input => {
		expect(() => calculator.subtract(0, input)).toThrow(
			"Inputs must be numbers"
		);
		expect(() => calculator.subtract(input, 0)).toThrow(
			"Inputs must be numbers"
		);
	});
	inputs.forEach(input => {
		expect(() => calculator.divide(0, input)).toThrow("Inputs must be numbers");
		expect(() => calculator.divide(input, 0)).toThrow("Inputs must be numbers");
	});
	inputs.forEach(input => {
		expect(() => calculator.multiply(0, input)).toThrow(
			"Inputs must be numbers"
		);
		expect(() => calculator.multiply(input, 0)).toThrow(
			"Inputs must be numbers"
		);
	});
});

test("Divide by zero", () => {
	const a = 10;
	const b = 0;
	expect(() => calculator.divide(a, b)).toThrow("Cannot divide by zero");
});
