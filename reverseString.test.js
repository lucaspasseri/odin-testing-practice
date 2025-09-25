import reverseString from "./reverseString";

test("Basic path", () => {
	const input = "string";
	expect(reverseString(input)).toBe("gnirts");
});

test("Input different from string ", () => {
	const input = null;
	const input1 = undefined;
	const input2 = false;
	const input3 = 0;
	expect(reverseString(input)).toBe("");
	expect(reverseString(input1)).toBe("");
	expect(reverseString(input2)).toBe("");
	expect(reverseString(input3)).toBe("");
});
