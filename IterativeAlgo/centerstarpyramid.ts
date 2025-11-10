function centeredStarPyramid(n: number): void {
  // n: number of rows
  for (let i = 1; i <= n; i++) {
    // current row is i
    let spaces = n - i; // number of leading spaces
    let stars = 2 * i - 1; // number of stars
    let row = "";

    // add spaces
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    // add stars
    for (let j = 1; j <= stars; j++) {
      row += "*";
    }

    console.log(row);
  }
}
// Example usage:
centeredStarPyramid(4);
