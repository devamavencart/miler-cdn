// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the button element you want to capture the click event for
    const myButton = document.getElementById('my-button');

    // Attach a click event listener to the button
    myButton.addEventListener('click', function (event) {
        // This function will be executed when the button is clicked
        // You can add your event handling logic here
        console.log('--start--Button clicked!', event);

            // Create a new XMLHttpRequest object
            var xhr = new XMLHttpRequest();

            // Configure the request
            xhr.open('POST', 'http://127.0.0.1:3032/miler_cdn', true);
            xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Request was successful, and response is available in xhr.responseText
                    console.log("response", xhr.response); 
                }
                console.log("fetched successfully", xhr.status); 
                }
            };

            // Send the request
            xhr.send(event);
        
        console.log('---end--Button clicked!');
    });
});
