import { all, call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { SET_WEATHER, FETCH_WEATHER } from './constants/index'
import { BASE_URL, COUNTRY, TEMP_UNIT, APP_ID } from './config'
import { saveWeather } from './actions'
import { Alert } from 'react-native'

export function requestWeather(url) {
  console.log('weatherurl@@@', url)
  return axios.get(url);
}

export function* onFetchWeather(action) {
  console.log('zipcode@@@', action)
  Alert.alert(action.zipcode)
  try {
    // const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${action.zipcode},in&appid=b1b0042286c05a3ceea2add4199d0679&units=metric` 
    const weatherUrl = `${BASE_URL}zip=${action.zipcode},${COUNTRY}&appid=${APP_ID}&units=${TEMP_UNIT}`
    const response = yield call(requestWeather, weatherUrl)
    // console.log('response', response)
    const data = yield response.data
    Alert.alert(JSON.stringify(data.cod))
    console.log('data@@@', data.list)
    if (data.cod === '200') {
      yield put(saveWeather(data))
    }
  }
  catch (error) {
    Alert.alert(JSON.stringify("yera fussi " + error))
  }
}

export function* actionWatcher() {
  yield takeLatest(FETCH_WEATHER, onFetchWeather)
}

export default function* rootSagas() {
  yield all([
    actionWatcher(),
  ])
};
