package Mathematics;

public class DivisorsOfANumber {
    public static void main(String[] args) {
        int number = 450;
        DivisorsOfANumber pNumbers = new DivisorsOfANumber();
        System.out.println(number);
        pNumbers.printDivsors(number);
    }

    public void printDivsors(int n) {
        // Naive solution
        // for(int i = 1; i<=n; i++){
        //     if(n%i == 0){
        //         System.out.println(i);
        //     }
        // }

        // Efficient Sol(Not sorted)
        for(int i = 1; i*i<=n; i++){
            if(n%i == 0){
                 System.out.println(i);
                 if(i!=n/i) System.out.println(n/i);
            }
        }

        // More Efficient Sol(Sorted)
        // int i;
        // for(i = 1; i*i<=n; i++){
        //     if(n%i == 0){
        //          System.out.println(i);
        //     }
        // }
        // for(; i>1; i--){
        //     if(n%i == 0){
        //          System.out.println(n/i);
        //     }
        // }
    }
}
