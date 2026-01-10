function minDiffPair(nums: number[]): [number, number] {
  nums.sort((a, b) => a - b);
  let minDiff = Infinity;
  let pair: [number, number] = [0, 0];

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      pair = [nums[i - 1], nums[i]];
    }
  }
  return pair;
}

console.log(minDiffPair([4, 9, 1, 32, 13])); // [4,1] sorted becomes [1,4]
