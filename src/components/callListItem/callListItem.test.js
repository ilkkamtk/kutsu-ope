import React from 'react';
import { shallow } from 'enzyme';
import CallListItem from './callListItem';

describe('<CallListItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<CallListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
