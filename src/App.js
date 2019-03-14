import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import MainPage from        './screens/MainPage';
import AppPets from         './screens/Pets/AppPets';
import WeatherApp from      './screens/Weather/WeatherApp';
import AppVideo from        './screens/Videos/AppVideo';
import AppBooks from        './screens/Books/AppBooks';
import AppMems from        './screens/Mems/AppMems';



class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link" to='/pets'>Учет животных</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/weather'>Погодный виджет</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/videos'>Поиск ролика</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/books'>Книжный сервис</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/mems'>Генератор мемов</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <Route exact  path='/'               component={MainPage}/>
          <Route        path='/pets'           component={AppPets}/>
          <Route        path='/weather'        component={WeatherApp}/>
          <Route        path='/videos'         component={AppVideo}/>
          <Route        path='/books'          component={AppBooks}/>
          <Route        path='/mems'           component={AppMems}/>
        </div>
      </div>
    );
  }
}

export default App;