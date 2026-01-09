function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  // i: index of last unique element found (write pointer)
  let i = 0;
  // j: scanning pointer
  for (let j = 1; j < nums.length; j++) {
    // when we find a different element, advance i and write it
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]; // overwrite next unique position
    }
    // else skip duplicate
  }
  // length is i+1
  return i + 1;
}

// Example usage:
const arr = [1, 1, 2];
const newLen = removeDuplicates(arr);
console.log(newLen, arr.slice(0, newLen)); // prints 2 [1,2]
