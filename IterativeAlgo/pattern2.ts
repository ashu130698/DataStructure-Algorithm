function pattern2(n: number) {
  for (let i = n; i >= 1; i--) {
    let stars = i;
    let spaces = n - stars;

    let currentRow = "";
    for (let j = 1; j <= spaces; j++) {
      currentRow += " ";
    }
    for (let j = 1; j <= stars; j++) {
      currentRow += "*";
    }
    console.log(currentRow);
  }
}
pattern2(9);
