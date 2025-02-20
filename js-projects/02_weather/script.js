document.addEventListener('DOMContentLoaded', () => {
    const cityInfo =document.getElementById('city-input');
    const button=document.getElementById('get-weather-btn');
    const weatherinfo=document.getElementById('weather-info');
    const cityDis=document.getElementById('city-name');
    const tempDis=document.getElementById('temperature');
    const descriptionDis=document.getElementById('description');
    const error=document.getElementById('error-messag');
    const API_KEY ="8f6be32cbf15d2046d5bd1f6d17d0959";

    button.addEventListener('click', async () => {
        const city =cityInfo.value.trim();
        if(!city)
            return;
        try{
            const data = await getWeather(city);
          displayWeather(data);
            
        }
        catch(err){
         
            showError();
        }

    });

    async function getWeather(city){
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response =await fetch(url);
        if (!response.ok) {
            throw new Error(" City Not found");
          }
        const data =await response.json();
        console.log(data);
        return data;
    }
    function displayWeather(data){
        cityDis.textContent = data.name;
        tempDis.textContent = data.main.temp;
        descriptionDis.textContent = data.weather[0].description;
        weatherinfo.classList.remove("hidden");
        error.classList.add("hidden");
    }
    function showError() {
        weatherinfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
      }
});