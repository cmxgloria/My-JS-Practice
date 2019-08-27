const fizzbuzz = num => {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}

//another sample
const palindrome = str => {
  // turn the string to lowercase
  str = str.toLowerCase()
  // reverse input string and return the result of the
  // comparisong
  return str === str.split('').reverse().join('')
}


// find vowels sample
const findVowels = str => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count;
}