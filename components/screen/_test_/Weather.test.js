import React from 'react';
import renderer from 'react-test-renderer';
import WeatherScreen from '../Weather';
describe('Weather search with zipcode screen', () => {
  const props = {
    navigation: jest.fn(),
  };
  const component = renderer.create(<WeatherScreen {...props} />);

  it('render Weather Screen to match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
