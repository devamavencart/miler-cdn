async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the button element you want to capture the click event for
    const myButton = document.getElementById('my-button');

    // Attach a click event listener to the button
    myButton.addEventListener('click', async function (event) {
        // This function will be executed when the button is clicked
        // You can add your event handling logic here
        console.log('--start--Button clicked!');
        await postData("http://127.0.0.1:3032/miler_cdn", { name: 'this is a dev'  }).then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
        console.log('---end--Button clicked!');
    });
});
