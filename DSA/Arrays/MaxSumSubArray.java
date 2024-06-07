package Arrays;

public class MaxSumSubArray {
    public static void main(String[] args) {
         int []nums = {-3, 8, -2, 4, -5, 6};
//        int []nums = {-2, -3, 4, -1, -2, 1, 5, -3};

        maxSubArray(nums);
    }

    static void maxSubArray(int[] nums){
        int n = nums.length;
        int sum = nums[0];
        int maxSum = nums[0];
        for(int i = 1; i < n; i++){
            maxSum = Math.max(maxSum+nums[i], nums[i]);
            sum = Math.max(sum, maxSum);
        }
        System.out.println(sum);
    }
}
