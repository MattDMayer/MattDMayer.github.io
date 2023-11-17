const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const cite = document.querySelector('#js-cite');
const link = document.querySelector('#js-link');

const endpoint = 'https://api.quotable.io/random';

async function getQuote()
{
    const response = await
    fetch(endpoint);
    const data = await response.json();
    if(response.ok)
    {
        displayQuote(data.content);
        cite.textContent = data.author;
        link.href = "https://en.wikipedia.org/wiki/" + data.author;
    }
    else
    {
        displayQuote("it goofed");
        console.log(data);
    }
}

function displayQuote(question)
{
    const questionText = document.querySelector('#js-quote-text')
    questionText.textContent = question;
}
getQuote();

/*async function getQuote()
{
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(response);
    }
    catch{
        console.log('it goofed');
    }
}
*/  