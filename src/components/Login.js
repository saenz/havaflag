import React from 'react';
import Auth from 'libs/Auth';
import Button from 'material-ui/Button';

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };

  }

  login = event => {
    //event.preventDefault();

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
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <Button variant="raised" color="primary" onClick={this.login}>
          Log in
        </Button>
      </div>
    )
  }
}