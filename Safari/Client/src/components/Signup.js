import React,{useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();

    const [user,setUser] = useState({
        name:"",email:"",password:"",cpassword:""
    });
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({... user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();
        const {name,email,password,cpassword} = user;
        const res = await fetch("/register",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name,email,password,cpassword
            })
        });
        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Invalid registration");
            console.log("Invalid registration");
        }else{
            window.alert("Successful registration");
            console.log("Successful registration");

            navigate("/login", { replace: true }); 
        }
    }

  return (
    <>
   
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
              <h2 class="login-title">Sign Up</h2>
              <form method="POST" action="#!">
                <div class="form-group">
                  <label for="name" class="sr-only"></label>
                  <input type="text" name="name" id="name" class="form-control"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Username" />
                </div>
                <div class="form-group">
                  <label for="email" class="sr-only"></label>
                  <input type="email" name="email" id="email" class="form-control"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Email" />
                </div>
                <div class="form-group mb-3">
                  <label for="password" class="sr-only"></label>
                  <input type="password" name="password" id="password" class="form-control"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Password" />
                </div>
                <div class="form-group mb-3">
                  <label for="cpassword" class="sr-only"></label>
                  <input type="password" name="cpassword" id="cpassword" class="form-control"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="Confirm Password" />
                </div>
                <div class="d-flex justify-content-between align-items-center mb-5">
                  <input name="signup" id="signup" class="btn btn-style" type="button" value="Submit" onClick={PostData} />
               
                </div>
              </form>
            
              <p class="login-wrapper-footer-text">Have an account? <NavLink to="/login" class="text-reset">Login here</NavLink>  </p>
            
                     
            
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default Signup