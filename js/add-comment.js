//insert js starting on Duckett JS &jQuery here - from pg 46
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good aftgernoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!' ;
}

document.write('<h3>' + greeting + '</h3>')