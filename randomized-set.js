class RandomizedSet {
    constructor() {
        this.nums = [];
        this.map = new Map();
    }

    insert(val) {
        if (this.map.has(val)) {
            return false;
        }
        this.map.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }
        const index = this.map.get(val);
        const lastElement = this.nums[this.nums.length - 1];
        this.nums[index] = lastElement;
        this.map.set(lastElement, index);
        this.nums.pop();
        this.map.delete(val);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    }
}

// Example usage:
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // true
console.log(randomizedSet.remove(2)); // false
console.log(randomizedSet.insert(2)); // true
console.log(randomizedSet.getRandom()); // 1 or 2
console.log(randomizedSet.remove(1)); // true
console.log(randomizedSet.insert(2)); // false
console.log(randomizedSet.getRandom()); // 2
