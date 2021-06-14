/**
 * Palindrome takes any string or number.
 * The return value is if the input is a palindrome
 * @param {input} Any - Any variable
 * @returns Boolean
 */
function palindrome(input) {

    let isPalindrome = true; 

    input = input
        .toLowerCase()
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, "");

    for (let i = 0; i < (Math.floor(input.length/2)); i++) {

        if (input.charAt(i) !== input.charAt(input.length-i-1)) {
            console.log(`Mismatch:${input.charAt(i)} !== ${input.charAt(input.length-i-1)}`);
            isPalindrome = false;
            break; // exits entire for-loop
        }

    }

    return isPalindrome;

}

const testAndPrint = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`\n\n"${arr[i]}"`);
        console.log(`Palindrome : ${palindrome(arr[i])}`);
        console.log();
    }
}

const positiveTests = [
    "0110",
    'a1a',
    '1a1',
    "tattarrattat",
    "A dog! A panic in a pagoda.",
    "A lot not new I saw as I went on to L.A.",
    "A man, a plan, a canal – Panama.",
    "A new order began, a more Roman age bred Rowena.",
    "A Toyota. Race fast, safe car. A Toyota.",
    "Able was I ere I saw Elba.",
    "Amore, Roma.",
    "Animal loots foliated detail of stool lamina."
]

const negativeTests = [
    "no",
    "not this either",
    "txaadefdaaxt",
    '0aet'
]


// console.log("--------------------------------------------")
// console.log("--------------------------------------------")

// console.log('\n\njourney:');
// console.log("isPalindrome:" + palindrome('abcdefghij'));
// console.log();

// console.log("********************************************")
// console.log('\n\ntattarrattat:');
// console.log("isPalindrome:" + palindrome('tattarrattat'));
// console.log();

// console.log("********************************************")
// console.log('\n\nA lot not new I saw as I went on to L.A.:');
// console.log("isPalindrome:" + palindrome('A lot not new I saw as I went on to L.A.'));
// console.log();

// console.log("********************************************")
// console.log('\n\nA new order began, a more Roman age bred Rowena.:');
// console.log("isPalindrome:" + palindrome('A lot not new I saw as I went on to L.A.'));
// console.log();
// console.log("--------------------------------------------")
// console.log("--------------------------------------------")


console.log("--------------------------------------------")
console.log("--------------------------------------------")
console.log("\nPOSITIVE TESTS:")
testAndPrint(positiveTests);
console.log("--------------------------------------------")
console.log("--------------------------------------------")
console.log("\nNEGATIVE TESTS:")
testAndPrint(negativeTests);



