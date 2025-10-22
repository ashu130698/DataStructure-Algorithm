function reverseArrayIndex(arr: number[], l: number, r: number) {
    while (l <= r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

let arr = [10, 20, 30, 40, 50, 60,70];
console.log(arr);
reverseArrayIndex(arr, 2, 6);
console.log(arr);
