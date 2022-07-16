const plugboard = (letter, swaps) => {
  return swaps[letter] || letter 
}

console.log(plugboard('a', { a: 'b'}))