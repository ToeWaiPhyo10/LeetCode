// Problem: Text Justification
// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

function fullJustify(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (const word of words) {
        if (lineLength + word.length + line.length > maxWidth) {
            for (let i = 0; i < maxWidth - lineLength; i++) {
                line[i % (line.length - 1 || 1)] += ' ';
            }
            result.push(line.join(''));
            line = [];
            lineLength = 0;
        }
        line.push(word);
        lineLength += word.length;
    }

    result.push(line.join(' ').padEnd(maxWidth));
    return result;
}

// Example usage:
const words1 = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth1 = 16;
console.log(fullJustify(words1, maxWidth1));

const words2 = ["What","must","be","acknowledgment","shall","be"];
const maxWidth2 = 16;
console.log(fullJustify(words2, maxWidth2));

const words3 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
const maxWidth3 = 20;
console.log(fullJustify(words3, maxWidth3));

// Explanation:
// The solution uses a greedy approach to pack words into lines, distributing spaces evenly between words.
// For the last line, it left-justifies the text by padding spaces at the end.
