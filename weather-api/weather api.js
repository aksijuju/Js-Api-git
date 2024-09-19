const apikey = "f1cb37283dea0e396b02734e9bd0364e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + '°c';
    document.querySelector('#hu').innerHTML = data.main.humidity + '%';
    document.querySelector('#wi').innerHTML = data.wind.speed + 'km/h';

}

btn.addEventListener('click',function() {
     checkWeather(input.value);
})