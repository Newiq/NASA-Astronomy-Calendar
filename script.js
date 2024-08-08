document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'OArimYvHnyEyDkwcI6boJT9tRN9rTgeoVszHSPvI';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('image').src = data.url;
            document.getElementById('description').textContent = data.explanation;
        })
        .catch(error => console.error('Error fetching data:', error));
});
