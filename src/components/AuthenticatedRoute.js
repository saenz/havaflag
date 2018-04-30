import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const AuthenticatedRoute = ({component: Component, authed, ...rest}) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
//   )
// }

export default ({ component: C, props: cProps, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated
        ? <C {...props} {...cProps} />
        : <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location.search}`}
          />}
  />;