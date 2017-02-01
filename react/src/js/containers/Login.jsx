import React from 'react';
import Login from '../components/Login';

export default function LoginContainer() {
  return (
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <Login
          title="Please Sign In"
          loginName="login"
          loginPlaceholder="Login"
          passName="password"
          passPlaceholder="Password"
          allowRemember="true"
          rememberLabel="Remember me"
          loginButtonTitle="Login"
          target="/"
        />
      </div>
    </div>
  );
}

LoginContainer.propTypes = {
  // your propTypes here
  // title: React.PropTypes.string.isRequired,
};
