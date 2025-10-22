function findFirstOccrence(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ans = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            ans = mid;
            r = mid - 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
    }
    return ans;
}
function findLastOccrence(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ans = -1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            ans = mid;
            l = mid + 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
    }
    return ans;
}
function searchRange(arr, target) {
    var first = findFirstOccrence(arr, target);
    var last = findLastOccrence(arr, target);
    return [first, last];
}
