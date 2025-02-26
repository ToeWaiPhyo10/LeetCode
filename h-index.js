// Problem: H-Index
// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper,
// return the researcher's h-index.
// The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

function hIndex(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    while (h < citations.length && citations[h] > h) {
        h++;
    }
    return h;
}

// Example usage:
const citations1 = [3, 0, 6, 1, 5];
console.log(hIndex(citations1)); // Output: 3

const citations2 = [1, 3, 1];
console.log(hIndex(citations2)); // Output: 1

// Explanation:
// The solution sorts the citations in descending order and finds the maximum h such that there are at least h papers with h or more citations.
// This approach ensures that the h-index is calculated correctly by iterating through the sorted list.
