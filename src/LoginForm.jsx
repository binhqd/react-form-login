import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ErrorText from './ErrorText';
// import styles from './style.scss';
let styles = require('!css-loader?importLoaders=1&modules=true&localIdentName=[name]__[local]___[hash:base64:5]!./style.css');

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

  }

  handleLogin() {
    this.setState({
      error: {}
    });

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

    const TheForm = styled.form`
      color: #666;
      font-size: 14px;
      line-height: 1.42857143;
      width: 360px;
      margin: 7% auto;
    `;

    const InputContainer = styled.div`
      ${'' /* margin-bottom: 15px; */}
    `;

    const Input = styled.input`
      padding-right: 42.5px;
      border-radius: 0;
      box-shadow: none;
      border-color: #d2d6de;

      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      box-sizing: border-box;
    `;

    const Username = Input.extend``;
    const Password = Input.extend``;

    const BtnSigninContainer = styled.div`
      width: 33.33333333%;
      float: left;
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      box-sizing: border-box;
    `;

    const BtnSignin = styled.button`
      color: #fff;
      background-color: #204d74;
      border-color: #122b40;
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
      border-radius: 0;
      border-width: 1px;
      text-decoration: none;
      border: 1px solid transparent;
      display: block;
      width: 100%;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      user-select: none;
      -webkit-appearance: button;
      text-transform: none;
      overflow: visible;
      box-sizing: border-box;
    `;

    const RememberContainer = styled.div`
      width: 66.66666667%;
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      box-sizing: border-box;
      float: left;
    `;

    const InputIcon = styled.span`
      color: #777;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      display: block;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      pointer-events: none;
      font-family: 'Glyphicons Halflings';
      font-style: normal;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      font-size: 14px;

      &:before {
        content: "\\2709";
      }
    `;

    return (
      <TheForm action="javascript:void(0)" noValidate onSubmit={this.handleLogin}>
        <InputContainer className={styles.locals['input-container']}>
          <Username
            maxLength={usernameOptions.maxLength}
            placeholder={usernameOptions.placeholder}
            autoComplete="off"
            className="form-control"
            onChange={this.handleChange.bind(this, 'Username')}
            type={usernameOptions.type}
            value={this.state.Username}
          />
          <ErrorText errText={this.state.error.email} />
          <InputIcon className="glyphicon glyphicon-envelope form-control-feedback" />
        </InputContainer>
        <InputContainer className="form-group has-feedback">
          <Password
            autoComplete="off"
            className="form-control"
            maxLength={40}
            name="Password"
            onChange={this.handleChange.bind(this, 'Password')}
            placeholder="Password"
            type="password"
            value={this.state.Password}
          />
          <ErrorText errText={this.state.error.password} />
          <InputIcon className="glyphicon glyphicon-lock form-control-feedback" />
        </InputContainer>
        <div style={{
            content: ' ',
            marginRight: -15,
            marginLeft: -15
          }}
        >
          <RememberContainer>
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
          </RememberContainer>
          <BtnSigninContainer>
            <BtnSignin type="submit">Sign In</BtnSignin>
          </BtnSigninContainer>
        </div>
      </TheForm>
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
