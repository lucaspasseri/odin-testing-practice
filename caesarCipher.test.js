import caesarCipher from "./caesarCipher";

test("Basic path", () => {
	const input = "abc";

	expect(caesarCipher(input, 2)).toBe("cde");
});

test("Upper case letter", () => {
	const input = "ABC";

	expect(caesarCipher(input, 2)).toBe("CDE");
});

test("Upper case letter", () => {
	const input = "ABC";

	expect(caesarCipher(input, 2)).toBe("CDE");
});

test("Wrapping from z to a", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("Case preservation", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Punctuation", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
