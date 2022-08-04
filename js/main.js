// Fetches date default (todays picture)
    
fetch(`https://api.nasa.gov/planetary/apod?api_key=FOfTEcZgUmamN5Rc9EQwHTeOw0VtOULzadunDcHT`)
.then (res => res.json())
.then(data => {
    console.log(data)
    if(data.media_type === 'image') {
    document.querySelector('#title').innerText = data.title
    document.querySelector('#apod-img').src = data.hdurl
    document.querySelector('#apod-description').innerText = data.explanation
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


// Mars Rover API 

let datePicker = document.getElementById("mr-date");
datePicker.min = "2012-08-06";

document.querySelector("#mr-button").addEventListener("click", function() {
    let date = datePicker.value;
    console.log(date)
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=FOfTEcZgUmamN5Rc9EQwHTeOw0VtOULzadunDcHT`;
    console.log(url)

    fetch(url)
    .then (res => res.json())
    .then(data => {
        console.log(data)
        let image = data.photos[0].img_src;
        let sol = data.photos[0].sol;
        let cameraName = data.photos[0].camera.full_name;
        let roverName = data.photos[0].rover.name;
        let text = `The image below was taken by the ${cameraName} on the ${roverName} rover on Martian sol ${sol}.`;
        console.log(data.status);
        // document.querySelector('#title').innerText = data.title
        
        document.querySelector("#mr-img").src = image;
        document.querySelector('.mr').classList.toggle('hidden');
        document.querySelector("#mr-description").innerHTML = text;
        // document.querySelector('.apod').classList.toggle('hidden');
        // document.querySelector('.apod-video').classList.add('hidden'); 
    })
    .catch(err => {
        let error = "Sorry, there are no photos on this date! Pick another.";
        document.querySelector("#mr-description").innerHTML = error;
        document.querySelector('.mr').classList.add('hidden');
        console.log(`error ${err}`)
    });

});