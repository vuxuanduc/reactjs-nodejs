import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
// import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleOnchangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = () => {
    alert("Đức đẹp trai");
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row px-3 pb-4">
            <div className="col-12 text-center">
              <h2 className="mt-3 fw-600">Login</h2>
            </div>
            <div className="col-12 form-group">
              <label className="label-username">Username</label>
              <input
                type="text"
                className="username form-control"
                placeholder="Username..."
                value={this.state.username}
                onChange={(event) => this.handleOnchangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group mt-3">
              <label className="label-password">Password</label>
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="password form-control"
                  placeholder="Password..."
                  value={this.state.password}
                  onChange={(event) => this.handleOnchangePassword(event)}
                />
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  <i
                    class={
                      this.state.isShowPassword
                        ? "fas fa-eye"
                        : "fas fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12 form-group mt-3">
              <input
                type="submit"
                className="btn-login form-control text-white"
                value={"Login"}
                onClick={() => {
                  this.handleLogin();
                }}
              />
            </div>
            <div className="col-12 d-flex justify-content-between mt-3">
              <span className="btn-page-sign-up">Sign up</span>
              <span className="btn-page-forgot">Forgot password</span>
            </div>
            <div className="col-12 text-center mt-3">Or sign in with</div>
            <div className="col-12 social-login mt-3 d-flex justify-content-center">
              <i className="fab fa-google-plus-g mx-2"></i>
              <i className="fab fa-facebook-f mx-2"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
