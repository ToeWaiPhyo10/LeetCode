// Problem: Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Given a roman numeral, convert it to an integer.

function romanToInt(s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanToIntMap[s[i]];
        const next = romanToIntMap[s[i + 1]];
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
}

// Example usage:
const s1 = "III";
console.log(romanToInt(s1)); // Output: 3

const s2 = "LVIII";
console.log(romanToInt(s2)); // Output: 58

const s3 = "MCMXCIV";
console.log(romanToInt(s3)); // Output: 1994

// Explanation:
// The solution iterates through the Roman numeral string, using a map to convert each symbol to its integer value.
// It handles subtraction cases by checking if the current symbol is less than the next symbol.
