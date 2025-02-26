// Problem: Integer to Roman
// Given an integer, convert it to a Roman numeral.

function intToRoman(num) {
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    let result = '';
    for (const [symbol, value] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

// Example usage:
const num1 = 3749;
console.log(intToRoman(num1)); // Output: "MMMDCCXLIX"

const num2 = 58;
console.log(intToRoman(num2)); // Output: "LVIII"

const num3 = 1994;
console.log(intToRoman(num3)); // Output: "MCMXCIV"

// Explanation:
// The solution uses a greedy approach by matching the largest possible Roman numeral symbols to the integer value and reducing the number accordingly.
// This ensures that the Roman numeral is built correctly from the largest values to the smallest.
