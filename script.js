document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'OArimYvHnyEyDkwcI6boJT9tRN9rTgeoVszHSPvI';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const fetchBtn = document.getElementById('birthday_button');
    const fetchBtnRandom = document.getElementById('random_button')

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
    //add event listener to random day button
    fetchBtnRandom.addEventListener('click',()=>{
        const startDate = new Date(1995, 5, 16);//NASA api start day
        const endDate = new Date();
        const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        const randomDate = new Date(randomTimestamp);

        const year = randomDate.getFullYear();
        const month = String(randomDate.getMonth() + 1).padStart(2, '0');
        const day = String(randomDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        
        fetchPicture(formattedDate);
    })


    const audio = document.getElementById('background-music');
    // audio.play();
    
    const audioControlButton = document.getElementById('audio-control');
    audioControlButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            audioControlButton.textContent = 'Get immersive';
        } else {
            audio.pause();
            audioControlButton.textContent = 'Get me out of the space';
        }
    });

    const buttonSound = document.getElementById('button-sound');
    const birthdayButton = document.getElementById('birthday_button');
    const randomButton = document.getElementById('random_button');

    const playButtonSound = () => {
        buttonSound.play();
    };

    birthdayButton.addEventListener('click', playButtonSound);
    randomButton.addEventListener('click', playButtonSound);
});


