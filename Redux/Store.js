import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import rootSagas from './saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['weathersData']
};

const rootReducer = combineReducers({
  weatherReducer: persistReducer(persistConfig, reducer)
});
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware),);
sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);