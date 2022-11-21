const currentTemp = document.querySelector("#tempInput");
const currentWind = document.querySelector("#windInput");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windChill = document.querySelector("#output");
const url = "https://api.openweathermap.org/data/2.5/weather?zip=82801&appid=364ee35cfabcb4fec9d4af380e8686be&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function setWindChill(t, s) {
    if (t <= 50 && s >= 3) {
        let windchill =
            35.74 +
            0.6215 * t -
            35.75 * Math.pow(s, 0.16) +
            0.4275 * t * Math.pow(s, 0.16);
        return Math.round(windchill);
    }
    else {
       
        return "N/A";
    }
}

function capital(str) {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capital(desc);
    windChill.textContent = setWindChill(weatherData.main.temp, weatherData.wind.speed);
}

apiFetch();
