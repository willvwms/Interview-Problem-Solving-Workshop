import java.io.*;
import java.util.Scanner;

public class ExcelColumns {

	public static int getLetterValue (char letter) { 

		// return ord(letter.upper()) - ord('A') + 1;
		return 1; 
	}
		

	public static int raiseByPower(int value, int exponent) {
		// return value * (26 ** exponent)	
		return 1;
	}
	

	public static int convertColumn(String columnLetters) {
		// exponent = len(letters) - 1
		// accumulator	 = 0
		// for i in range(0, len(letters)):
		// 	letter = letters[i]
		// 	letterValue = getLetterValue(letter)
		// 	accumulator += raiseByPower(letterValue, exponent)
		// 	exponent -= 1
		// return accumulator

		return 1;
	}

	public static void main (String[] args) throws IOException {
		Scanner input = new Scanner(System.in);
		System.out.print("Excel column letters: ");
		String columnLetters = input.next().toUpperCase();
		System.out.println(convertColumn(columnLetters));

	}

}