import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <legend>Form title</legend>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" id="" placeholder="Input username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" id="" placeholder="Input password" />
          </div>         
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onSubmitForm = () => {
    console.log('onSubmitForm')
  }
}

export default LoginForm;