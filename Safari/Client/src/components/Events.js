import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import {NavLink} from "react-router-dom";
import event1 from './images/event1.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.jpg';
import upcoming1 from './images/book-5.png';
import upcoming2 from './images/book-3.png';
import upcoming3 from './images/book-1.png';
import season1 from './images/blog-2.jpg';
import season2 from './images/blog-3.jpg';
import season3 from './images/blog-4.jpg';


const Events = () => {
  
  
  return (

    <div>

      <div class="event-carousel">

    
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <div class="row">
                <img src={event1} class="d-block w-50 h-50" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <div class="event-info w-50 h-50 ">
                    <h5>Rare white tigress</h5>
                    <p> has given birth to three healthy cubs at the Delhi zoo on August 24.</p>
                    <p>"We welcome our new guests. Three white tiger cubs born in Delhi zoo,"</p>
                    <p>National Zoological Park (NZP),
                      New Delhi announced this on its</p>
                    <p>official twitter handle.</p>
                    <NavLink to="/getevents/636c861614a2b1aef0585f76"><button class="btn  btn-style" type="submit"  >Visit</button></NavLink>
                  </div>
        
                </div>
              </div>
      
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <div class="row">
                <img src={event2} class="d-block w-50 h-50" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <div class="event-info w-50 h-50 ">
                    <h5>Lake Bogoria</h5>
                    <p>is a bird-watching destination and is famous for the pink flamingos which</p>
                    <p> are found in large numbers. Lake Bogoria turns a shade of pink in August-October</p>
                    <p> because of its flamingo population.</p>
                    <NavLink to="/getevents/636c861614a2b1aef0585f79"><button class="btn  btn-style" type="submit"  >Visit</button></NavLink>
                  </div>
          
                </div>
              </div>
      
            </div>
            <div class="carousel-item">
              <div class="row">
                <img src={event3} class="d-block w-50 h-50" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <div class="event-info w-50 h-50 ">
                    <h5>Saaya</h5>
                    <p>a rare black panther, and Cleopatra, a leopard </p>
                    <p>are a sight to behold when they are together at the </p>
                    <p>Kabini National Park in Karnataka.</p>
                    <NavLink to="/getevents/636c861614a2b1aef0585f78"><button class="btn  btn-style" type="submit"  >Visit</button></NavLink>
                  </div>
        
                </div>
              </div>

            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <section className='upcoming'>
        <div class="blog-home2 py-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 text-center">
                <h3 class="my-3">Upcoming Events</h3>
                <h6 class="subtitle font-weight-normal">You can relay on our amazing features list and also our customer services will be great experience for you without doubt</h6>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-4 on-hover">
                <div class="card border-0 mb-4">
                  <a href="#"><img class="card-img-top " src={upcoming1} alt="wrappixel kit" width="100px" height="250px" /></a>
                  <div class="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">Oct<span class="d-block">23</span></div>
                  <h5 class="font-weight-medium mt-3"><a href="#" class="text-decoration-none link">You should have eagle’s eye on new trends and techonogies</a></h5>
                  <p class="mt-3">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                  <a href="#" class="text-decoration-none linking text-themecolor mt-2">Learn More</a>
                </div>
              </div>
              <div class="col-md-4 on-hover">
                <div class="card border-0 mb-4">
                  <a href="#"><img class="card-img-top" src={upcoming2} alt="wrappixel kit" width="100px" height="250px" /></a>
                  <div class="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">Oct<span class="d-block">23</span></div>
                  <h5 class="font-weight-medium mt-3"><a href="#" class="text-decoration-none link">New Seminar on Newest Food Recipe from World’s Best</a></h5>
                  <p class="mt-3">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                  <a href="#" class="text-decoration-none linking text-themecolor mt-2">Learn More</a>
                </div>
              </div>
              <div class="col-md-4 on-hover">
                <div class="card border-0 mb-4">
                  <a href="#"><img class="card-img-top" src={upcoming3} alt="wrappixel kit" width="100px" height="250px" /></a>
                  <div class="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">Oct<span class="d-block">23</span></div>
                  <h5 class="font-weight-medium mt-3"><a href="#" class="text-decoration-none link">Learn from small things to create something bigger.</a></h5>
                  <p class="mt-3">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>
                  <a href="#" class="text-decoration-none linking text-themecolor mt-2">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="newsletter">

        <form action="">
          <h3>Subscribe for latest updates</h3>
          <input type="email" name="" placeholder="enter your email" id="" class="box" />
          <input type="submit" value="subscribe" class="btn btn-style" />
        </form>

      </section>

      <section className='seasonal'>
        <div className='seasonal-heading'>
          <h1>
            <span><h5>Seasonal</h5></span> <br />
            <span><h5>Attractions</h5></span>
            <br />
            <span>Check</span>
            <span>out</span>
            <span>the</span>
            <span>best</span>
            <span>season</span>
            <span>to</span>
            <span>visit</span>
            <span>your</span>
            <span>favourite</span>
            <span>place.</span>
          </h1>
        </div>
        <div class="season-card-container container d-flex align-items-center justify-content-center position-relative flex-wrap">
          <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
              <img src={season1} />
            </div>
            <div class="content">
              <h2>Card One</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
              <button class="btn  btn-style " type="submit">Know More</button>
            </div>
          </div>
          <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
              <img src={season2} />
            </div>
            <div class="content">
              <h2>Card Two</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
              <button class="btn  btn-style " type="submit">Know More</button>
            </div>
          </div>
          <div class="card d-flex position-relative flex-column">
            <div class='imgContainer'>
              <img src={season3} />
            </div>
            <div class="content">
              <h2>Card Three</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
              <button class="btn  btn-style " type="submit">Know More</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );


}

export default Events