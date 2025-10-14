function spiralmatrix(arr: number[][]) : number[] {
    let ans: number[] = [];

    let total = arr.length * arr[0].length;

    let tw = 0;
    let bw = arr.length - 1;
    let lw = 0;
    let rw = arr[0].length - 1;

    while (total > 0) {
        for (let j = tw; j <= rw && total>0; j++){
            ans.push(arr[tw][j]);
            total--;
        }
        tw++;
        for (let i = tw; i <= bw && total > 0; i++) {
          ans.push(arr[i][rw]);
          total--;
        }
        rw--;
        for (let j = rw; j >= lw && total > 0; j--) {
          ans.push(arr[bw][j]);
          total--;
        }
        bw--;
        for (let i = bw; i >= tw && total > 0; i--) {
          ans.push(arr[i][lw]);
          total--;
        }
        lw++;
    }
    return ans;
};

let a = [
    [2, 3, 4, 5, 6, 7],
    [9, 8, 7, 6, 5, 4],
    [1, 3, 5, 7, 9, 3]
    
]

spiralmatrix(a);