import {
    fetchWeather,saveWeather
  } from '../actions';
  
  import {
    FETCH_WEATHER, SAVE_WEATHER
  } from '../constants/index';
  
  describe('Weather actions', () => {
    it('Should fetch weather with the zipcode', () => {
      const action = fetchWeather();
      expect(action.type).toEqual(FETCH_WEATHER);
    });
    it('Should save the weather after fetching and save the response', () => {
      const action = saveWeather();
      expect(action.type).toEqual(SAVE_WEATHER);
    });
  });
  