function iterate(arr: number[][]): void {
    for (let j = 0; j < arr[0].length; j++){   //here we dont have i that why we use 0 which has same length has others
        for (let i = arr.length - 1; i >= 0; i--){
            console.log(arr[i][j]);
        }
    }
}

let a = [
    [2, 3, 4, 5],
    [6, 7, 8, 9],
    [2, 4, 6, 8]
];

iterate(a);
