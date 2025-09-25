import capitalize from "./capitalize";

test("Basic path", () => {
	const input = "string";
	expect(capitalize(input)).toBe("String");
});

test("With input type different from string", () => {
	const input = null;
	const input1 = undefined;
	const input2 = false;
	expect(capitalize(input)).toBe("");
	expect(capitalize(input1)).toBe("");
	expect(capitalize(input2)).toBe("");
});

test("Empty string", () => {
	const input = "";
	expect(capitalize(input)).toBe("");
});
