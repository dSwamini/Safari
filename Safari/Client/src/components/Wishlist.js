import React,{useEffect , useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import team1 from './images/team1.jpeg';

const Wishlist = () => {

  const navigate = useNavigate();
  const [userData , serUserData] = useState({});

  const callAboutPage = async () =>{
    try{
      const res = await fetch('/wishlist',{
        method: "GET",
        headers:{
          Accept: "application/json",
          "Content-Type" : "application/json"
        },
        credentials:"include"
      });

      const data = await res.json();        // holds the user data
      console.log(data);
      serUserData(data);


      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    }catch(err){
      console.log(err);
      navigate("/login", { replace: true }); 
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);
  

  return (
    <>
      
      <section className='profile'>

        <div class="container emp-profile">
          <form method="post">
            <div class="row">
              <div class="col-md-4">
                <div class="profile-img">
                  <img src="https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="" />
                  <div class="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="profile-head">
                  <h5>
                    {userData.name}
                  </h5>
                                    
                  <p class="profile-rating">RANKINGS : <span>8/10</span></p>
                  <ul class="nav nav-tabs " id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-2">
                <input type="submit" class="btn btn-style" name="btnAddMore" href="#" value="Edit Profile" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div className='description'>
                  <h5> Describe Yourself</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        
                    <div class="row">
                      <div class="col-md-6">
                        <label>Userame</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.name} </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Email</label>
                      </div>
                      <div class="col-md-6">
                        <p>{userData.email} </p>
                      </div>
                    </div>
                                        
                                        
                  </div>
                  <div class="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

      </section>

    </>
  );
}

export default Wishlist