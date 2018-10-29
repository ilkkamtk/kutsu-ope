import React from 'react';
import { shallow } from 'enzyme';
import Courses from './courseList';

describe('<Courses />', () => {
  test('renders', () => {
    const wrapper = shallow(<Courses />);
    expect(wrapper).toMatchSnapshot();
  });
});
