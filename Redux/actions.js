import {SET_WEATHER, FETCH_WEATHER, SAVE_WEATHER} from './constants/index'

export const setWeather = (weather) =>({
    type:SET_WEATHER,
    weather
})
export const fetchWeather = (zipcode) =>({
    type:FETCH_WEATHER,
    zipcode

})

export const saveWeather = (response) =>({
    type:SAVE_WEATHER,
    response
})


