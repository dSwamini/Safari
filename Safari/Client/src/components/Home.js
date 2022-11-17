import React from 'react';
import {NavLink} from "react-router-dom";
import escape from './images/escape_hmpg.gif';
import explore from './images/explore.gif';
import discover from './images/discover_hmpg.gif';
import aboutusheader from './images/aboutusheader.jpg';
import aboutuscontent from './images/aboutuscontent.jpg';
import team1 from './images/team1.jpeg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';

const Home = () => {
  return (
    <div>


      <section className='carousel-bg'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner ">
            <div class="carousel-item active" data-bs-interval="5000">
              <img src={explore} class="d-block w-100 " alt="Escape" />
            </div>
          </div>
        </div>
      </section>

    

      <section className='about-us-head' id='aboutus'>
        <div class="aboutUsheader">
          <img src={aboutusheader} class="d-block w-100" alt="About Us" />
        </div>
      </section>
      <section className='about-us-content'>
        <div>
          <img src={aboutuscontent} class="d-block w-100" alt="about us" />
        </div>
      </section>


      <section className='header-options'>
        <div class="options">
          <button class="btn  btn-style-invert " type="submit" href="#footer">Contact Us</button>
        </div>
        <div class="options1">
  
          <NavLink to="/events"><button class="btn  btn-style-invert " type="submit">Explore</button></NavLink>
        </div>
      </section>
  
      <section className='team'>
        <div class="container-fluid d-flex justify-content-center mt-100">



          <div class="row">

            <div class="col-lg-4">

              <div class="card">
                <div class="card-body text-center">
            
                  <img src={team2} class="rounded-circle" width="150" height="150" />
                  <h5 class="card-title mt-2 mb-1"></h5>
                  <span class="fs-2 mb-3 font-weight-bold">Janhvi Katkar</span>
                  <p class="mb-5 mt-4">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"</p>
           
                  <ul class="list-inline">
                    <li class="list-inline-item"><a><i class="fa fa-facebook fa-2x facebook"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-twitter fa-2x twitter"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-linkedin fa-2x linkedin"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-google fa-2x google"></i></a></li>
                  </ul>

                </div>
              </div>
            </div>


            <div class="col-lg-4">
              <div class="card">
                <div class="card-body text-center">
            
                  <img src={team1} class="rounded-circle" width="150" height="150" />
                  <h5 class="card-title mt-2 mb-1"></h5>
                  <span class="fs-2 mb-3 font-weight-bold">Namrata Das</span>
                  <p class="mb-5 mt-4">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"</p>
           
                  <ul class="list-inline">
                    <li class="list-inline-item"><a><i class="fa fa-facebook fa-2x facebook"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-twitter fa-2x twitter"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-linkedin fa-2x linkedin"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-google fa-2x google"></i></a></li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body text-center">
            
                  <img src={team3} class="rounded-circle" width="150" height="150" />
                  <h5 class="card-title mt-2 mb-1"></h5>
                  <span class="fs-2 mb-3 font-weight-bold">Swamini Dumbre</span>
                  <p class="mb-5 mt-4">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"</p>
           
                  <ul class="list-inline">
                    <li class="list-inline-item"><a><i class="fa fa-facebook fa-2x facebook"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-twitter fa-2x twitter"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-linkedin fa-2x linkedin"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-google fa-2x google"></i></a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  


    </div>
  );
    }

export default Home