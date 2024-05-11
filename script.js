
const apiKey = "6f6d091c23cd8e4a82b884dbc431c912";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBar = document.getElementById("search-bar");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");

async function checkweather (city) {
    try{
        
        const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
        }else{
            var data = await response.json();
            // console.log(data);
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp.toFixed(0) + "°c" ;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed.toFixed(1) + " kmph";
    
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "./weather-app-img/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "./weather-app-img/clear.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "./weather-app-img/drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "./weather-app-img/mist.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "./weather-app-img/rain.png"
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "./weather-app-img/snow.png"
            }
    
            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none"
    
        }
    }
   
    catch(err){
        console.log(err)
    }

}

searchbtn.addEventListener("click", () => {
    checkweather(searchBar.value);
})

