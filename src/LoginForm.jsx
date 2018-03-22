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
    // this.setState({
    //   error: {}
    // });

    console.log(styles);

    // this.props.dispatch(login(this.state.Username, this.state.Password, this.state.remember)).then(response => {
    //   this.setState({loading: false});
    //
    //   if (response.isAuthenticated) {
    //     this.props.history.push(this.props.defaultPage);
    //   } else if (response.data.errors) {
    //     let {status} = response.data;
    //     let {errors} = response.data.data;
    //
    //     if (status === 400) {
    //       let errMessages = {};
    //       errors.map(item => {
    //         errMessages[item.source.pointer] = item.detail;
    //       });
    //
    //       this.setState({
    //         error: errMessages
    //       });
    //     } else {
    //       let message = 'Login fail';
    //       if (errors) {
    //         message = errors.detail || message;
    //         this.setState({
    //           error : {
    //             password: 'Invalid email or password'
    //           }
    //         });
    //       }
    //     }
    //   }
    // });
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
      type: 'email'
    };

    if (this.props.username) {
      usernameOptions = Object.assign(usernameOptions, this.props.username);
    }

    return (
      <form action="javascript:void(0)" noValidate onSubmit={this.handleLogin} className='login-form'>
        <div className='input-container'>
          <input
            maxLength={usernameOptions.maxLength}
            placeholder={usernameOptions.placeholder}
            autoComplete="off"
            className="form-control"
            onChange={e => this.handleChange('Username', e)}
            type={usernameOptions.type}
          />
          <ErrorText errText={this.state.error.email} />
          <span className="glyphicon glyphicon-envelope " />
        </div>
        <div className="form-group has-feedback input-container">
          <input
            autoComplete="off"
            className="form-control"
            maxLength={40}
            name="Password"
            onChange={e => this.handleChange('Password', e)}
            placeholder="Password"
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
          <div className='remember-container'>
            <div>
              <label htmlFor="remember">
                <input
                  id="remember"
                  checked={this.state.remember}
                  onChange={this.handleCheck}
                  type="checkbox"
                /> Remember Me
              </label>
            </div>
          </div>
          <div className='button-container'>
            <button type="submit" className='btnSubmit'>Sign In</button>
          </div>
        </div>
      </form>
    );
  }
}
LoginForm.propTypes = {
  username: PropTypes.object
};


LoginForm.defaultProps = {
  username: {}
};

export default LoginForm;
