function reverseArray(arr: number[]): void {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        //swap arr[l] and arr [r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}

let arr = [10, 20, 30, 40, 50, 60];
console.log(arr);
reverseArray(arr);
console.log(arr);

