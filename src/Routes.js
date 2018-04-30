import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import LoadingIndicator from './components/LoadingIndicator';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import Home from 'components/Home/Loadable';
import Products from 'components/Products/Loadable';

// routes
const LOADING_DELAY = 300 // 0.3 seconds

const Category = Loadable({
  loader: () => import("./components/Category"),
  loading: LoadingIndicator,
  delay: LOADING_DELAY
});

const Login = Loadable({
  loader: () => import("./components/Login"),
  loading: LoadingIndicator,
  delay: LOADING_DELAY
});

const NotFound = Loadable({
  loader: () => import("./components/NotFound"),
  loading: LoadingIndicator,
  delay: LOADING_DELAY
});

const Admin = Loadable({
  loader: () => import("./components/Admin"),
  loading: LoadingIndicator,
  delay: LOADING_DELAY
});

export default ({ childProps }) =>
	<Switch>
		<AppliedRoute
      		path="/"
     	 	exact
      		component={Home}
      		props={childProps}
    	/>
		<UnauthenticatedRoute
      		path="/login"
      		exact
      		component={Login}
      		props={childProps}
    	/>
		<Route path="/category" component={Category}/>
		<Route path="/products" component={Products}/>
		<AuthenticatedRoute
      		path="/admin"
      		exact
      		component={Admin}
      		props={childProps}
    	/>
		<Route component={NotFound} />
	</Switch>
;
