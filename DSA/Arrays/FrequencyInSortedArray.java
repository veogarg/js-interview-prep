package Arrays;

public class FrequencyInSortedArray {
    public static void main(String args[]){
//        int arr[] = {7,7,7,9,13,13,91};
//        int arr[] = {40,50,50,50};
        int arr[] = {1,1,1,1,1,1,1,2};
        int n = arr.length;
        int freq = 1;
        for (int i = 1; i < arr.length; i++){
            if(arr[i] != arr[i-1]){
                System.out.println("Frequency of "+arr[i-1]+" is: "+freq);
                freq = 1;
            }else if(i==n-1 && arr[i] == arr[i-1]){
                System.out.println("Frequency of "+arr[i]+" is: "+ (freq+1));
            }else {
                freq++;
            }
        }
        if(n==1 || arr[n-1] != arr[n-2]){
            System.out.println("Frequency of "+arr[n-1]+" is: 1");
        }
    }
}
