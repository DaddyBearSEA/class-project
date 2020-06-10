// Step 1
//insert ask-name into a function
// insert into code and render results

function askName() {
    var username = prompt('What is your Panda Name?');

    return document.write('<h3>Hello ' + username + '</h3>');

}

// step 2
// insert welcome into a funciont
// insert into html and render results

//insert js starting on Duckett JS &jQuery here - from pg 46

function welcomeTime() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good Evening!';
    } else if (hourNow > 12) {
        greeting = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'Welcome!';
    }

    return document.write('<h3>' + greeting + '</h3>');
}


// step 3
// Preference on Pandas then send them to another website


function likePanda() {

    var preference = prompt('Do you like Pandas? Yes or No')
    var message;

    if (preference === 'Yes') {
        message = 'Welcome to Calgary Pandas';
    } else if (preference === 'yes') {
        message = 'Welcome to Calgary Pandas';

    } else if (preference === ' ') {
        message = 'Welcome to Calgary Pandas';
    

    } else if (preference === 'no') {
        window.location.replace('https://tenor.com/view/futurama-hypnotoad-hypnotic-hypno-all-hail-hypnotoad-gif-3690710');

    } else if (preference === 'No') {
        window.location.replace('https://tenor.com/view/futurama-hypnotoad-hypnotic-hypno-all-hail-hypnotoad-gif-3690710');
    } else {
        message = "See Ya Later!"
    }

    return document.write('<h3>' + message + '</h3>');
}
















// function logger() {
//     var message = 'Hello World'
//     // console.log (message);
//     return messasge
// }

// logger()


// function logUsername(username) {
//     var message ('hello ' + username + '!');
//     return message;

// }
// logUsername("Michael");


// // psuedo code

// // camelCase
// // js is the standard  askNameExamle

// //  let's build a cake making function

// var buildCake = function(cakeType, fronsting, filling)[
//     var message= ('I want a "+ cakeType + ' white cake icesd with lavendare fronsting and filled with lemoncustard!');
//     return message
// ]

// buildCake('white', 'lavender', 'lemon custard');