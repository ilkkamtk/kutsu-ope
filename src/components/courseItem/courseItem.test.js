import React from 'react';
import { shallow } from 'enzyme';
import CourseItem from './courseItem';

describe('<CourseItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<CourseItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
