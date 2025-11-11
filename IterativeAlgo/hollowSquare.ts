function hollowSquare(n: number): void {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      // if we are at border row (i=1 or i=n) OR border col (j=1 or j=n)
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
// Example usage:
hollowSquare(5);
