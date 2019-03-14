import {combineReducers} from 'redux';

import weatherReducer from './weatherReducer.js';
import bookReducer from './bookReducer.js';
import videoReducer from './videoReducer.js';
import petsReducer from './petsReducer.js';
import memsReducer from './memsReducer.js';


const reducers = combineReducers({
    weather: weatherReducer,
    books: bookReducer,
    videos: videoReducer,
    weatherAndRate: petsReducer,
    mems: memsReducer,
});

export default reducers;