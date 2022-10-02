const firstName = prompt("What is your name?");

// Create function to capitalize index 0 //
const capFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

document.getElementById("firstName").innerHTML = `Hello, ${capFirstChar(firstName)}! Please enter your email address.`;

function ValidateEmail(inputText) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
};

// get a new date (locale machine date time)
const date = new Date();
// get the date as a string
const n = date.toDateString();
// get the time as a string
const time = date.toLocaleTimeString();

// find the html element with the id of time
// set the innerHTML of that element to the date a space the time
document.getElementById('time').innerHTML = n + ' ' + time;

const quoteOfTheDay = [
    'I get older...they stay the same age',
    'Love is blind',
    `It ain't easy, bein' cheesy`,
    'May the force be with you!'
];

// Generate random number 0 through 4 //
const randomInt = Math.floor(Math.random() * 4);
console.log(`randomInt === ${randomInt}`);

document.getElementById('randomInt').innerHTML = `${quoteOfTheDay[randomInt]}`;

// Switch statement to get time of day //
const currTime = new Date();
currTime.getHours();
const currHour = currTime.getHours();
switch (true) {
    case (currHour < 12):
        document.getElementById('greeting').innerHTML = `Good morning, ${capFirstChar(firstName)}!`;
        console.log("Good morning!");
        break;
    case (currHour > 12 && currHour < 17):
        document.getElementById('greeting').innerHTML = `Good afternoon, ${capFirstChar(firstName)}!`;
        console.log("Good afternoon!");
        break;
    default:
        document.getElementById('greeting').innerHTML = `Good evening, ${capFirstChar(firstName)}!`;
        console.log("Good evening!");
        break;
};