##Introduction
To make asynchronous event handling easier, promises were introduced in JavaScript in ES6:

Mozilla Development Network: Promises
A promise is an object that handles asynchronous data. A promise has three states:

pending : when a promise is created or waiting for data.
fulfilled : the asynchronous operation was handled successfully.
rejected : the asynchronous operation was unsuccessful.
The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method to the original promise.

In this lesson, we will explain how to use fetch(), which uses promises to handle requests. Then, we will simplify requests using async and await.

We’ll use the Datamuse API for GET requests and Rebrandly URL Shortener API for POST requests. For you to complete the lessons on POST, make sure you create a Rebrandly API Key by following the instructions in the article below:

Codecademy Articles: Rebrandly URL Shortener API .
```
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};
    
const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
};

const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

jsonButton.addEventListener('click', generateJson);
```

//You’ll see JSON being displayed on the page. JSON, JavaScript Object Notation, will be the format in which our data is sent to us. That button you click produces a GET request. That’s right, you’ve just made a GET request!

##fetch() GET Requests I
The first type of requests we’re going to tackle are GET requests using fetch()

MDN: Fetch API.
The fetch() function:

Creates a request object that contains relevant information that an API needs.
Sends that request object to the API endpoint provided.
Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.
In the next exercise we’ll go over the boilerplate code for using fetch() and walk through what each step does!
```
fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});
```
##fetch() GET Requests III
In the previous exercise, you wrote the boilerplate code for a GET request using fetch() and .then(). In this exercise, you’re going to use that code and manipulate it to access the Datamuse API and render information in the browser.

Datamuse API.
If the request is successful, you’ll get back an array of words that sound like the word you typed into the input field.

You may get some errors as you complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, you should be receiving no errors.
question
1.
At the top of main.js, create a const called url. Assign url to the following URL as a string:

https://api.datamuse.com/words
2.
Below url, create another const and call it queryParams. Assign it a value of '?sl='

queryParams will be the start of your query string and will narrow your search to words that sounds like your word.

3.
Inside the getSuggestions() function, create a const called wordQuery and assign it inputField.value.

You’ll need wordQuery to store the value of what is being typed into the input field.

You will be working inside getSuggestions() for the remainder of this exercise.

4.
Now it’s time to add a query string to the URL with all the necessary parameters.

Create another const called endpoint, assign it value of a string that is url, queryParams, and wordQuery concatenated in that order.

5.
Call the fetch() function and pass in endpoint as an argument.

6.
Chain a .then() method to the fetch() function. Pass it a success arrow callback function as an argument. The callback function should take response as its single parameter.

7.
Inside the success callback function, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value. If so, call the function renderJsonResponse() and pass in response as an argument. Then, run your code.

Then type in a word to and click the submit button to view the JSON that came back. The status of the promise return from fetch() will be resolved.

The code for renderJsonResponse() can be viewed at public/helperFunctions.js.

8.
Delete renderJsonResponse(response) and replace it with return response.json().

By returning response.json(), the next function that is .then() chained to it will receive a Promise with JSON data.

9.
Below the condition’s code block, add this code to raise an exception if the request failed: throw new Error('Request failed!');

10.
Separate the success callback function and the error callback function with a comma. The error callback function will also be an arrow function that takes one parameter, networkError. In the code block of the arrow function, log networkError.message to the console.

answer:
```
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

```
##fetch() GET Requests IV

In the previous exercise, you created the query URL, called the fetch() function and passed it the query URL and a settings object. Then, you chained a .then() method and passed it two functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

In this exercise, you’ll now take the information that was returned with the promise and manipulate the webpage!

```
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})

```
##fetch() Post Requests III
In the previous exercise, you created the boilerplate code for making a POST request using fetch() and .then(). In this exercise, you’re going to update that boilerplate code to allow you to shorten a URL using the Rebrandly URL Shortener API.

Rebrandly API.
If you haven’t already created a Rebrandly API key, read through the Rebrandly sign up guide:

Codecademy Articles: Rebrandly URL Shortener API.
If you reset the exercise at any point, you will have to paste in your API key again at the top!
Underneath urlToShorten, create another const named data, and assign it to the result of calling the method JSON.stringify() with {destination: urlToShorten} as an argument.

The reason for creating data is to prepare the information needed to send in the body.
main.js
```
// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

```

