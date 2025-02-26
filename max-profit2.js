// Problem: Best Time to Buy and Sell Stock II
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

function maxProfit(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 7

const prices2 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices2)); // Output: 4

const prices3 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices3)); // Output: 0

// Explanation:
// The solution uses a greedy approach to accumulate profits from every upward trend in stock prices.
// By buying on a day and selling on the next day whenever the price increases, we capture all upward trends.
// This approach ensures the maximum profit is achieved.
