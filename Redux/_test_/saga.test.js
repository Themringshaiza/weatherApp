import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_WEATHER } from '../constants/index';
import axios from 'axios'
import { BASE_URL, COUNTRY, TEMP_UNIT, APP_ID } from '../config'
import { actionWatcher, onFetchWeather, requestWeather } from '../saga';
import { saveWeather } from '../action';

describe('Saga watch fectch weather', () => {
    jest.useFakeTimers();
    const genObject = actionWatcher();

    it('should wait for every FETCH_WEATHER action and call onFetchWeather', () => {
        expect(genObject.next().value).toEqual(
            takeLatest(FETCH_WEATHER, onFetchWeather),
        );
    });
    it('should call requestWeather with the url pass in as parameter', () => {
        const generatorfn = onFetchWeather();

        expect(generatorfn.next().value).toEqual(call(requestWeather()));
    });
    it('should wait for the response of requestWeather with the url pass in as parameter and if it is succesful put saveWeather', () => {
        const generatorfn = onFetchWeather();

        const mockResponse = [];
        const mockExpected = { cod: 200, data: [] };

        // jest.mock('../../../utilities/http-client', () => ({
        //   httpGet: jest.fn(() => mockExpected),
        // }));
        const weatherUrl = `${BASE_URL}zip=110017,${COUNTRY}&appid=${APP_ID}&units=${TEMP_UNIT}`

        const actual = axios.get(weatherUrl);

        generatorfn.next();
        generatorfn.next(actual);

        expect(generatorfn.next(mockExpected).value).toEqual(
            put(saveWeather(mockResponse)),
        );
    });
});

