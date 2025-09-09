class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = {};
    for (let str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!map[sortedStr]) {
        map[sortedStr] = [str];
      } else {
        map[sortedStr].push(str);
      }
    }
    return Object.values(map);
  }
}
