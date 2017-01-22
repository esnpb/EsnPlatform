import React from 'react';
import { Link } from 'react-router';
import { Panel, PanelHeader, PanelBody } from '../components/Shared/Panel';

export default function Login(props) {
  return (
    <Panel panelClass="login-panel" type="default">
      <PanelHeader>
        <h3 class="panel-title">{props.title}</h3>
      </PanelHeader>
      <PanelBody>
        <form role="form">
          <fieldset>
            <div class="form-group">
              <input class="form-control" placeholder="E-mail" name={props.loginName} type={props.loginType} autoFocus="" />
            </div>
            <div class="form-group">
              <input class="form-control" placeholder={props.passPlaceholder} name={props.passName} type="password" value="" />
            </div>
            {props.allowRemember ?
              <div class="checkbox">
                <label>
                  <input name="remember" type="checkbox" value={props.rememberLabel} />{props.rememberLabel}
                </label>
              </div> : null}
            <a href={props.target} class="btn btn-lg btn-success btn-block">{props.loginButtonTitle}</a>
          </fieldset>
        </form>
      </PanelBody>
    </Panel>
  );
}

Login.propTypes = {
  // your propTypes here
  title: React.PropTypes.string,
  loginName: React.PropTypes.string.isRequired,
  loginType: React.PropTypes.oneOf(['email', 'login', 'phone']).isRequired,
  loginPlaceholder: React.PropTypes.string,
  passName: React.PropTypes.string.isRequired,
  passPlaceholder: React.PropTypes.string,
  allowRemember: React.PropTypes.bool,
  rememberLabel: React.PropTypes.string,
  loginButtonTitle: React.PropTypes.string.isRequired,
  target: React.PropTypes.string.isRequired,
};

Login.defaultProps = {
  title: '',
  loginPlaceholder: '',
  passPlaceholder: '',
  allowRemember: false,
  rememberLabel: '',
};
