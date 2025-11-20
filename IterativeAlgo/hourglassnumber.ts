function hourglassNumberPattern(n: number): void {
  for (let i = n; i >= 1; i--) {
    let row = "";
    // leading spaces
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    // numbers repeated i times
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row.trim());
  }
}
// Example usage:
hourglassNumberPattern(5);
