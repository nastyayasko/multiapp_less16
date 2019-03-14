import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import HomePage from './HomePage';
import Video from './Video';



class AppVideo extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
            <Route exact path='/videos'    component={HomePage} />
            <Route path='/videos/:id'       component={Video} />
        </div>
      </div>
    );
  }
}

export default AppVideo;
