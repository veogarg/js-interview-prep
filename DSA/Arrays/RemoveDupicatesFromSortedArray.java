package Arrays;
import java.util.*;
import java.lang.*;
import java.io.*;;

public class RemoveDupicatesFromSortedArray {

    public static void main(String[] args) throws Exception {
        int arr[] = {10, 20, 20, 30, 30, 30};
        System.out.println("Before Removal");

       for(Integer i: arr)
       {
       		System.out.print(i+" ");
       }
       System.out.println();
       System.out.println("After Removal");
       ArrayList<Integer> newArr = remDups(arr);
       System.out.println(newArr.size());
       for(Integer i: newArr){
        System.out.print(i+" ");
       }
    }
    
    static ArrayList<Integer> remDups(int arr[]){
        ArrayList <Integer> temp = new ArrayList<Integer>();
        int res = 1;
        temp.add(arr[0]);
        for(int i=1; i< arr.length; i++){
            if(temp.get(res-1)!= arr[i]){
                temp.add(arr[i]);
                res++;
            }
        }
        return temp;
    } 

}
