import React from 'react';
import renderer from 'react-test-renderer';
import WeatherReportScreen from '../Weather';
describe('Weather report screen', () => {
  const props = {
    navigation: jest.fn(),
  };
  const component = renderer.create(<WeatherReportScreen {...props} />);

  it('render Weather report Screen to match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Test for scroll view wrapper', () => {
    const tree = component.toJSON();
    expect(tree.type).toEqual('ScrollView');
  });
});