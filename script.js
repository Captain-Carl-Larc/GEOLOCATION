const myBtn=document.getElementById("btn")
const statusEl=document.getElementById('status')
const locationEl=document.getElementById('location')

let latitude = ''
let longitude = ''

let latitudesArray=[]
let longitudesArray=[]

//function to push latitudes and longitudes to arrays

function pushCordinates() {
    longitudesArray.push(longitude)
    latitudesArray.push(latitude)
}
// Function to display location
function showLocation(position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    //const accuracy = position.coords.accuracy
    console.log(latitude)
    console.log(longitude)
    
    
    renderCordinates()

        }

// Error handler
function showError(error) {
    let message = ''
    switch (error.code) {
        case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            message = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            message = "An unknown error occurred."
            break;
    }
    statusEl.innerText = message
}

// Request user's location
function runCode() {
    if (navigator.geolocation) {
        statusEl.innerText = "Requesting location..."
        navigator.geolocation.getCurrentPosition(showLocation, showError, {
            enableHighAccuracy: true, // Request high accuracy
            timeout: 5000, // Timeout if no response
            maximumAge: 0 // Disable cached data
        })
    } else {
        showBrowserError()
    }
}
//function to show error when browser does not support geolocation  API
function showBrowserError() {
    statusEl.innerText = "Geolocation is not supported by this browser."
}
myBtn.addEventListener("click",runCode)

function renderCordinates() {
    statusEl.innerText = "Location Found!"
    locationEl.innerHTML = `
        Latitude: ${latitude} <br>
        Longitude: ${longitude} <br>
        
    `
}

