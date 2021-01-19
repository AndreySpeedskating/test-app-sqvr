import React from 'react';
import { shallow } from 'enzyme';
import InputField from './index';

it('should render Input component', () => {
  const component = shallow(<InputField input={() => {}} />);
  expect(component.is('#inputField')).toEqual(true);
});