helperFunction.js
```
// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {  
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
}

// Manipulates responseField to render an unformatted response
const renderRawResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){  
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseField.innerHTML = `${structuredRes}`;
  }
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (response) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {}
  for(let key in response){
    rawJson[key] = response[key]
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`
}
```

##fetch() POST Requests IV
In the previous exercise you’ve positioned yourself to make the POST request by providing the endpoint and the object containing all the necessary information. In this exercise you’ll handle the response.

The request returns a Promise which will either be resolved or rejected. If the promise resolves, you can use that information and the ok status. Let’s implement that knowledge into your code!

If you reset the exercise at any point, you will have to paste in your API key again at the top!
Instructions
1.
Chain a .then() method to the end of the fetch() function you wrote in the previous exercise. As its first argument, pass it an arrow function as a callback that takes response as its single parameter.

2.
Inside the block of the function you made in Step 1, use a conditional statement to check the value of the ok property of response. If it evaluates to a truthy value, call renderJsonResponse() and pass in response.

Run the code.

Now, if you post a URL, you should see the object that was sent back!

renderJsonResponse() is a helper function found in public/helperFunctions.js.

3.
Great, now that you see the raw object, you will need to pass the JSON to the next .then(). Delete renderJsonResponse(response) and replace it with return response.json()

4.
Below the curly braces of the conditional statement, throw a new Error in case response.ok is falsy.

The message the error should raise is ‘Request failed!’.

5.
Outside of the code block from the first callback function you wrote, add another arrow callback function that takes networkError as a single parameter.

console.log() the networkError.message inside of the callback function you just wrote.

By adding this second callback, you’re safeguarding yourself in the rare event that the network returns an error!
```
// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}
```

##fetch() POST Requests V
You’re almost done with the POST request you started a few lessons back!

In fact, this time you’ll add another .then() to the chain to finally make the information available to your webpage!

If you reset the exercise at any point, you will have to paste in your API key again at the top!
```
// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
  })
}
```
##async GET Requests I
Let’s take a minute to appreciate what you’ve accomplished so far:

used fetch() to make GET and POST requests.
check the status of the responses coming back
catch errors that might possibly arise
taking successful responses and rendering it on the webpage
That is fantastic! It’s the basis of how the internet works!

In the following exercises, we’re going to take what you’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: async and await. You read that right, you did the hard part already, now it’s time to make it easier.

The structure for this request will also be slightly different. Notice the new keywords async and await, as well as the try and catch statements.

We’ll be going over how to write the boilerplate code for async GET requests in the next lesson.

##async GET Requests II
We are going to walk through and recreate the boilerplate code necessary to create a GET request using the async and await.

Here are some key points to keep in mind as we walk through the code:

Using an async function that will return a promise.
await can only be used in an async function. await allows a program to run while waiting for a promise to resolve.
In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run.
Feel free to refer to the async/await GET diagram at any point while completing this exercise:

async/await GET diagram
```
// const getData = async () => {
//   try {
//     const response = await fetch('https://api-to-call.com/endpoint');
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       return jsonResponse;
//     }
//     throw new Error('Request failed!');
//   } catch (error) {
//     console.log(error);	
//   }
// }


```

##async GET Requests III
In the previous exercise, we created the boilerplate code for making a GET request using async and await.

In this exercise, you’re going to build on previously created boilerplate code to get nouns that describe the inputted word from the Datamuse API:

Datamuse API Documentation.

helperFunction.js
```
// Formats response to look presentable on webpage
const renderResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  // Creates an empty array to contain the HTML strings
  let wordList = [];
  // Loops through the response and caps off at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return
}

// Renders response before it is modified
const renderRawResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // Creates an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for(let key in response){
    rawJson[key] = response[key];
  }
  // Converts JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
}
```
main.js
```
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint);
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

```

##async POST Requests I
Now that you’ve made an async GET request, let’s start on getting you familiar the async POST request.

As with the other GET and POST requests that you’ve been making, an async POST request requires more information. Take a look at the diagram.

We still have the same structure of using try and catch as before. But, in the fetch() call, we now have to include an additional argument that contains more information like method and body.

We’ll be explaining the why’s and how’s of the boilerplate code for async POST requests in the next lesson.
##async POST Requests II
Now we’re going to piece together a POST request using async and await.

Feel free to refer to the async/await diagram below at any point while completing this exercise:

async/await POST diagram
```
// const getData = async () => {
//   try {
//     const response = await fetch('https://api-to-call.com/endpoint', {
//       method: 'POST',
//       body: JSON.stringify({id: 200})
//     })
//     if(response.ok){
//       const jsonResponse = await response.json();
//       return jsonResponse;
//     }
//     throw new Error('Request failed!');
//   } catch(error) {
//     console.log(error);
//   }
// }

