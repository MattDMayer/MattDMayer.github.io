const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const ansBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote()
{
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        displayAnswer(json['answer']);

    }
    catch{
        console.log('it goofed');
    }
}

function displayQuote(question)
{
    const questionText = document.querySelector('#js-quote-text')
    questionText.textContent = question;
}

async function displayAnswer(answer)
{
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
    answerText.style.display = "block";
}
getQuote();