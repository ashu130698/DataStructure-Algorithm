function butterflyPattern(n: number): void {
  // upper half
  for (let i = 1; i <= n; i++) {
    let row = "";
    // left stars
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    // spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
      row += " ";
    }
    // right stars
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
  // lower half
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// Example usage:
butterflyPattern(4);
