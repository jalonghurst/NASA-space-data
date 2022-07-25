// Fetches date default (todays picture)
    
fetch(`https://api.nasa.gov/planetary/apod?api_key=FOfTEcZgUmamN5Rc9EQwHTeOw0VtOULzadunDcHT`)
.then (res => res.json())
.then(data => {
    console.log(data)
    if(data.media_type === 'image') {
    document.querySelector('#title').innerText = data.title
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('.apod').classList.toggle('hidden');
        document.querySelector('.apod-video').classList.add('hidden');
    } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url
        document.querySelector('.apod').classList.add('hidden');
        document.querySelector('.apod-video').classList.toggle('hidden');
    }
})
.catch(err => {
    console.log(`error ${err}`)
});

//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
 document.querySelector('button').addEventListener('click', getFetch)

 function getFetch() {
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=FOfTEcZgUmamN5Rc9EQwHTeOw0VtOULzadunDcHT&date=${choice}`
    
    fetch(url)
        .then (res => res.json())
        .then(data => {
            console.log(data)
            if(data.media_type === 'image') {
            document.querySelector('#title').innerText = data.title
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
            document.querySelector('.apod').classList.toggle('hidden');
                document.querySelector('.apod-video').classList.add('hidden');
            } else if (data.media_type === 'video') {
                document.querySelector('iframe').src = data.url
                document.querySelector('.apod').classList.add('hidden');
                document.querySelector('.apod-video').classList.toggle('hidden');
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}



