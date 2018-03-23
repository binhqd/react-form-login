import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginForm } from '../dist/react-form-login.min';


Enzyme.configure({ adapter: new Adapter() });

test('Welcome component should return correct output', () => {
  const wrapper = mount(
    <LoginForm
      form={{ className: 'login-form' }}

      username={{
        placeholder: 'Custom username',
        className: 'input-username',
        containerClassName: 'input-container'
      }}

      password={{
        placeholder: 'Custom password',
        className: 'input-password',
        containerClassName: 'input-container'
      }}

      text={{
        rememberMe: 'Custom Remember Me',
        submitLabel: 'Custom Sign In'
      }}

      onSubmit={(username, password, isRemember) => {
        console.log(username, password, isRemember);
      }}
    />
  );

  // expect(wrapper.html()).toEqual('<div>Welcome to React Component Boilerplate</div>');
});
