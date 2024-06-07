package Mathematics;

public class PrimeNumbers {
    public static void main(String[] args) {
        int number = 23;
        PrimeNumbers pNumbers = new PrimeNumbers();
        System.out.println(number);
        System.out.println(pNumbers.isPrime(number));
    }

    public boolean isPrime(int n) {
        if (n==1) return false;
        // Naive solution
        // for(int i = 2; i<n; i++){
        //     if(n%i == 0){
        //         return false;
        //     }
        // }
        // return true;

        // Efficient Sol
        // for(int i = 2; i*i<=n; i++){
        //     if(n%i == 0){
        //          return false;
        //     }
        // }
        // return true;

        // More Efficient Sol
        if(n==2 || n==3) return true;
        if(n%2 == 0 || n%3 == 0) return false;
        for(int i = 5; i*i<=n; i+=6){
            if(n%i == 0){
                 return false;
            }
        }
        return true;
    }
}
