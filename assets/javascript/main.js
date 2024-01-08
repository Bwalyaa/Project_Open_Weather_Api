const input = document.querySelector('#input')
const inputBtn = document.querySelector('#inputBtn')
const weatherIn = document.querySelector('#weatherIn')
const locationTwo = document.querySelector('#location')
const icon = document.getElementById('icon');
const temp = document.getElementById('temp');
const wetter = document.getElementById('wetter');
let localTimeText = document.getElementById('localTime');
const windSpeed = document.getElementById('windSpeed');
const cloudiness = document.getElementById('cloud');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('hum');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const geoCoords = document.getElementById('geo');

const apiKey = 'fb25968545916abfa0a7401ce5b36714'

const getLocalTime = (timestamp, timezone) => {
    let time = new Date((timestamp + timezone) * 1000);
    let currentHour = time.getUTCHours();
    let localMinutesNum = time.getUTCMinutes();
    let localMinutes = localMinutesNum.toString().padStart(2, "0");
    let localHour = currentHour.toString().padStart(2, "0");
    return `${localHour}:${localMinutes}`;
};

const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=de&units=metric&appid=${apiKey}`)
    .then((resp) => resp.json())
    .then((data) => {
        let iconPng = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIn.textContent = data.name;
        locationTwo.textContent = data.sys.country;
        icon.setAttribute("src", iconPng);
        temp.textContent = data.main.temp + ' C°';
        wetter.textContent = ` ${data.weather[0].description}`;
        windSpeed.textContent = ' ' + data.wind.speed + 'km/h';
        cloudiness.textContent = ' ' + data.weather[0].description;
        pressure.textContent = ' ' + data.main.pressure + 'hpa';
        humidity.textContent = ' ' + data.main.humidity;
        sunrise.textContent = ' ' + getLocalTime(data.sys.sunrise, data.timezone);
        sunset.textContent = ' ' + getLocalTime(data.sys.sunset, data.timezone);
        geoCoords.innerHTML = `Längengrad: ${data.coord.lon} <br> Breitengrad: ${data.coord.lat}`;
        function getTrueTime () {
            return localTimeText.textContent = getLocalTime(data.dt, data.timezone)
        }
        getTrueTime()
        
    });
};

setInterval((getWeather), 1000)



inputBtn.addEventListener('click', getWeather);

// const getWeather = () => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&lang=de&units=metric&appid=${apiKey}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data);

//         const time = (x, y) => {
//             let obtainDate = new Date(x);
//         let userTimeDiff = obtainDate.getTimezoneOffset() / 60;
//         let obtainedDateString = obtainDate.toLocaleString();

//         // Function für AM or PM (der local Time) bestimmen:
//         // + Local Time dynamisch bestimmen lassen anhand timezone
//         let time = new Date();
//         let currentHour = time.getHours();
//         let localMinutesNum = time.getMinutes();
//         let localMinutes = localMinutesNum.toString().padStart(2, "0");
//         let timeZone = (data.timezone) / 3600; // + errechnet UTC timestamp
//         let localHourNum = Math.abs(currentHour + timeZone + userTimeDiff);
//         let localHour = localHourNum.toString().padStart(2, "0");
//         if (localHour == '24') {
//             localHour.replace('24', '00')
//             return localHour
//         }
//         let localTime = `${localHour}:${localMinutes}`
//         console.log(localTime);
//         y.textContent = localTime
//         }

//         setInterval(time(data.dt, localTimeText), 1000)
//         // time(data.sys.sunrise, sunrise)
//         // time(data.sys.sunset, sunset)

//         let iconPng = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
//         weatherIn.textContent = data.name
//         locationTwo.textContent = data.sys.country
//         icon.setAttribute("src", iconPng)
//         temp.textContent = data.main.temp + ' C°'
//         wetter.textContent = ` ${data.weather[0].description}`
//         windSpeed.textContent = ' ' + data.wind.speed + 'km/h'
//         cloudiness.textContent = ' ' + data.weather[0].description
//         pressure.textContent = ' ' + data.main.pressure + ' hpa'
//         humidity.textContent = ' ' + data.main.humidity + ' %'
//         geoCoords.innerHTML = `Längengrad: ${data.coord.lat} <br> Breitengrad: ${data.coord.lon}`
//         sunrise.textContent = new Date(data.sys.sunrise)




//     })
// }
// inputBtn.addEventListener('click', getWeather)


