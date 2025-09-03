function binarySearch(arr: number[], target: number) : number {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target){
            l = mid + 1;
        } else if (arr[mid] > target) {
            r = mid - 1;
        }
    }
    return -1;  //target not found in array
}

let arr = [22, 33, 44, 55, 66, 77, 88, 99, 110];
let ans = binarySearch(arr, 99);
console.log(ans);
