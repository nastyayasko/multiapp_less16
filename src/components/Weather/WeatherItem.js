import React from 'react';

import {getTemp} from '../functions';

function WeatherItem (props){
    const {day} = props;
        return (
            <div className="day">
                <div>{day.dt_txt}</div>
                <div>
                    <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt='weather'/>
                </div>
                <div>{getTemp(day)}</div>
            </div>
        );
   
}

export default WeatherItem;
