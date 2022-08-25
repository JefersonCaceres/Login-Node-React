import React from "react";
import loginImg from "../../login.svg";
import { apiUrlNode } from "../../service/apirest";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
// variable para guardar los datos traidos del input
  state = {
    form: {
      "name": "",
      "username": "",
      "password": ""
    },
    error: false,
    errorMsg: ""
  }

  manejadorSubmit = e => {
    e.preventDefault();
  }
 
// nos trae los datos digitados
  manejadorChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }
  // createuser
  // nos permite conectarnos por medio de axion a el backend de node js
  manejadorButton = e => {
    let url = apiUrlNode + "createuser"
    axios.post(url, this.state.form).then(response => {
      console.log(response);
    })
  }
// creacion de plantilla
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form" onSubmit={this.manejadorSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="name" onChange={this.manejadorChange} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.manejadorChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.manejadorChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="onSubmit" className="btn" onClick={this.manejadorButton}>
            Register
          </button>
        </div>
      </div>
    );
  }
}