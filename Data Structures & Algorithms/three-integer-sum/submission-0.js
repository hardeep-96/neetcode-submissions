class Solution {

    twoSum(nums, start, target) {
        const pairs = [];

        let left = start;
        let right = nums.length - 1;

        while (left < right) {

            const sum =
                nums[left] + nums[right];

            if (sum === target) {

                pairs.push([
                    nums[left],
                    nums[right]
                ]);

                left++;
                right--;

                // skip duplicate left
                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }

                // skip duplicate right
                while (
                    left < right &&
                    nums[right] === nums[right + 1]
                ) {
                    right--;
                }

            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return pairs;
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {

            // skip duplicate fixed values
            if (
                i > 0 &&
                nums[i] === nums[i - 1]
            ) {
                continue;
            }

            const target = -nums[i];

            const pairs = this.twoSum(
                nums,
                i + 1,
                target
            );

            for (const pair of pairs) {
                result.push([
                    nums[i],
                    ...pair
                ]);
            }
        }

        return result;
    }
}