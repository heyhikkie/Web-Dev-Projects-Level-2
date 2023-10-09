const quoteText = document.getElementById('quoteText');
const author = document.getElementById('author');
const getQuoteButton = document.getElementById('getQuoteButton');

getQuoteButton.addEventListener('click', () => {
    fetchRandomQuote();
});

function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            quoteText.textContent = `"${data.content}"`;
            author.textContent = `- ${data.author}`;
        })
        .catch((error) => {
            console.error('Error fetching random quote:', error);
            quoteText.textContent = 'Error';
            author.textContent = '';
        });
}

fetchRandomQuote();
