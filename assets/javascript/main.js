const input = document.querySelector('#input')
const inputBtn = document.querySelector('#inputBtn')

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