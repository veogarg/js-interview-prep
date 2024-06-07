package Arrays;

public class TrappingTheRainWater {
    public static void main(String []args){
        int []input = {3, 0, 2, 0, 4};
        int n = input.length;
        int []lMaxArr = new int[n];
        int []rMaxArr = new int[n];

        lMaxArr[0] = input[0];
        rMaxArr[n-1] = input[n-1];

        for(int i = 1; i<n; i++) lMaxArr[i] = Math.max(input[i], lMaxArr[i-1]);

        for(int i = n-2; i>=0; i--) rMaxArr[i] = Math.max(input[i], rMaxArr[i+1]);

        int res = 0;
        for(int i= 0; i<n;i++){
            res += Math.min(lMaxArr[i], rMaxArr[i]) - input[i];
        }
        System.out.println(res);
    }
}
