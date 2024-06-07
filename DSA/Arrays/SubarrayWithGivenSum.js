var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    debugger
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum - k;

        if (map.has(rem)) {
            count += map.get(rem);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};

console.log(subarraySum([1], 1))