https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-6-of-6-862a6403d334


107. similarity
This snippet can be used to return an array of elements that appear in two arrays.
```
const similarity = (arr, values) => arr.filter(v => values.includes(v));

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```

108. sleep
This snippet can be used to delay the execution of an asynchronous function by putting it into sleep.
```
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```

109. smoothScroll
This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
```
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```


110. sortCharactersInString
This snippet can be used to alphabetically sort the characters in a string.
```
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```

111. splitLines
This snippet can be used to split a multi-line string into an array of lines.
```
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']

```


112. stripHTMLTags
This snippet can be used to remove HTML/XML tags from a string.
```
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```

113. sum
This snippet can be used to find the sum of two or more numbers or arrays.

114. tail
This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead.

115. take
This snippet can be used to get an array with n elements removed from the beginning.

116. takeRight
This snippet can be used to get an array with n elements removed from the end.

117. timeTaken
This snippet can be used to find out the time it takes to execute a function.

118. times
This snippet can be used to iterate over a callback n times.

119. toCurrency
This snippet can be used to format a number like a currency.

120. toDecimalMark
This snippet uses the toLocaleString() function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string.

121. toggleClass
This snippet can be used to toggle a class for an element.

122. tomorrow
This snippet can be used to get a string representation of tomorrow’s date.

123. unfold
This snippet can be used to build an array using an iterator function and an initial seed value.

124. union
This snippet can be used to find the union of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat.

125. uniqueElements
This snippet uses ES6 Set and the …rest operator to get every element only once.

126. validateNumber
This snippet can be used to check whether a value is a number.

127. words
This snippet converts a string into an array of words.

