import React, { PureComponent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthHOC } from 'components/AuthorizeProvider';

class PrivateRoute extends PureComponent {
  render() {
    const { isAuthorized, component, path } = this.props;

    return isAuthorized ? <Route path={path} component={component} /> : <Redirect to="/login" />;
  }
}

export default AuthHOC(PrivateRoute);
