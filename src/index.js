import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchPlayers, requestPlayers } from './redux/reducers';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({searchPlayers, requestPlayers })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
        <Provider>
        <App store = {store} />
        </Provider>, document.getElementById('root'));
registerServiceWorker();
