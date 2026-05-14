const apiKey = "9b23922f176119ebc80ce8c96a1ea137";

const button = document.getElementById("getWeatherBtn");

button.addEventListener("click", getWeather);

function getWeather() {

    const location =
        document.getElementById("locationInput").value;

    const url =
        "https://api.openweathermap.org/data/2.5/weather?q="
        + location
        + "&appid="
        + apiKey
        + "&units=metric";

    fetch(url)

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        const temperature = data.main.temp;

        const humidity = data.main.humidity;

        const condition = data.weather[0].main;

        document.getElementById("locationName").textContent =
            data.name;

        document.getElementById("temperature").textContent =
            temperature;

        document.getElementById("humidity").textContent =
            humidity;

        document.getElementById("condition").textContent =
            condition;

        giveAdvice(temperature, humidity, condition);

    })

    .catch(function(error) {

        alert("Location not found");

        console.log(error);

    });

}

function giveAdvice(temp, humidity, condition) {

    let advice = "";

    if (condition === "Rain") {

        advice =
            "Good time for planting maize and rice.";

    }

    else if (temp > 30) {

        advice =
            "Hot weather. Irrigate your crops regularly.";

    }

    else if (humidity > 70) {

        advice =
            "High humidity may cause plant diseases.";

    }

    else {

        advice =
            "Weather conditions are good for farming.";

    }

    document.getElementById("adviceText").textContent =
        advice;

}