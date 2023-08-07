// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('click', function (event) {
        const screenInfo = {
            width: window.screen.width,
            height: window.screen.height,
        };
        const eventObject = { 
            type: event.target.tagName,
            screenInfo: screenInfo,
            timestamp: new Date(8.64e15).toString(),
        };
          // Make an API call to the backend to send the event data
        fetch('http://127.0.0.1:3032/miler_cdn/event', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body:JSON.stringify(eventObject),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from backend:', data);
        })
        .catch((error) => {
            console.error('Error sending event:', error);
        });
});