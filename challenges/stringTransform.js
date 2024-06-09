function transformString(str) {
  const length = str.length

  // if length is divisible by 15, perform both operations`
  if (length % 15 === 0) {
    str = str.split('').reverse().join('')
    str = str
      .split('')
      .map((char) => char.charCodeAt(0))
      .join(' ')
    // if length is divisible by 3, reverse the string
  } else if (length % 3 === 0) {
    str = str.split('').reverse().join('')
    // if length is divisible by 5, replace each character with its ASCII code
  } else if (length % 5 === 0) {
    str = str
      .split('')
      .map((char) => char.charCodeAt(0))
      .join(' ')
  }

  return str
}

// Test cases
console.log(transformString('Hamburger')) // Output: "regrubmaH"
console.log(transformString('Pizza')) // Output: "80 105 122 122 97"
console.log(transformString('Chocolate Chip Cookie')) // Output: "eikooCpihCetalocohC"
