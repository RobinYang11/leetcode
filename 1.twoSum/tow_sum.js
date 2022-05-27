

const start = Date.now();
console.log(twoSum1([2, 7, 3, 5, 35, 35, 35, 11, 15], 9));
const end = Date.now();
console.log(end - start)

/**
 * 解法1 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * 散列查找 
 * 1.遍历每一项判断map[target-(target-当前元素)]
 * 2.如果存在，则直接返回 [map[target-(target-当前元素)],当前元素索引],
 * 如果不存在 则 map[target-当前元素] =当前索引
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
function twoSum1(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    if (map[target - temp] !== undefined) {
      return [map[target - temp], i]
    }

    // if (map[target - target + nums[i]] !== undefined) {
    //   return [map[target - target + nums[i]], i]
    // }

    // if (map[target - (target - nums[i])] !== undefined) {
    //   return [map[target - (target - nums[i])], i]
    // }

    map[temp] = i;
  }
}


