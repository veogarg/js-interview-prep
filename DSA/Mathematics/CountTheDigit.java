package Mathematics;

class CountTheDigit {
    public static void main(String[] args) {
        int number = 123;
        CountTheDigit reversedNumber = new CountTheDigit();
        System.out.println(number);
        System.out.println(reversedNumber.digitCount(number));
    }

    public int digitCount(int n) {
        int res = 0;
        while (n > 0) {
            n = n / 10;
            res++;
        }
        return res;
    }
}
// Time Complexity => ø(d), where d is no. of digits
