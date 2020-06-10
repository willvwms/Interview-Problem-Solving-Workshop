import java.util.HashMap;

class RomanNumerals {

	public static void main (String[] args)  {
		System.out.println("Roman to Arabic numeral unit tests:");
		System.out.println("III \t3\noutput: " + String.valueOf(romanToInt("III")));
		System.out.println("XII \t12\noutput: " + String.valueOf(romanToInt("XII")));
		System.out.println("VII \t7\noutput: " + String.valueOf(romanToInt("VII")));
		System.out.println("XXVI \t26\noutput: " + String.valueOf(romanToInt("XXVI")));
		System.out.println("IV \t4\noutput: " + String.valueOf(romanToInt("IV")));
		System.out.println("IX \t9\noutput: " + String.valueOf(romanToInt("IX")));
		System.out.println("XL \t40\noutput: " + String.valueOf(romanToInt("XL")));
	}

    public static int romanToInt(String roman) {

    	roman = roman.toUpperCase();

    	HashMap<Character, Integer> numerals = new HashMap<Character, Integer>();
	    numerals.put('I', 1);
	    numerals.put('V', 5);
	    numerals.put('X', 10);
	    numerals.put('L', 50);
	    numerals.put('C', 100);
	    numerals.put('D', 500);
	    numerals.put('M', 1000);

    	int arabic = 0;
		int counter = 0;
		boolean skipNextChar = false;
	
		while (counter < roman.length() - 1) { 
		
			if (skipNextChar) {
				skipNextChar = false;
				continue;
			}
			
			char thisChar = roman.charAt(counter);
			char nextChar = roman.charAt(counter + 1);

			if (numerals.get(thisChar) < numerals.get(nextChar)) {
				arabic += numerals.get(nextChar) - numerals.get(thisChar);
				skipNextChar = true;
			}
			else
				arabic += numerals.get(thisChar);

			counter++;
		}

		if (!skipNextChar)
			arabic += numerals.get(roman.charAt(roman.length() - 1));
			
		return arabic;
	}
}