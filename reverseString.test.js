import reverseString from "./reverseString";

test("Basic path", () => {
	const input = "string";
	expect(reverseString(input)).toBe("gnirts");
});

test("Type different from string", () => {
	const invalidInputs = [null, undefined, false, 0];
	invalidInputs.forEach(input => {
		expect(reverseString(input)).toBe("");
	});
});

test("Empty string", () => {
	expect(reverseString("")).toBe("");
});

test("String with spaces", () => {
	expect(reverseString(" ab ")).toBe(" ba ");
});

test("String with emoji", () => {
	expect(reverseString("🙂🙃")).toBe("🙃🙂");
});
