export default function reverseString(string) {
	if (typeof string !== "string") return "";
	return string.split("").reduce((prev, curr) => curr + prev, "");
}
