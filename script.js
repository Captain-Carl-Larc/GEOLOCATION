console.log("file running.");


        // Function to display location
        function showLocation(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            document.getElementById('status').innerText = "Location Found!";
            document.getElementById('location').innerHTML = `
                Latitude: ${latitude} <br>
                Longitude: ${longitude} <br>
                Accuracy: ${accuracy} meters
            `;
        }

        // Error handler
        function showError(error) {
            let message = '';
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    message = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    message = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    message = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    message = "An unknown error occurred.";
                    break;
            }
            document.getElementById('status').innerText = message;
        }

        // Request user's location
        if (navigator.geolocation) {
            document.getElementById('status').innerText = "Requesting location...";
            navigator.geolocation.getCurrentPosition(showLocation, showError, {
                enableHighAccuracy: true, // Request high accuracy
                timeout: 500, // Timeout if no response
                maximumAge: 0 // Disable cached data
            });
        } else {
            document.getElementById('status').innerText = "Geolocation is not supported by this browser.";
        }
    

