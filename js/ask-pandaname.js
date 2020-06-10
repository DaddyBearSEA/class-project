function pandaName (){

    var firstInitial = prompt("What is your initial of your First Name");
    var lastInitial = prompt("What is the initial of your Last Name?");
    // var lastInitial = prompt("What is the initial of your Last Name?");
    // var username = ("Ling Ling");
    // var username = (firstInitial + lastInitial);
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


// document.write('<h2>Your Panda Name<br> ' + firstInitial + '</h3><br>');
    return document.write('<h2>Your Panda Name<br> ' + firstPanda + ' '+ lastPanda + '</h3><br>');

}

// function pandaLname (){

//     // var firstInitial = prompt("What is your initial of your First Name");
//     // var lastInitial = prompt("What is the initial of your Last Name?");
//     // var username = ("Ling Ling");
//     // var username = (firstInitial + lastInitial);
//     // var lastPanda;

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