def getLetterValue(letter):
	return ord(letter.upper()) - ord('A') + 1;

def raiseByPower(value, exponent):
	return value * (26 ** exponent)	

def excel_column_to_number(letters):
	exponent = len(letters) - 1
	accumulator	 = 0
	for i in range(0, len(letters)):
		letter = letters[i]
		letterValue = getLetterValue(letter)
		accumulator += raiseByPower(letterValue, exponent)
		exponent -= 1
	return accumulator

def main():
	inputchars = raw_input("Excel column letters: ").upper()
	print(excel_column_to_number(inputchars))

main()