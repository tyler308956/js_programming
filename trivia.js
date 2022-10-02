'use strict'


/* Add a function to get the current date and time.
Write the date on the page in a user friendly format */


// Create function to capitalize first char of firstName variable //
const capFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Get user's name //
const firstName = prompt('What is your name?');



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

const userEmail = 'email@email.com';
const emailSplit = userEmail.split('@');
console.log(emailSplit);
const var1 = userEmail.split([0]);
const var2 = userEmail.split([1]);
console.log(var1)
console.log(var2)

// Function to validate email //

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




// let emailAddress = prompt('Please enter your email');
// while (!validEmail(emailAddress)) {
//     prompt('Please enter a valid email');
//     emailAddress = prompt('Please enter your email');
//     // console.log('Please enter a valid email');
// }







//Create an array of at least 3 trivia questions//
// const triviaQuestions = [
//     'What is the capital of Paraguay?',
//     'What is the sign directly opposite Scorpio in the zodiac?',
//     'Who is considered the first female self-made millionaire in the U.S.?'
// ];

// /* Create a second array that contains the answers to the trivia
// questions in the same position (index) as the questions. */
// const triviaAnswers = ['Asuncion', 'Taurus', 'Madam C.J. Walker'];

// /* Create the quiz function. Here, we will use an arrow function
// to adhere to ES6 practices */
// const quiz = () => {

//     let points = 0;

//     for (let i = 0; i < 3; i++) {
//         let tries = 3;

//         while (tries > 0) {
//             let ans = prompt(triviaQuestions[i]);

//             if (ans === triviaAnswers[i]) {
//                 points += 1;
//                 alert("That's right! Great job!");
//                 console.log(points)
//                 tries = 0;
//             } else {
//                 alert(`That's not right. You have ${tries} tries left.`);
//                 tries = tries - 1;
//             }
//         }
//         document.getElementById('score').innerHTML = `${points}`;
//     }
//     return points;
// };


