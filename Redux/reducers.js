import { SET_WEATHER, FETCH_WEATHER, SAVE_WEATHER } from './constants/index'
export const INITIAL_STATE = {
  todaysWeather: null,
  loading: false,
  weathersData: [],
  zip: null,
}
 const reducer = (state = INITIAL_STATE, action) => {
  // alert("HEY"+INITIAL_STATE.weathersData)
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        zip: action.zipcode,
        loading: true
      };
    case SET_WEATHER:
      return {
        ...state,
        todaysWeather: action.weather
      }
    case SAVE_WEATHER:
      return {
        ...state,
        loading: false,
        weathersData: action.response
      }
    default:
      return state;
  }
};
export default reducer;