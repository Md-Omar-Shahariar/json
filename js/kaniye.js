const loadQuots = () =>{
    fetch('http://api.kanye.rest/').then(response => response.json()).then(data => displayQuots(data))
}

const displayQuots = quote => {
    console.log(quote);
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = quote.quote
}