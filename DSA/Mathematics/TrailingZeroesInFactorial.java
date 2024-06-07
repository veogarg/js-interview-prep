package Mathematics;

public class TrailingZeroesInFactorial {
    public static void main(String[] args) {
        TrailingZeroesInFactorial TrailingZeroes = new TrailingZeroesInFactorial();
        int number = 12;
        System.out.println(number);

        // Naive Approach
        System.out.println(TrailingZeroes.countTrailingZeros(number));
    }

    // Naive Solution
    int countTrailingZeros1(int n) {
        int fact = 1;
        for (int i = 2; i <= n; i++) {
            fact = fact * i;
        }
        System.out.println("Factorial is: " + fact);
        int res = 0;
        while (fact % 10 == 0) {
            res++;
            fact /= 10;
        }
        return res;
    }

    // Optimised approach
    int countTrailingZeros(int n) {
        int res = 0;
        for (int i = 5; i <= n; i = i * 5) {
            res = res + (n / i);
        }
        return res;
    }

    /*
     * Trailing 0s in n! = Count of 5s in prime factors of n! = floor(n/5) +
     * floor(n/25) + floor(n/125) + ....
     */
}
