// create an advice variable
let advice = '';

// DOM variables
const advice_text = document.getElementById('adviceText');
const button_change = document.getElementById('buttonChange');
const advice_background = document.getElementById('advice');

// 
async function getAdvice() {
    // fetch to api advice
    // convert data to json
    // save advice received in "advice" variable
    // generate a random color and change the background
    try {
        const data = await fetch("https://api.adviceslip.com/advice");
        const response = await data.json();
        advice = await response.slip.advice;
        advice_text.textContent = await advice;
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        advice_background.style.backgroundColor = "#" + randomColor;

    } catch ( error ) {
        console.log(error);
    }
}

async function shareTwitter() {
    // open a new window to see a preview of the twitter before post it
    window.open(
        "https://twitter.com/share?url=" + advice,
        '',
        'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=300'
    );
}

// Initialize project
(()=>{
    getAdvice();
})();