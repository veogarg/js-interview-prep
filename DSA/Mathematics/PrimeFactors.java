package Mathematics;

public class PrimeFactors {
    public static void main(String[] args) {
        int number = 450;
        PrimeFactors pFactor = new PrimeFactors();
        System.out.println(number);
        pFactor.printPrimeFactors(number);
    }

    public void printPrimeFactors(int n) {
        if(n<=1) return;
        PrimeFactors pNumbers = new PrimeFactors();
        // Naive solution
        // for(int i = 2; i<n; i++){
        //     if(pNumbers.isPrime(i)){
        //         int x=i;
        //         while(n%x==0){
        //             System.out.println(i);
        //             x=x*i;
        //         }
        //     }
        // }

        // Efficient Sol
        // for(int i = 2; i*i<=n; i++){
        //     while(n%i==0){
        //         System.out.println(i);
        //         n=n/i;
        //     }
        // }
        // if(n>1) System.out.println(n);

        // More Efficient Sol
        while(n%2==0){
            System.out.println(2);
            n=n/2;
        }
        while(n%3==0){
            System.out.println(3);
            n=n/3;
        }
        for(int i = 5; i*i<=n; i+=6){
            while(n%i==0){
                System.out.println(i);
                n=n/i;
            }
             while(n%i+2==0){
                System.out.println(i+2);
                n=n/(i+2);
            }
        }
        if(n>1) System.out.println(n);

    }
    public boolean isPrime(int n) {
        if (n==1) return false;
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
