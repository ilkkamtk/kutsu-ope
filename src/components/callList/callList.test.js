import React from 'react';
import { shallow } from 'enzyme';
import CallList from './callList';

describe('<CallList />', () => {
  test('renders', () => {
    const wrapper = shallow(<CallList />);
    expect(wrapper).toMatchSnapshot();
  });
});
