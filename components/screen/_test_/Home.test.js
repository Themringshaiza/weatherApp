import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../Home';
describe('Home screen', () => {
  const props = {
    navigation: jest.fn(),
  };
  const component = renderer.create(<HomeScreen {...props} />);

  it('render home Screen as default to match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
