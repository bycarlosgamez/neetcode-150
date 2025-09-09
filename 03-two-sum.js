class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let map = [];
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (map.includes(diff)) {
        return [map.indexOf(diff), i];
      }
      map.push(nums[i]);
    }
  }
}
