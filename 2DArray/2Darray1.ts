function zigzagTraverse(arr: number[][]) {
    //first step is always starts with i coz it goes to i to j first
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {  //even
          for (let j = 0; j <= arr.length - 1; j++) console.log(arr[i][j]); //if no. is even like 0,2,4.... so the loop traverse from i[0,2,4...] to arr[i].length-1
        } else {   //odd
          for (let j = arr.length - 1; j >= 0; j--) console.log(arr[i][j]); //if no. is odd then it goes arr[i].length-1 to i[1,3,5....]
        }
    }
}

let a = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1]
    
];

zigzagTraverse(a);