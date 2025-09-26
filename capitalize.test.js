import capitalize from "./capitalize";

test("Basic path", () => {
	const input = "string";
	expect(capitalize(input)).toBe("String");
});

test("Type different from string", () => {
	const inputs = [null, undefined, false, 0, [], {}];
	inputs.forEach(input => expect(capitalize(input)).toBe(""));
});
test("Empty string", () => {
	const input = "";
	expect(capitalize(input)).toBe("");
});

test("Starting space", () => {
	const input = " banana";
	expect(capitalize(input)).toBe(" banana");
});

test("Input that can not be capitalize", () => {
	const inputs = ["!", "123", "🙂"];
	inputs.forEach((input, index) =>
		expect(capitalize(input)).toBe(inputs[index])
	);
});