```
##async POST Requests III
Since you’ve created the boilerplate code for a POST request, the next step is to incorporate that experience and logic into making a real request.

In this exercise, you’ll need to retrieve your Rebrandly API key to access the Rebrandly API.

Rebrandly API Keys.
If you reset the exercise at any point, you will have to paste in your API key again at the top!
helperFunction.js
```
// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {  
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
}

// Manipulates responseField to render an unformatted response
const renderRawResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){  
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseField.innerHTML = `${structuredRes}`;
  }
}

```
main.js
```
// information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
```
##Review Requests II
Let’s recap on the concepts covered in the previous exercises:

GET and POST requests can be created a variety of ways.

Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.

Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

fetch() is a web API that can be used to create requests. fetch() will return promises.

We can chain .then() methods to handle promises returned by fetch().

The .json() method converts a returned promise to a JSON object.

async is a keyword that is used to create functions that will return promises.

await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.

await can only be used within functions declared with async.

Instructions
Congratulations on learning all about AJAX requests using fetch(), async, and await! These concepts are fundamental and will help you develop more robust web apps!

Play around the with browser and code to make GET and POST requests. If you’re going to make POST requests, make sure you assign apiKey your Rebrandly API key and run the code!

If you want to challenge yourself:

Rewrite the requests from scratch.
Replace the helper methods with your own code.
Use different APIs to make GET/POST requests using async/await.
helperfunction.js
```
// wordSmith helperFunctions are on lines 4 - 50
// byteSize helperFunctions are on lines 52 - 76

// Formats Response to look presentable on webpage
const renderWordResponse = (res) => {
  // Handles if res is falsey
  if(!res){
    console.log(res.status);
  }
  // In case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  // Creates an array to contain the HTML strings
  let wordList = []
  // Loops through the response and maxxing out at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // Creates a list of words
    wordList.push(`<li>${res[i].word}</li>`);
  }
  // Joins the array of HTML strings into one string
  wordList = wordList.join("");

  // Manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return;
}

// Renders response before it is modified
const renderRawWordResponse = (res) => {
  // Takes the first 10 words from res
  let trimmedResponse = res.slice(0, 10);
  // Manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonWordResponse = (res) => {
  // Creating an empty object to store the JSON in key-value pairs
  let rawJson = {};
  for(let key in response){
    rawJson[key] = response[key];
  }
  // Converting JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  // Manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`;
}

// Manipulates responseField to render a formatted and appropriate message
const renderByteResponse = (res) => {
  if(res.errors){
    // Will change the HTML to show this error message if the response had an error
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // If there was no error, then the HTML will show this message
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
}

// Manipulates responseField to render an unformatted response
const renderRawByteResponse = (res) => {
  if(res.errors){
    // Changes the HTML to show this error message if the response had an error
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Changes the HTML to show this raw response if there was no error
    // Formats the response into a more organized structure
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;

    responseField.innerHTML = `${structuredRes}`;
  }
}

```
main.js
```
// NOTE: wordSmith functions from lines 4 - 39
// NOTE: byteSize functions from lines 48 - 81 (remember to add your API key!)

// information to reach API
const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';

// selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = dataMuseUrl + queryParams + wordQuery;

  try{
    const response =  await fetch(endpoint);
    if(response.ok){
      let jsonResponse = await response.json();
			renderWordResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

// clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// information to reach Rebrandly API
const apiKey = '<Your API Key>';
const rebrandlyEndpoint = 'https://api.rebrandly.com/v1/links';

// element selector
const shortenButton = document.querySelector('#shorten');

// AJAX functions
const shortenUrl = async () =>{
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  try{
    const response =  await fetch(rebrandlyEndpoint, {
      method: 'POST',
      body: data,
      headers: {
        "Content-type": "application/json",
        'apikey': apiKey
      }
    })
    if(response.ok){
      const jsonResponse = await response.json();
			renderByteResponse(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

```











