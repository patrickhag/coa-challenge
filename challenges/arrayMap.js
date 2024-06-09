function subArrayWithSum(arr, target) {
  let start = 0
  let currentSum = 0

  // loop thru all numbers
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end]

    // check if current sum is greater than target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start]
      start++
    }

    // check if current sum is equal to target
    if (currentSum === target) {
      return true
    }
  }

  return false
}

// Test cases
console.log(subArrayWithSum([4, 2, 7, 1, 9, 5], 17)) // Output: true
console.log(subArrayWithSum([1, 2, 3, 4, 5], 9)) // Output: true
console.log(subArrayWithSum([1, 2, 3, 2, 5], 15)) // Output: false
console.log(subArrayWithSum([1, 2, 3, 4, 5], 16)) // Output: false
console.log(subArrayWithSum([-1, 2, 3, -4, 5], 0)) // Output: true
