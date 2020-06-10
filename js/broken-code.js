43
function pandaName() {

    var lastInitial = prompt('What is the initial of your lastname?');
    var firstName = prompt('What is the first letter of your first name?');
    var userName = (fisrtInitial) + (lastInitial);
    
    return document.write('<h3>Hello ' + userName '</h3>');
}


// function pandaFname (){

//     var firstInitial = prompt("What is your initial of your First Name");
//     // var lastInitial = prompt("What is the initial of your Last Name?");
//     // var username = ("Ling Ling");
//     // var username = (firstInitial + lastInitial);
//     var firstPanda;

//     while (firstInitial !== "A" && firstInitial !=="B" && firstInitial !=="C" ){
//         firstInitial = prompt( "Please enter an A or B or C");
//     }

//     if (firstInitial === 'A'){
//         firstPanda = 'Ling';
//     }else if (firstInitial === 'B'){
//         firstPanda = 'Bam';
//     }else if (firstInitial === 'C'){
//         firstPanda = 'Pang';
//     }

// // document.write('<h2>Your Panda Name<br> ' + firstInitial + '</h3><br>');
//     return document.write('<h2>Your Panda Name<br> ' + firstPanda + '</h3><br>');

// }

// function pandaLname (){

//     // var firstInitial = prompt("What is your initial of your First Name");
//      var lastInitial = prompt("What is the initial of your Last Name?");
//     // var username = ("Ling Ling");
//     // var username = (firstInitial + lastInitial);
//     var lastPanda;

//     while (lastInitial !== "A" && lastInitial !=="B" && lastInitial !=="C" ){
//         lastInitial = prompt( "Please enter an A or B or C");
//     }

//     if (lastInitial === 'A'){
//         lastPanda = 'Lang';
//     }else if (lastInitial === 'B'){
//         lastPanda = 'Chen';
//     }else if (lastInitial === 'C'){
//         lastPanda = 'La';
//     }

// // document.write('<h2>Your Panda Name<br> ' + firstInitial + '</h3><br>');
//     return document.write('<h2>Your Panda Name<br> ' + lastPanda + '</h3><br>');

// }




//  get a product  get a count show product to the page.

// function getCount(){
//      var count= prompt('Great, how many would you like?');
//      while (isNaNget(count))
// }

// use not equal house or hotel respond with I need a yes or no



// Assignment is to have 1 while and 1 for loop


// Assignment FOR function 
// show order - render to the page


// function showOrder(){
//     var result = ''
//     var itemType = getProduct();
//     var total = getCount();
  
//     for (var i = 0; i < total; i++){
//       result = result + '<p>' + itemType + '</p>';
//     }
  
//     return document.write(result);
//   }




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


function Paws(){
    var answer;
    var pawPrint = '<img src="images/pandapaw.png">';
    var pickNumber = prompt('Pick a number between 1- 5');
  
    for (var i = 0; i < pickNumber; i++){
      answer = answer + pawPrint;
    }
  
    return document.write(answer);
  }

