function threeSum(nums: number[]): number[][] {
  // sort array to use two-pointer search for pairs
  nums.sort((a, b) => a - b);

  const res: number[][] = [];

  // iterate fixing one element at a time
  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // two-pointer on the subarray nums[i+1..end]
    let l = i + 1;
    let r = nums.length - 1;
    const target = -nums[i];

    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) {
        // found a triplet
        res.push([nums[i], nums[l], nums[r]]);
        // move left skipping duplicates
        while (l < r && nums[l] === nums[l + 1]) l++;
        // move right skipping duplicates
        while (l < r && nums[r] === nums[r - 1]) r--;
        // move both pointers inward after adding result
        l++;
        r--;
      } else if (sum < target) {
        // need bigger sum: move left pointer
        l++;
      } else {
        // sum > target: move right pointer
        r--;
      }
    }
  }
  return res;
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // prints [[-1,-1,2],[-1,0,1]]
