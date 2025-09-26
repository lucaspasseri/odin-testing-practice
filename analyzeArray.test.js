import analyzeArray from "./analyzeArray";

test("Basic path", () => {
	const input = [1, 8, 3, 4, 2, 6];
	expect(analyzeArray(input)).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test("Single element", () => {
	const input = [1];
	expect(analyzeArray(input)).toEqual({
		average: 1,
		min: 1,
		max: 1,
		length: 1,
	});
});

test("Empty array", () => {
	const input = [];
	expect(analyzeArray(input)).toEqual({
		average: null,
		min: null,
		max: null,
		length: 0,
	});
});
test("Input is not an Array", () => {
	const inputs = [null, undefined, NaN, false, "", 123, {}];
	inputs.forEach(input =>
		expect(() => analyzeArray(input)).toThrow("Input must be an Array")
	);
});
test("Array elements are not numbers", () => {
	const inputs = [["1"], [null], [undefined], [false], [[]], [{}], [NaN]];

	inputs.forEach(input =>
		expect(() => analyzeArray(input)).toThrow("Array elements must be a number")
	);
});
