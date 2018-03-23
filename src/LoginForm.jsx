import React from 'react';
import { PropTypes } from 'prop-types';
import ErrorText from './ErrorText';
import styles from './style.scss';


class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      Username: '',
      Password: '',
      remember: false,
      error: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    this.setState({
      error: {}
    });

    const { Username, Password, isRemember } = this.state;

    return this.props.onSubmit(Username, Password, isRemember);
  }

  componentDidMount() {
    // $('input').iCheck({
    //   checkboxClass: 'icheckbox_square-blue',
    //   radioClass: 'iradio_square-blue',
    //   increaseArea: '20%' // optional
    // });
  }

  handleChange(name, e) {
    this.setState({
      [name]: e.target.value
    });
  }

  handleCheck() {
    this.setState({
      remember: !this.state.remember
    });
  }

  render() {
    let usernameOptions = {
      maxLength: 40,
      placeholder: 'Email',
      type: 'email',
      containerClassName: 'input-container'
    };

    let passwordOptions = {
      maxLength: 40,
      placeholder: 'Password',
      type: 'password',
      containerClassName: 'input-container'
    };

    let formOptions = {
      className: 'login-form'
    };

    let i18n = {
      rememberMe: 'Remember Me',
      submitLabel: 'Sign In'
    };

    if (this.props.username) {
      usernameOptions = Object.assign(usernameOptions, this.props.username);
    }

    if (this.props.password) {
      passwordOptions = Object.assign(passwordOptions, this.props.password);
    }

    if (this.props.form) {
      formOptions = Object.assign(formOptions, this.props.form);
    }

    if (this.props.text) {
      i18n = Object.assign(i18n, this.props.text);
    }

    return (
      <form action="javascript:void(0)" noValidate onSubmit={this.handleLogin} className={formOptions.className}>
        <div className={usernameOptions.containerClassName}>
          <input
            maxLength={usernameOptions.maxLength}
            placeholder={usernameOptions.placeholder}
            autoComplete="off"
            className={usernameOptions.className}
            onChange={e => this.handleChange('Username', e)}
            type={usernameOptions.type}
          />
          <ErrorText errText={this.state.error.email} />
          <span className="glyphicon glyphicon-envelope " />
        </div>
        <div className={passwordOptions.containerClassName}>
          <input
            autoComplete="off"
            className={passwordOptions.className}
            maxLength={40}
            name="Password"
            onChange={e => this.handleChange('Password', e)}
            placeholder={passwordOptions.placeholder}
            type="password"
          />
          <ErrorText errText={this.state.error.password} />
          <span className="glyphicon glyphicon-lock" />
        </div>
        <div style={{
            content: ' ',
            marginRight: -15,
            marginLeft: -15
          }}
        >
          <div className="remember-container">
            <div>
              <label htmlFor="remember">
                <input
                  id="remember"
                  checked={this.state.remember}
                  onChange={this.handleCheck}
                  type="checkbox"
                /> {i18n.rememberMe}
              </label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="btnSubmit">{i18n.submitLabel}</button>
          </div>
        </div>
      </form>
    );
  }
}
LoginForm.propTypes = {
  username: PropTypes.object,
  password: PropTypes.object,
  form: PropTypes.object,
  text: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};


LoginForm.defaultProps = {
  username: {},
  password: {}
};

export default LoginForm;
