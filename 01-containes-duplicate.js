class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const map = {};
    for (let num of nums) {
      if (!map[num]) {
        map[num] = true;
      } else {
        return true;
      }
    }
    return false;
  }
}
