const api ={
    key: "config.API_KEY",
    base: "https://api.openweathermap.org/data/2.5/"
    
}

const searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode==13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }

}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(forecast => {
        return forecast.json();
      }).then(displayResults);
  }
  
function displayResults (forecast) {
    console.log(forecast);
    let city = document.querySelector('.location .city');
    city.innerText = `${forecast.name}, ${forecast.sys.country}`;

    let now = new Date().toISOString().slice(0, 10);
    let date= document.querySelector('.location .date');
    date.innerText= now;

    let temp= document.querySelector('.current .temp');
    temp.innerHTML =`${Math.round(forecast.main.temp)}<span>°c</span>`;

    let type= document.querySelector('.current .type');
    type.innerText= forecast.weather[0].main;


    let hilow = document.querySelector('.current .hi-low');
    hilow.innerText = `${Math.round(forecast.main.temp_min)}°c / ${Math.round(forecast.main.temp_max)}°c`;



  
}
  
