import React from 'react';

import {getTemp, getTime} from '../functions';



function WeatherToday (props){
    const {oneDayWeather} = props;
    
    if (oneDayWeather.data){
        
        return (
            <div className='weather'>
                <div className='city'>{oneDayWeather.data.name}, {oneDayWeather.data.sys.country}<br/>
                {getTime(oneDayWeather)}
                </div>
                <div className='temp'>
                    <img src={`http://openweathermap.org/img/w/${oneDayWeather.data.weather[0].icon}.png`} alt='weather'/>
                    <div>{oneDayWeather.data.weather[0].description}</div>
                    <div>{getTemp(oneDayWeather.data)}</div>
                </div>
                <div className="wind">{`${oneDayWeather.data.wind.speed}m/s`}</div>
            </div>
        );
    } else {
        return null;
    }
}


export default WeatherToday;
