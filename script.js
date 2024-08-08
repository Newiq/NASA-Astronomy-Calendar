document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'OArimYvHnyEyDkwcI6boJT9tRN9rTgeoVszHSPvI';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const fetchBtn = document.getElementById('birthday_button');

    const fetchPicture = (date) =>{
        const url = date ? `${apiUrl}&date=${date}` : apiUrl;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('image').src = data.url;
            document.getElementById('description').textContent = data.explanation;
        })
        .catch(error => console.error('Error fetching data:', error));
        
    }
    fetchPicture();
    //add event listener to birthday button
    fetchBtn.addEventListener('click',()=>{
        const birthday = document.getElementById('birthday').value;
        const today = new Date().toISOString().split('T')[0];
        //validation
        if (birthday){
            if(birthday <= today){
                fetchPicture(birthday);
            }else{
                alert('Birthday can not be in the future. Please enter a valid birthday.');
            }
        }
        else{
            alert('Please enter a valid birthday.');
        }
        
    })

    
    const audio = document.getElementById('background-music');
    audio.play();
    
    const audioControlButton = document.getElementById('audio-control');
    audioControlButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            audioControlButton.textContent = 'Play Music';
        } else {
            audio.pause();
            audioControlButton.textContent = 'Stop Music';
        }
    });
});


//radom day