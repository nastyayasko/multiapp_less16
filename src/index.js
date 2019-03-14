import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './redux/reduser';

const store = createStore(reducers, applyMiddleware(thunk, logger));

//middleware - вспомогательное ПО (библиотеки)

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// var arr = [1,3,5,1,3,5,6,6,6];

// var arr2 = [];

// arr.forEach(item => {
//     if (!arr2.includes(item)){
//         arr2.push(item);
//     }
    
// });
// console.log(arr2);

// var arr = [1,3,5,1,3,5,6,6,6];
// var obj = {}
// arr.forEach(item=>
//    { if(item in obj){
//        obj[item] = obj[item]+1;
//    } else {
//     obj[item] = 1;
//    }
       
//     }
//     );
//     console.log(obj);


// Есть определенное количество монет, которыми надо дать сдачу.
// Цель функции - определить количество монет определенного номинала, чтобы дать сдачу наименьшим количеством единиц
// Номиналы монет 50,25,10,5,1
// Их соответствующие названия "H","Q","D","N","P"

// Например
// makeExchange(51) должен дать в ответ { H: 1, P: 1 }
// makeExchange(49) должен дать в ответ { Q: 1, D: 2, P: 4 }
// makeExchange(99) должен дать в ответ { P: 1, Q: 1, D: 2, P: 4 }
// makeExchange(100) должен дать в ответ { H: 2 }

// function makeExchange(x){
//     let coins = {};
//     if (Math.floor(x/50) >= 1){
//         coins = {...coins, H: Math.floor(x/50)};
//         x = x%50;
//     }
//     if (Math.floor(x/25) >= 1){
//         coins = {...coins, Q: Math.floor(x/25)};
//         x = x%25;
//     }
//     if (Math.floor(x/10) >= 1){
//         coins = {...coins, D: Math.floor(x/10)};
//         x = x%10;
//     }
//     if (Math.floor(x/5) >= 1){
//         coins = {...coins, N: Math.floor(x/5)};
//         x = x%5;
//     }
//     if (Math.floor(x/1) >= 1){
//         coins = {...coins, P: Math.floor(x/1)};
//     }
        
//     return coins;
// }
// console.log(makeExchange(51));
// console.log(makeExchange(49));
// console.log(makeExchange(99));
// console.log(makeExchange(100));
