function binarySearch(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
    }
    return -1; //target not found in array
}
var arr = [22, 33, 44, 55, 66, 77, 88, 99, 110];
var ans = binarySearch(arr, 99);
console.log(ans);
