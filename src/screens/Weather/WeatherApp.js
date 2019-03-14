import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getWeather} from '../../redux/actions';
import WeatherToday from '../../components/Weather/WeatherToday';
import WeatherOther from '../../components/Weather/WeatherOther';



class WeatherApp extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      oneDay: {},
      otherDays: {},
    };
  }
  
  componentDidMount() {
    this.props.getWeather();
    
  }
  
  
  
  
  render() {
    
    const {oneDay, otherDays} = this.props;
    return (
      
      <div className="WeatherApp">
        <WeatherToday oneDayWeather={oneDay}/>
        <WeatherOther fiveDaysWeather={otherDays}/>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    oneDay: state.weather.oneDay,
    otherDays: state.weather.otherDays,
  }
}

export default connect (mapStateToProps, {getWeather})(WeatherApp);
