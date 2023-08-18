async function fetchData() {
    const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes'; // Replace this with the URL of the API you want to fetch data from
    const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '5217c95e4', // Corrected the invalid value and added quotes
        'X-RapidAPI-Host': 'programming-memes.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        // var data = JSON.stringify(JSON.parse(result),null,2);
        
        displayMemes(data);
        
        console.log(data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }


}

function displayMemes(data) {
    const memesContainer = document.getElementById('memes-container');
    if (Array.isArray(data)) {
        data.forEach(meme => {
            const box = document.createElement('div');
            const memeElement = document.createElement('img');
            memeElement.src = meme.image;
            memesContainer.appendChild(box);
            box.appendChild(memeElement);
            box.className =" meme ";
        });
    } else {
        console.error('Data is not an array:', data);
    }
}

// fetchData();
window.onload = fetchData;
