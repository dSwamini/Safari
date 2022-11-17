import React from 'react';
import {NavLink} from "react-router-dom";
import event1 from './images/event1.jpg';



const site1 = () => {
  return (
    <div>

      <section className='event-placard'>
        <div class="container">

   
          <h1 class="my-4">Event Name
            <small></small>
          </h1>
  
    
          <div class="row">
  
            <div class="col-md-7">
              <img class="img-fluid" src="https://via.placeholder.com/750x500" alt="event pic" />
            </div>
  
            <div class="col-md-5 event-content">
              <h3 class="my-3">Event Description</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.
                Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
              <h3 class="my-3">Event Details</h3>
              <ul>
                <p>Location : </p>
                <p>Date : </p>
                <p>Duration :</p>
                <p>Cost :</p>
                <p>Nearby Attractions :</p>
              </ul>

              <div class="options">
                <button class="btn  btn-style " type="submit" >Book Now</button>
              </div>

            </div>
  
          </div>
    
  
    
          <h3 class="my-4">See more...</h3>
  
          <div class="row">
  
            <div class="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
              </a>
            </div>
  
            <div class="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
              </a>
            </div>
  
            <div class="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
              </a>
            </div>
  
            <div class="col-md-3 col-sm-6 mb-4">
              <a href="#">
                <img class="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
              </a>
            </div>
  
          </div>
    
  
        </div>
      </section>

    </div>
  );
}

export default site1