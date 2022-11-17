import React,{useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import { UserContext } from "../App";
// import { toast } from 'react-toastify';

const Login = () => {

  const {state , dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({
      email,
      password
  })
    }) ;
    const data = await res.json();

    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
      //console.log("Invalid registration");
  }else{

      dispatch({type:"USER", payload:true});

      window.alert("Login Successful");
      //console.log("Successful registration");
      console.log(data)
      localStorage.setItem("jwt",data)
      navigate("/", { replace: true }); 
  }
  }

  return (
    <div>
    
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 col-md-7 intro-section">
            <div class="brand-wrapper">
            </div>
            <div class="intro-content-wrapper">
              <h1 class="intro-title">Welcome to website !</h1>
              <p class="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna</p>
              <a href="#!" class="btn btn-read-more">Read more</a>
            </div>
            <div class="intro-section-footer">
              <na class="footer-nav">
                <a href="#!">Facebook</a>
                <a href="#!">Twitter</a>
                <a href="#!">Gmail</a>
              </na>
            </div>
          </div>
          <div class="col-sm-6 col-md-5 form-section">
            <div class="login-wrapper">
              <h2 class="login-title">Sign in</h2>
              <form action="#!" method='POST'>
                <div class="form-group">
                  <label for="email" class="sr-only"></label>
                  <input type="email" name="email" id="email" class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
                </div>
                <div class="form-group mb-3">
                  <label for="password" class="sr-only"></label>
                  <input type="password" name="password" id="password" class="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                </div>
                <div class="d-flex justify-content-between align-items-center mb-5">
                  <input name="login" id="login" class="btn  btn-style" type="button" value="Login"
                    onClick={loginUser} />
                  <a href="#!" class="forgot-password-link">Password?</a>
                </div>
              </form>
              <p class="login-wrapper-footer-text">Need an account? <NavLink to="/signup" class="text-reset">Signup here</NavLink></p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
  
}

export default Login