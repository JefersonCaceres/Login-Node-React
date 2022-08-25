import React from "react";
import loginImg from "../../login.svg";
import { apiUrlNode } from "../../service/apirest";
import axios from "axios";
//import { Bingo } from "./bingo";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
// variable para guardar los datos traidos del input
  state={
    form:{
      "username":"",
      "password":""
    },
    error: false,
    errorMsg: ""
  }

  manejoRedirec =e=>{
    e.render("Bingo");
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
  // login
  // nos permite conectarnos por medio de axion a el backend de node js
  manejadorButton = e => {
    let url = apiUrlNode + "login"
    axios.post(url, this.state.form).then(response => {
     
      
    })
  }
// creacion de plantilla login
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form" onSubmit={this.manejadorSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.manejadorChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.manejadorChange}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <a type="button" className="btn" onClick={this.manejadorButton } render="bingo.js" >
            Login
          </a>
        </div>
      </div>
    );
  }
}