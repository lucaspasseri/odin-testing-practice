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
	const inputs = [null, undefined, false, "abc"];
	inputs.forEach(input => {
		expect(calculator.add(input, input)).toBe(null);
	});
	inputs.forEach(input => {
		expect(calculator.subtract(input, input)).toBe(null);
	});
	inputs.forEach(input => {
		expect(calculator.divide(input, input)).toBe(null);
	});
	inputs.forEach(input => {
		expect(calculator.multiply(input, input)).toBe(null);
	});
});

test("Divide by zero", () => {
	const a = 10;
	const b = 0;
	expect(calculator.divide(a, b)).toBe(null);
});
