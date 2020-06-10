// Step 1
//insert ask-name into a function
// insert into code and render results


function pandaName (){

    var firstInitial = prompt("What is your initial of your First Name A, B, C, or R" );
    var lastInitial = prompt("What is the initial of your Last Name? A, B, C, or G");
    var firstPanda;
    var lastPanda;
    

    while (firstInitial !== "A" && firstInitial !=="B" && firstInitial !=="C" && firstInitial !=="R" ){
        firstInitial = prompt( "First Initial needs to be an A or B or C or R");
    }

    if (firstInitial === 'A'){
        firstPanda = 'Ling';
    }else if (firstInitial === 'B'){
        firstPanda = 'Bam';
    }else if (firstInitial === 'C'){
        firstPanda = 'Pang';
    }else if (firstInitial === 'R'){
        firstPanda = 'Pow';
    }

    while (lastInitial !== "A" && lastInitial !=="B" && lastInitial !=="C" && lastInitial !=="G" ){
        lastInitial = prompt( "Last Initial needs to be an A or B or C or G");
    }

    if (lastInitial === 'A'){
        lastPanda = 'Lang';
    }else if (lastInitial === 'B'){
        lastPanda = 'Chen';
    }else if (lastInitial === 'C'){
        lastPanda = 'La';
    }else if (lastInitial === 'G'){
        lastPanda = 'Fui';
    }

    return document.write('<h2>Your Panda Name<br> ' + firstPanda + ' '+ lastPanda + '</h3><br>');

}





// step 2
// insert welcome into a funciont
// insert into html and render results

//insert js starting on Duckett JS &jQuery here - from pg 46

function welcomeTime() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow >= 18) {
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
// something is not correct here and you get see you later if preference isn't typed correcly

function likePanda() {

    var preference = prompt('Do you like Pandas? Yes or No')
    var message;

    if (preference === 'Yes') {
        message = 'Welcome to Calgary Pandas';
    } else if (preference === 'yes') {
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



function Paws(){
    var answer=''
    var pawPrint = '<img src="images/pandapaw.png" height="100px">';
    var pickNumber = prompt('Pick a number between 1- 5');
  
    for (var i = 0; i < pickNumber; i++){
      answer = answer + pawPrint;
    }
  
    return document.write(answer);
  }

