package Arrays;

public class LeadersInAnArray {
    public static void main(String args[])
    {
//        int arr[] = {7, 10, 4, 10, 6, 5, 2}, n = 7;
        int arr[] = {4,9,3,1,5}, n = 5;
        leaders(arr, n);
    }

    public static void leaders(int []a, int n){
        System.out.println(a[n-1]);
        int currMax = a[n-1];
        for(int i = n - 2; i>=0;i--){
            if(a[i] > currMax) {
                currMax = a[i];
                System.out.println(a[i]);
            }
        }
    }
}
