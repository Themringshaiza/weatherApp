import reducer, { INITIAL_STATE } from '../reducers';

import {
    FETCH_WEATHER,
    SAVE_WEATHER,
    SET_WEATHER
} from '../constants/index';

describe('Weather Reducer Tests', () => {
    it('should return state with loading true on `FETCH_WEATHER` action', () => {
        const action = {
            type: FETCH_WEATHER,
            zip:'response'
        };
        const expectedState = reducer(INITIAL_STATE, action);
        expect(expectedState).toEqual({
            ...INITIAL_STATE,
            zip: 'response',
            loading: true
        });
    });
    it('should return state with `SAVE_WEATHER` action', () => {
        const action = {
            type: SAVE_WEATHER,
            response: 'response',
        };
        const expectedState = reducer(INITIAL_STATE, action);
        expect(expectedState).toEqual({
            ...INITIAL_STATE,
            loading: false,
            weathersData: 'response'
        });
    });
});
