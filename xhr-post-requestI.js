const xhr = new XMLHttpRequest();//creat a new object
const url = 'https://api-to-call.com/endpoint';
const data=JSON.stringify({id:'200'});//converts data to a string
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){       
    //Code to execute with response         //handle the response
  }
};

xhr.open('POST', url); //opens request and sends object
xhr.send(data);