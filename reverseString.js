export default function reverseString(string) {
	if (typeof string !== "string") return "";
	return Array.from(string).reverse().join("");
}
