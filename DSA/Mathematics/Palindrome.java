package Mathematics;

public class Palindrome {
    public static void main(String[] args) {
        int number = 45654;
        Palindrome isPallindrome = new Palindrome();
        System.out.println(number);
        System.out.println(isPallindrome.isPallindrome(number));
    }

    public boolean isPallindrome(int n) {
        int numToCheck = n;
        int rev = 0;
        while (numToCheck != 0) {
            rev = (rev * 10) + (numToCheck % 10);
            numToCheck = numToCheck / 10;
        }
        return (n == rev);
    }
}
// Time Complexity => ø(d), where d is no. of digits