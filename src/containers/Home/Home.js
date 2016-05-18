import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleClick() {
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    console.log(email + ':' + password);
  }
  render() {
    const styles = require('./Home.scss');
    return (
      <div>
        <Helmet title="Home"/>
           <section className={styles.login} >
                <div className="container">
                  <div className="row">
                      <div className="col-xs-12">
                          <div className={styles.wrap}>
                                <h1> Log in with your email account </h1><br />
                                <form role="form" method="post" id="login-form" >
                                    <div className="form-group">
                                        <label className="sr-only">Email</label>
                                        <input onChange={this.handleEmailChange.bind(this)} type="email" name="email" id="email" className="form-control" placeholder="somebody@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">Passwords</label>
                                        <input onChange={this.handlePasswordChange.bind(this)} type="password" name="key" id="key" className="form-control" placeholder="Password" />
                                    </div>
                                    <a onClick={this.handleClick.bind(this)} className="btn btn  btn-success btn-lg btn-block" ><i className="fa fa-user"></i>{' '}Login</a>
                                </form>
                           </div>
                    </div>
                  </div>
                </div>
            </section>
      </div>
    );
  }
}
