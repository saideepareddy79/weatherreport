var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add'); 
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apik = "63a90ae96d390ec37d6c1252f5a86e1a"; 
function convertion(val) {
    return (val - 273).toFixed(2); 
}

btn.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    // Fetch weather data from the API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        if (data.cod === 200) {
            var nameval = data.name;
            var descrip = data.weather[0].description;
            var tempature = data.main.temp;
            var wndspeed = data.wind.speed;

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(tempature)} °C</span>`;
            description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
        } else {
            alert('City not found! Please enter a valid city name.');
        }
    })
    .catch(err => alert('Error fetching data: ' + err));
});