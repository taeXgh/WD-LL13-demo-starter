// We'll use fetch() to get a cat fact from the API
// and display it inside the #cat-fact element

// Once that works, we can apply the "pretty-fact" CSS class too
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        const factElem = document.getElementById('cat-fact');
        if (factElem) {
            factElem.textContent = data.fact;
            factElem.classList.add('pretty-fact')
        }
    })
    .catch (error=>{
        console.error('Error fetching cat fact:', error);
    })
})