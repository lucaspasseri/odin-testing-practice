export default function capitalize(string) {
	if (typeof string !== "string" || string === "") return "";
	const firstLetter = string[0];
	const rest = string.split(firstLetter)[1];
	console.log({ firstLetter, rest });
	return firstLetter.toUpperCase() + rest;
}
