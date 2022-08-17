// Fetches date default (todays picture)
    
fetch(`https://api.nasa.gov/planetary/apod?api_key=FOfTEcZgUmamN5Rc9EQwHTeOw0VtOULzadunDcHT`)
.then (res => res.json())
.then(data => {
    console.log(data)
    
    document.querySelector('#apod-title').innerText = data.title
    document.querySelector('#apod-date').innerText = "Date: " + data.date
    document.querySelector('#apod-description').innerText =  "Description: " + data.explanation
    if(data.media_type === 'image') {
        document.querySelector('.apod-i').classList.add('hidden');
        document.querySelector('#apod-img').src = data.hdurl
        document.querySelector('.apod-i').classList.toggle('hidden');
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
            document.querySelector('#apod-title').innerText = data.title
            document.querySelector('.apod-i').classList.add('hidden');
            document.querySelector('#apod-img').src = data.hdurl
            document.querySelector('#apod-description').innerText = "Description: " + data.explanation
            document.querySelector('#apod-date').innerText = "Date: " + data.date
            document.querySelector('.apod-i').classList.toggle('hidden');
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

// Placeholder entry

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-08-02&api_key=FOfTEcZgUmamN5Rc9EQwHTeOw0VtOULzadunDcHT`;
    fetch(url)
    .then (res => res.json())
    .then(data => {
        let image = data.photos[0].img_src;
        let text = `The image below was taken by the Front Hazard Avoidance Camera  on the Curiosity rover on Martian sol 3551.`;
        console.log(data.status);
        // document.querySelector('#mr-title').innerText = data.title
        
        document.querySelector("#mr-img").src = image;
        document.querySelector('.mr').classList.toggle('hidden');
        document.querySelector("#mr-description").innerHTML = text;
        // document.querySelector('.apod').classList.toggle('hidden');
        // document.querySelector('.apod-video').classList.add('hidden'); 
    })
    .catch(err => {
        let error = "Sorry, there are no photos avaliable on this date! Pick another.";
        document.querySelector("#mr-description").innerHTML = error;
        document.querySelector('.mr').classList.add('hidden');
        console.log(`error ${err}`)
    });


//   Form results

document.querySelector("#mr-button").addEventListener("click", function() {
    let datePicker = document.getElementById("mr-date");
    let date = datePicker.value;
    console.log(date)

    let roverNamed = "";
    let buttonStatus1 = document.querySelector('#button1').checked;
    let buttonStatus2 = document.querySelector('#button2').checked;
    let buttonStatus3 = document.querySelector('#button3').checked;
   

    if(buttonStatus1 === true)
    {
      roverNamed = "curiosity";
      datePicker.min = "2012-08-06";
    } else if(buttonStatus2 === true)
    {
      roverNamed = "opportunity";
      datePicker.min = "2004-01-25";
    } else if (buttonStatus3 === true)
    {
      roverNamed = "spirit";
      datePicker.min = "2004-01-04";
    }

    
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNamed}/photos?earth_date=${date}&api_key=FOfTEcZgUmamN5Rc9EQwHTeOw0VtOULzadunDcHT`;
    fetch(url)
    .then (res => res.json())
    .then(data => {
        let image = data.photos[0].img_src;
        let sol = data.photos[0].sol;
        let cameraName = data.photos[0].camera.full_name;
        let roverName = data.photos[0].rover.name;
        let text = `The image below was taken by the ${cameraName} on the ${roverName} rover on Martian sol ${sol}.`;
        console.log(data.status);
        // document.querySelector('#mr-title').innerText = data.title
        document.querySelector('.mr').classList.add('hidden');
        document.querySelector("#mr-img").src = image;
        document.querySelector('.mr').classList.toggle('hidden');
        document.querySelector("#mr-description").innerHTML = text;
        // document.querySelector('.apod').classList.toggle('hidden');
        // document.querySelector('.apod-video').classList.add('hidden'); 
    })
    .catch(err => {
        let error = "Sorry, there are no photos avaliable on this date! Pick another.";
        document.querySelector("#mr-description").innerHTML = error;
        document.querySelector('.mr').classList.add('hidden');
        console.log(`error ${err}`)
    });

});

// NASA Image And Video Library

fetch(`https://images-api.nasa.gov/search?q=gemstone`)
.then (res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('.nivl-img').src = data.collection.items[0].links[0].href
    document.querySelector('.nivl-img').classList.toggle('hidden');
    document.querySelector('#nivl-title').innerText = data.collection.items[0].data[0].title;
    document.querySelector('#nivl-date-created').innerText = "Date Created: " + data.collection.items[0].data[0].date_created
    document.querySelector('#nivl-media-type').innerText = "Media Type: " + data.collection.items[0].data[0].media_type
    document.querySelector('#nivl-keywords').innerText = "Keywords: " + data.collection.items[0].data[0].keywords
    document.querySelector('#nivl-description').innerText = "Description: " + data.collection.items[0].data[0].description
})
.catch(err => {
    console.log(`error ${err}`)
});


document.querySelector('#hivl-button').addEventListener('click', getFetchNivl)

 function getFetchNivl() {
    const search = document.querySelector('#search').value
    console.log(search)
    const url = `https://images-api.nasa.gov/search?q=${search}` 
    fetch(url)
        .then (res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#nivl-title').innerText = data.collection.items[0].data[0].title;
            document.querySelector('#nivl-date-created').innerText = "Date Created: " + data.collection.items[0].data[0].date_created
            document.querySelector('#nivl-media-type').innerText = "Media Type: " + data.collection.items[0].data[0].media_type
            document.querySelector('#nivl-keywords').innerText = "Keywords: " + data.collection.items[0].data[0].keywords
            document.querySelector('#nivl-description').innerText = "Description: " + data.collection.items[0].data[0].description
            // document.querySelector('#nivl-img').src = data.collection.items[0].links[0].href
            // document.querySelector('#nivl-video').src = data.collection.items[0].links[0].href
            
            if(data.collection.items[0].data[0].media_type === 'image') {
                document.querySelector('.nivl-img').classList.add('hidden');
            document.querySelector('.nivl-img').src = data.collection.items[0].links[0].href
            document.querySelector('.nivl-img').classList.toggle('hidden');
            document.querySelector('.nivl-video').classList.add('hidden');
            } 
            else if (data.collection.items[0].data[0].media_type === 'video') {
                document.querySelector('.nivl-video').classList.add('hidden');
                document.querySelector('.nivl-video').src = data.collection.items[0].links[0].href
                document.querySelector('.nivl-img').classList.add('hidden');
                document.querySelector('.nivl-video').classList.toggle('hidden');
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

