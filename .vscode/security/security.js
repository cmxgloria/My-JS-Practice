//if console some data or function, have a look the network or sources
//application data security  -dont store password,secret or sensitive information      --dont use the global variable
// ---assume the hacker can read the JS code and access all your data sent to browser 
// TO secure, you can call the javaScript obfuscator to protect javascript code

//security and  avoid eval() function
let inputString = "console.log('Hello')";
eval(inputString);
//or
let inputString = "alert('Hello');";
eval(inputString);


//Prevent man-in-the-middle attack  --use SSL      --/use HTTP header:Strict-Transport-Security  --Use Cookie Attribute: Secure and HTTPOnly

//Addressing Cross-Site Scripting Attack --CSP:content secure policy(Use HTTP header:content-secure-policy) 
// --CORS: Cross Origin Resource Sharing(Use HTTP header: Access-control-Allow-Origin)



