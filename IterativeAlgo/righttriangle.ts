function invertedRightTriangle(n: number): void {
  // n: number of rows (and maximum stars in first row)
  for (let i = n; i >= 1; i--) {
    // we iterate i from n down to 1
    let row = "";
    for (let j = 1; j <= i; j++) {
      // for each row i, print i stars
      row += "*";
    }
    console.log(row);
    // prints the constructed row
  }
}
// Example usage:
invertedRightTriangle(5);
