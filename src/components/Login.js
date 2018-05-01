// @flow
import React from 'react';
import Auth from '../libs/Auth';
import Button from 'material-ui/Button';

type Props = {
  userHasAuthenticated : Function
}

type State = {
  isLoading: boolean
}

export default class Login extends React.Component<Props, State> {

  state = {
    isLoading: false
  }

  login = (event: SyntheticEvent<HTMLButtonElement>) => {

    this.setState({ isLoading: true });

    try {
      /*await*/ Auth.signIn();
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div>
        <Button variant="raised" color="primary" onClick={this.login}>
          Log in
        </Button>
      </div>
    )
  }
}