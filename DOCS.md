## Usage
### 1. Simple use
```js
import { LoginForm } from 'react-form-login';

<LoginForm
  onSubmit={(username, password, isRemember) => {
    // Sending AJAX request ...
    console.log(username, password, isRemember);
  }}
/>
```
### 2. Customizable placeholder, text and classes
```js
import { LoginForm } from 'react-form-login';

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
```
### 3. Handle submit example
```js
import {LoginForm} from 'react-form-login';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from 'base/actions';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: false
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username, password, isRemember) => {
    // Show loading
    this.setState({
      loading: true
    });

    // dispatch an action
    this.props.dispatch(login(username, password, isRemember)).then(response => {
      this.setState({loading: false});

      // redirect to /profile page in case of success
      if (response.isAuthenticated) {
        this.props.history.push('/profile');
      } else if (response.data.errors) { // Show error in case of login failed
        let {status} = response.data;
        let {errors} = response.data.data;

        if (status === 400) {
          let errMessages = {};
          errors.map(item => {
            errMessages[item.source.pointer] = item.detail;
          });

          this.setState({
            error: errMessages
          });
        } else {
          let message = 'Login failed';
          if (errors) {
            message = errors.detail || message;
            this.setState({
              error : {
                password: 'Invalid email or password'
              }
            });
          }
        }
      }
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.handleLogin}
      />
    );
  }
}

export default connect()(withRouter(Login));
```
