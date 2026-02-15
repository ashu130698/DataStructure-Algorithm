// function pattern1(n:number) {
//     for (let i = 1; i <= n; i++){
//         //run n times
//         //i= 1,2,3,....n
//         let currentRow = "";
//         //the below loop will run i times and will add i stars
//         for (let j = 1; j <= i; j++){
//             currentRow += "*";  //every time will add 1 star
//             //this loop will run i times, total i stars will be added
//         }
//         console.log(currentRow);
        
//     }
// }
// pattern1(5)

function numberPyramid(n: number): void {
  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let row = "";
    // leading spaces
    for (let j = 1; j <= spaces; j++) {
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
numberPyramid(4);
