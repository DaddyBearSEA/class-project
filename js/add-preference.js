var preference = prompt('Do you like Pandas? Yes or No')
var message;

if (preference === 'Yes'){
  message = 'Welcome to Calgary Pandas';
} else if (preference === 'No') {
    window.location.replace('http://google.com');
} else {
    message - "Go elsewhere!"
}

document.write('<h3>' + message + '</h3>')
