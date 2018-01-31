//shows json info for "Harry Potter and the Sorcerer's Stone"
const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
//fetch API function
fetch(root, {method: "GET"})
.then(response => response.json())
.then(json => console.log(json));