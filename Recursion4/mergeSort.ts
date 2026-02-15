function merge2SortedArray(nums1: number[], nums2: number[]): number[] {
    let ans: number[] = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            ans.push(nums1[i]);
            i++;
        } else {
            ans.push(nums2[j]);
            j++;
        }
    }


    if (i == nums1.length) {
        //while nums1 get finished
        while (j < nums2.length) {
            //remaining elements of nums1 are added
            ans.push(nums2[j]);
            j++;
        }
    } else {
        while (i < nums1.length) {
            //remaining elements of nums2 are added
            ans.push(nums1[i]);
            i++;
        }
    }
    return ans;
};

let nums1 = [2, 4, 22, 41, 55, 78, 89, 96];
let nums2 = [3, 5, 8, 19, 39, 76, 91, 98];
console.log(merge2SortedArray(nums1, nums2));