import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
    yield takeEvery('DELETE_GENRE', deleteGenre);
}

// Create generator function for movies get

function* fetchMovies(){
    try{
        const response = yield axios.get('/movies');
        yield console.log('Success getting movies!', response.data);
        yield put({type: 'SET_MOVIES', payload: response.data});
    }
    catch (error){
       console.log('Error getting movies!', error);
    }
}

function* updateMovie(action){
    try{
        const response = yield axios.put('/movies', action.payload);
        yield console.log('Success updating movie!', response.data);
        yield put({type:'FETCH_MOVIES'});
    }
    catch(error){
        console.log('Error updating movie!', error);   
    }
}

function* deleteGenre(action){
    console.log('action for delete', action.payload)
    try{
        const response = yield axios({
            method: 'DELETE',
            url: '/movies',
            data: action.payload
        });
        yield console.log('Success deleting genre!', response.data);
        yield put({type:'FETCH_MOVIES'});
    }
    catch(error){
        console.log('Error deleting genre!', error);   
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}


//CHANGE THIS TO ACTIVE MOVIE
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
