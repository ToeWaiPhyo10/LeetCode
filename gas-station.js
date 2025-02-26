function canCompleteCircuit(gas, cost) {
    let totalSurplus = 0;
    let currentSurplus = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        const surplus = gas[i] - cost[i];
        totalSurplus += surplus;
        currentSurplus += surplus;

        if (currentSurplus < 0) {
            currentSurplus = 0;
            startIndex = i + 1;
        }
    }

    return totalSurplus >= 0 ? startIndex : -1;
}

// Example usage:
const gas1 = [1, 2, 3, 4, 5];
const cost1 = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas1, cost1)); // Output: 3

const gas2 = [2, 3, 4];
const cost2 = [3, 4, 3];
console.log(canCompleteCircuit(gas2, cost2)); // Output: -1
