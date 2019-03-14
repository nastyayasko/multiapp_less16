import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Form from        './screens/Form'
import List from        './screens/List'
import Single from      './screens/Single'
import Favorites from  './screens/Favorites'


class AppBooks extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link" to='/books/'>Каталог</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/books/add'>Добавить книгу</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/books/favourites'>Избранные книги</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <Route exact  path='/books/'           component={List}/>
          <Route        path='/books/add'        component={Form}/>
          <Route        path='/books/books/:id'        component={Single}/>
          <Route        path='/books/favourites' component={Favorites}/>
        </div>
      </div>
    );
  }
}

export default AppBooks;
