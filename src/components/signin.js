import React, { Component } from 'react';

class SignIn extends Component {
  closeSignIn() {
    document.getElementById('modal-start').style.display='none';
  }

  accessSignIn() {
    document.getElementById('modal-start').style.display='none';
  }

  render() {
    return (
      <div id="modal-start" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={this.closeSignIn}>
                &times;</span>
            <h3>Sign in Info.</h3>
          </div>
          <div className="modal-info">
            <label className="modal-label">Name</label>
            <input className="modal-input" type="text" placeholder="Enter name" id="name" />
            <label className="modal-label">Email</label>
            <input className="modal-input" type="Email" placeholder="Enter Email" id="email" />
            <label className="modal-label">Password</label>
            <input className="modal-input" type="password" placeholder="Enter Password" id="password" />
            <label className="modal-label">Confirm password</label>
            <input className="modal-input" type="password" placeholder="Enter Password again" id="confirm" />
            <button onClick={this.accessSignIn} className="modal-btn">Submit</button>
          </div>
        </div>    
      </div>
    )
  }
}

export default SignIn;

