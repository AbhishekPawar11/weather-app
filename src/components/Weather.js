import React, { useState } from 'react'
import '../App.css'
import search_icon from './Assets/search.png';
import clear_icon  from './Assets/clear.png';
import cloud_icon  from './Assets/cloud.png';
import drizzle_icon  from './Assets/drizzle.png';
import rain_icon  from './Assets/rain.png';
import snow_icon  from './Assets/snow.png';
import wind_icon  from './Assets/wind.png';
import humidity_icon  from './Assets/humidity.png';

export default function Weather() {
    const api_key = "1e017ff005e0037419b145643476684d";
    const[wicon , setWcon] = useState(clear_icon);
    async function search(){
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value === ""){
            return 0;
        }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    let temperature = document.getElementsByClassName("weather-temp");
    let humidity = document.getElementsByClassName("humidity-percent");
    let windspeed = document.getElementsByClassName("wind-rate");
    let location  = document.getElementsByClassName('weather-location');
     temperature[0].innerHTML = `${Math.floor(data.main.temp)}°C`;
     humidity[0].innerHTML = `${data.main.humidity}%`;
     windspeed[0].innerHTML = `${Math.floor(data.wind.speed)}km/h`;
     location[0].innerHTML = element[0].value;

     let weather_icon = await data.weather[0].icon;

     if(weather_icon === '01d' || weather_icon === '01n'){
        setWcon(clear_icon);
     }
     else if(weather_icon === '02d' || weather_icon === '02n'){
        setWcon(cloud_icon);
     }
     else if(weather_icon === '03d' || weather_icon === '03n'){
        setWcon(drizzle_icon);
     }
     else if(weather_icon === '04d' || weather_icon === '04n'){
        setWcon(drizzle_icon);
     }
     else if(weather_icon === '09d' || weather_icon === '09n'){
        setWcon(rain_icon);
     }
     else if(data.Weather[0].icon === '010d' || data.Weather[0].icon === '010n'){
        setWcon(rain_icon);
     }
     else if(weather_icon === '013d' || weather_icon === '013n'){
        setWcon(snow_icon);
     }
     else{
         setWcon(clear_icon);
     }
     
    }
  return (
    <div className='container'>
        <div className="topbar">
           <input type="text" className="cityInput"  placeholder='Search'/>
           <div className="search-icon" onClick={()=>search()}>
                <img src={search_icon} alt=''/>
           </div>
        </div>
         <div className="weather-image">
             <img src={wicon} alt=''/>
         </div>
          <div className='weather-temp'>24</div>
          <div className="weather-location">London</div>
          <div className="data-container">
               <div className="element">
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className="data">
                         <div className="humidity-percent">64%</div>
                         <div className="text">Humidity</div>
                    </div>
                    <div className="element">
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                         <div className="wind-rate">18km/h</div>
                         <div className="text">Wind Speed</div>
                    </div>
               </div>
          </div>
    </div>
    </div>
  )
}
