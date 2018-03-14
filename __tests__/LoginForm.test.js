import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginForm } from '../build/bundle';


Enzyme.configure({ adapter: new Adapter() });

test('Welcome component should return correct output', () => {
  const wrapper = mount(<LoginForm />);

  // expect(wrapper.html()).toEqual('<div>Welcome to React Component Boilerplate</div>');
});
