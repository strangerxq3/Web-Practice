const APIkey = '83b52945198b47d930bdf60f5d3b0682&';
const APILink = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const SearchBox = document.querySelector('.search input')

SearchBox.addEventListener('keydown',()=>{
    EnterKey(event);
})

const WeatherIcon = document.querySelector('.weather-icon');

document.querySelector('.search button')
    .addEventListener('click',()=>{
        CheckWeather(SearchBox.value)
    }
)



async function CheckWeather(city){
    const response = await fetch(APILink + city + `&appid=${APIkey}`)
    let data = await response.json()
    if (response.status === 404){
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.erro').style.display = 'block';
        
    }else{
        
        document.querySelector('.erro').style.display = 'none';
        
    let W = data.weather;
    
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML = (data.main.humidity).toFixed(0) + '%'
    document.querySelector('.wind').innerHTML = (data.wind.speed).toFixed(0) + ' km/h'
    document.querySelector('.city').innerHTML = data.name
    
    console.log(data);


    if(W[0].main === "Clouds"){
        WeatherIcon.src = "images/clouds.png";
    }

    else if(W[0].main === "Drizzle"){
        WeatherIcon.src = "images/drizzle.png";
    }
    else if(W[0].main === "Mist"){
        WeatherIcon.src = "images/mist.png";
    }
    
    else if(W[0].main === "Rain"){
        WeatherIcon.src = "images/rain.png";
    }
    
    else if(W[0].main === "Snow"){
        WeatherIcon.src = "images/snow.png";
    }else{
        WeatherIcon.src = "images/clear.png";
    }
    document.querySelector('.weather').style.display = 'block';
}
}

function EnterKey(event) {
    if (event.key === 'Enter') {
        CheckWeather(SearchBox.value)
    }
}


