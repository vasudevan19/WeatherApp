
// function checkweather(city) {: This defines the checkweather function, which takes a city parameter.

// return new Promise((resolve, reject) => {: This creates a new Promise. The promise takes two parameters: 
//resolve and reject, which are functions provided by the Promise constructor. resolve is used to fulfill the
// promise with a successful result, while reject is used to reject the promise with an error.

// fetch(apiUrl + city + &appid=${apiKey}): This initiates a fetch request to the OpenWeatherMap API using the 
//provided apiUrl and apiKey, along with the specified city.

// .then(response => {: This attaches a callback function to handle the response from the fetch request.

// if (response.status == 404) {: This checks if the response status is 404 (Not Found), indicating that the city
// was not found.

// document.querySelector(".error").style.display = "block";: If the city is not found, it displays an error 
//message on the UI by setting the display CSS property of an element with the class .error to "block".


// document.querySelector(".weather").style.display = "none";: It hides the weather information section by 
//setting its display CSS property to "none".

// reject("City not found");: It rejects the promise with the error message "City not found", indicating that 
//the city was not found.

// response.json().then(data => {: If the response status is not 404, it converts the response body to JSON 
//format and attaches a callback function to handle the parsed data.

// document.querySelector(".city").innerHTML = data.name;: It updates the content of an element with the class 
//.city to display the name of the city.

// document.querySelector(".temp").innerHTML = data.main.temp.toFixed(0) + "°c";: It updates the content of an 
//element with the class .temp to display the temperature in Celsius, rounded to the nearest integer.

// document.querySelector(".humidity").innerHTML = data.main.humidity + "%";: It updates the content of an 
//element with the class .humidity to display the humidity percentage.

// document.querySelector(".wind").innerHTML = data.wind.speed.toFixed(1) + " kmph";: It updates the content
// of an element with the class .wind to display the wind speed in kilometers per hour, rounded to one decimal place.

// switch (data.weather[0].main) {: It evaluates the main weather condition obtained from the data and selects
// an appropriate weather icon based on the condition.

// document.querySelector(".weather").style.display = "block";: It displays the weather information section by 
//setting its display CSS property to "block".

// document.querySelector(".error").style.display = "none";: It hides the error message section by setting its
// display CSS property to "none".

// resolve(data);: It fulfills the promise with the weather data, indicating a successful operation.

// });: This closes the callback function for handling the response data.

// }): This closes the .then() chain for handling the fetch response.

// .catch(error => {: This attaches a callback function to handle any errors that occur during the fetch operation.

// console.error("Error fetching weather data:", error);: It logs an error message to the console indicating 
//that there was an error fetching weather data.

// reject("Error fetching weather data");: It rejects the promise with an error message indicating that there
// was an error fetching weather data.

// });: This closes the .catch() chain for handling errors during the fetch operation.

// });: This closes the Promise constructor.

// searchbtn.addEventListener("click", () => {: This attaches an event listener to the search button element.

// checkweather(searchBar.value): This calls the checkweather function with the value entered in the search bar.

// .then(data => {: This attaches a callback function to handle the resolved value of the promise returned by 
//checkweather.

// console.log("Weather data:", data);: It logs the weather data to the console.

// .catch(error => {: This attaches a callback function to handle any errors that occur during the execution
// of the checkweather function.

// console.error("Error:", error);: It logs an error message to the console.

// });: This closes the .catch() chain for handling errors.

// });: This closes the event listener callback function.


function checkweather(city) {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + city + `&appid=${apiKey}`)
        .then(response => {
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                reject("404 not found ")
            } else {
                response.json()
                    .then(data => {
                        document.querySelector(".city").innerHTML = data.name;
                        document.querySelector(".temp").innerHTML = data.main.temp.toFixed(0) + "°c";
                        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                        document.querySelector(".wind").innerHTML = data.wind.speed.toFixed(1)  + " kmph";

                        switch (data.weather[0].main) {
                            case "Clouds":
                                weatherIcon.src = "./weather-app-img/clouds.png";
                                break;
                            case "Clear":
                                weatherIcon.src = "./weather-app-img/clear.png";
                                break;
                            case "Mist":
                                weatherIcon.src = "./weather-app-img/mist.png";
                                break;
                            case "Drizzle":
                                weatherIcon.src = "./weather-app-img/drizzle.png";
                                break;
                            case "Rain":
                                weatherIcon.src = "./weather-app-img/rain.png";
                                break;
                            case "Snow":
                                weatherIcon.src = "./weather-app-img/snow.png";
                                break;
                            default:
                                weatherIcon.src = "";
                            }
                            document.querySelector(".weather").style.display = "block"
                            document.querySelector(".error").style.display = "none"
                            resolve(data);
                    })
                  
            }

        })
        .catch(error => {
            console.error(error)
        })
    })
}

searchbtn.addEventListener("click", () => {
    checkweather(searchBar.value)
})

