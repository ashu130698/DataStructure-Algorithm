function encodeStringDiff(str: string): string {
  if (!str || str.length < 2) return str;

  let result = "";
  for (let i = 0; i < str.length - 1; i++) {
    const curr = str[i];
    const next = str[i + 1];
    const diff = next.charCodeAt(0) - curr.charCodeAt(0);
    result += `${curr}${diff}`;
  }
  result += str[str.length - 1]; // add the last character
  return result;
}

// Example
const input = "abBCcdf";
console.log(encodeStringDiff(input)); // Output: a1b-32B1C32c1d2f
