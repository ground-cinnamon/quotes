import './style.css'

const API_URL = 'https://api.breakingbadquotes.xyz/v1/quotes'

let app = document.getElementById('app')
let button = document.createElement('button')
let quoteField = document.createElement('div')
let quoteText = document.createElement('blockquote')
let quoteAuthor = document.createElement('p')

await replaceQuote()

button.textContent = 'Break me bad'
quoteField.classList.add('quoteField')

quoteField.append(quoteText, quoteAuthor)
app.append(quoteField, button)

button.addEventListener('click', () => {
	replaceQuote()
})

async function replaceQuote() {
	let quote = await getRandomQuote()
	quoteText.textContent = quote[0].quote
	quoteAuthor.textContent = quote[0].author
}

async function getRandomQuote() {
	let response = await fetch(API_URL)
	return response.json()
}

let testQuote = [
	{
		quote: 'You all know exactly who I am. Say my name.',
		author: 'Walter White',
	},
]
