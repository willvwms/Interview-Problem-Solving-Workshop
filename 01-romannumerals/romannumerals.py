numerals = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}


def convert(roman):

	arabic = 0
	counter = 0
	skipNextChar = False

	while counter < len(roman) - 1: 

		if skipNextChar:
			skipNextChar = False
			counter += 1
			continue
		
		thisChar = roman[counter].upper()
		nextChar = roman[counter + 1].upper()

		if numerals[thisChar] < numerals[nextChar]:
			arabic += numerals[nextChar]-numerals[thisChar]
			skipNextChar = True
		else:
			arabic += numerals[thisChar]

		counter += 1

	if not skipNextChar:
		arabic += numerals[roman[-1]]

	return arabic


def main():
	print("Roman to Arabic numeral unit tests:")
	print("III\t3\noutput: " + str(convert("III")))
	print("XII\t12\noutput: " + str(convert("XII")))
	print("VII\t7\noutput: " + str(convert("VII")))
	print("XXVI\t26\noutput: " + str(convert("XXVI")))
	print("IV\t4\noutput: " + str(convert("IV")))
	print("IX\t9\noutput: " + str(convert("IX")))
	print("XL\t40\noutput: " + str(convert("XL")))
	print("LVIII\t58\noutput: " + str(convert("LVIII")))
	print("MCMXCIV \t1994\noutput: " + str(convert("MCMXCIV")))

main()
