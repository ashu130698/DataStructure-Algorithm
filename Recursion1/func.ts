// function func(n: number): void{
//     if (n == 0) return;
//     console.log(n);
//     func(n - 1)
//     console.log(n);
// }

// func(5);

// to find the value of n, we have to initiate with the condition first and then second line and so on.
// we can use call stack here, first we initialize then go line by line in cade

function func(n: number): void {
  //base case
  if (n == 101) return;
  //body
  console.log(n);   //pre
  func(n + 1);
  console.log(n);   //post
}

func(95);

