function zigzagPattern(n: number, k: number): void {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= k; j++) {
      if ((i + j) % 4 === 0 || (i % 4 === 0 && j % 2 === 1)) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}
// Example usage:
zigzagPattern(5, 3);
