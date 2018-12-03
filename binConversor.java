import java.util.Scanner;
import java.math.BigInteger;

public class Teste {

    public static void main(String args[]){
        Scanner input = new Scanner(System.in);
        System.out.println("Pretende introduzir um numero Binario(2) ou Decimal(10)?");
        String first = input.next().toUpperCase();

        if ((first.equals("BINARIO")) || (first.equals("2"))) {
            System.out.println("Introduza o seu numero binario: ");
            String bin = input.next();
            binaryTest(bin);

        }
        else if ((first.equals("DECIMAL")) || (first.equals("10"))){
            System.out.println("Introduza o seu numero decimal: ");
            BigInteger decimal = new BigInteger("0");
            decimal = input.nextBigInteger();
            input.nextLine();
            System.out.println("O numero decimal '" + decimal + "' em binario: " +decimalBinary(decimal));
        }
        else  {
            System.out.println("Erro! A sua escolha nao foi valida!");

        }
    }

    public static int binaryDecimal(String binary) {
        double decimal=0;
        for(int i=0;i<binary.length();i++){
            if(binary.charAt(i)== '1'){
                decimal=decimal+ Math.pow(2,binary.length()-1 -i);
            }
        }
        return (int) decimal;

    }

    public static String decimalBinary(BigInteger decimal){
        String binary = "";
        BigInteger zero = new BigInteger("0");
        BigInteger dois = new BigInteger("2");

        if (decimal.equals(0)){
            return "0";
        }
        while (decimal.compareTo(zero)==1){
            binary = decimal.mod(dois) + binary;
            decimal=decimal.divide(dois);
        }

        return binary;
    }

    public static Boolean binaryTest(String bin){
        int counter = 0;
        while (counter <= bin.length() - 1) {
            if ((bin.charAt(counter) == '1') || (bin.charAt(counter) == '0')) {
                counter++;
            } else {
                System.out.println("O numero introduzido nao e binario!");
                return false;
            }
        }
        System.out.println("O numero binario '" + bin + "' em decimal: " + binaryDecimal(bin));
        return true;
    }
}
