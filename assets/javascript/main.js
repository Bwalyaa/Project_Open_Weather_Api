const input = document.querySelector('#input')
const inputBtn = document.querySelector('#inputBtn')
const weatherIn = document.querySelector('#weatherIn')
const location = document.querySelector('#location')
const icon = document.getElementById('icon');
const temp = document.getElementById('temp');
const wetter = document.getElementById('wetter');
const localTime = document.getElementById('localTime');
const windSpeed = document.getElementById('windSpeed');
const cloudiness = document.getElementById('cloud');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('hum');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const geoCoords = document.getElementById('geo');

const apiKey = 'fb25968545916abfa0a7401ce5b36714'


function peter () {fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=1&appid=${apiKey}`)
.then((resp) => resp.json())
.then((data) => {
    console.log(data[0].lat, data[0].lon)
    let lat = data[0].lat;
    let lon = data[0].lon;
    hans(lat, lon)
})}
inputBtn.addEventListener('click', peter)


function hans (lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log('data hans', data);
    })
}