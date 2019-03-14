import React from 'react';

import WeatherItem from './WeatherItem';

function WeatherOther (props){
    const {fiveDaysWeather} = props;
    console.log(fiveDaysWeather);
    if (fiveDaysWeather.data){
        const day = fiveDaysWeather.data.list;
        return (
            <div>
                {day.map((item,i)=>{
                    if (item.dt_txt.includes('21:00')){
                        
                        return ( <WeatherItem key={i} day={item}/> );
                    }
                })}
            </div>
        );
           
    } else {
        return null;
    }
}

export default WeatherOther;
