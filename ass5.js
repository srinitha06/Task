
let text = "  Hello, JavaScript World!  ";
let searchText = "JavaScript";

console.log("Length:", text.length);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Trimmed:", text.trim());
console.log(`Does the string include "${searchText}"?`, text.includes(searchText));
console.log(`Index of "${searchText}":`, text.indexOf(searchText));
console.log(`Last index of "o":`, text.lastIndexOf("o"));
console.log('Starts with "  Hello"?', text.startsWith("  Hello"));
console.log('Ends with "World!  "?', text.endsWith("World!  "));
console.log("Slice (7 to 18):", text.slice(7, 18));
console.log("Substring (7 to 18):", text.substring(7, 18));
console.log("Substr (7, 10):", text.substr(7, 10));
console.log("Split by spaces:", text.split(" "));
console.log('Replace "JavaScript" with "JS":', text.replace("JavaScript", "JS"));
let repeatedText = "Hello Hello Hello";
console.log('Replace all "Hello" with "Hi":', repeatedText.replaceAll("Hello", "Hi"));
console.log("Character at index 7:", text.charAt(7));
console.log("Unicode of character at index 7:", text.charCodeAt(7));
console.log("Concatenated:", text.concat(" Let's code!"));
console.log("Repeated 3 times:", text.repeat(3));
console.log('Padded start (30 chars, "*"):', text.trim().padStart(30, "*"));
console.log('Padded end (30 chars, "*"):', text.trim().padEnd(30, "*"));
console.log('Matches for "o":', text.match(/o/g));
console.log('Search for "Java":', text.search(/Java/));console.log("Locale Uppercase:", text.toLocaleUpperCase());
console.log("Locale Lowercase:", text.toLocaleLowerCase());
