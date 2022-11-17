import React,{useState , useContext} from 'react'
import {NavLink} from "react-router-dom";
import safari from './images/jungle_logo.png';

import {UserContext} from "../App";

const Navbar = () => {
  const {state , dispatch} = useContext(UserContext);
    const [show,setShow] = useState(false);

    const RenderMenu = () => {
      if(state){
        return (

          <div>
            <section className='navbar-bg'>
              <nav class="navbar navbar-expand-lg ">
                <div class="container">
                  <a class="navbar-brand" href="#"><img src={safari} className="logo" /></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/wishlist">Favourites</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/events">Events</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/map">Map</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/community">Community</NavLink>
                      </li>
                    </ul>
      
                    <form class="d-flex" role="search">
                      <NavLink className="nav-link" to="/logout"><button class="btn  btn-style " type="submit">Logout</button></NavLink>
                    </form>
      
                  </div>
                </div>
              </nav>
            </section>
          </div>

        );
      } else{
        return (

          <div>
            <section className='navbar-bg'>
              <nav class="navbar navbar-expand-lg ">
                <div class="container">
                  <a class="navbar-brand" href="#"><img src={safari} className="logo" /></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/wishlist">Account</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/events">Events</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/map">Map</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink className="nav-link" to="/community">Community</NavLink>
                      </li>
                    </ul>
      
                    <form class="d-flex" role="search">
                      <NavLink className="nav-link" to="/login"><button class="btn  btn-style " type="submit">Login</button></NavLink>
                    </form>

      
                  </div>
                </div>
              </nav>
            </section>
          </div>

        );
      }
    }

  return (
    <RenderMenu />
  );
}

export default Navbar;  