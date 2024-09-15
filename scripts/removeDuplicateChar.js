function removeDuplicates(arr) {
  const seen = new Set();
  const result = [];

  for (const value of arr) {
    if (!seen.has(value)) {
seen.add(value);
result.push(value);
    }
  }

  console.log("");
  console.log(seen);
  console.log(result);
  return result;
}

removeDuplicates([1, 2, 3, 1, 4, 2, 5]); // Output: [1, 2, 3, 4, 5]
removeDuplicates(["a", "b", "a", "c", "b"]); // Output: ['a', 'b', 'c']
removeDuplicates(["K", "K", "K"]); // Output: ['a', 'b', 'c']
removeDuplicates([]); // Output: ['a', 'b', 'c']
