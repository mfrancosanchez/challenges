function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        return "Array is empty!"
    }

    let largest = numbers[0];

    for (const number of numbers) {
        if (numbers[number] > largest) {
            largest = numbers[number];
        }
    }

    return largest;
}

// Example usage:
console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargestNumber([-10, -3, -5, -1])); // Output: -1
console.log(findLargestNumber([])); // Output: "Array is empty"