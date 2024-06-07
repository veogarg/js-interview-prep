package Strings;

public class Subsequence {

    public static void main(String []args) {
        String s1 = "geeksforgeeks";
        String s2 = "grges";
        int s1len = s1.length();
        int s2len = s2.length();
        System.out.println("result is: "+ isSubSeqRec(s1, s2, s1len, s2len));
    }
     static boolean isSubSeq(String s1, String s2, int s1len, int s2len){
        int i =0, j=0;
        if(s2len > s1len) return false;
        while(i<s1len && j<s2len){
            if(s2.charAt(j) == s1.charAt(i)){
                j++;
                i++;
            }else {
                i++;
            }
        }
        return j==s2len;
    }

    static boolean isSubSeqRec(String s1, String s2, int s1len, int s2len){
        if(s2len == 0) return true;
        if(s1len == 0) return false;

        if(s1.charAt(s1len-1) == s2.charAt(s2len-1)){
            return isSubSeqRec(s1, s2, s1len-1, s2len-1);
        }
        return isSubSeqRec(s1, s2, s1len-1, s2len);

    }

}
