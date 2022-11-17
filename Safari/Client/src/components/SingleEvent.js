import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {NavLink, useParams } from 'react-router-dom'

const SingleEvent = (props) => {
    const id = useParams().eventId;
  console.log(props)
  console.log(id)

    const [event,setEvent] = useState();

    useEffect(()=>{
      axios.get('/getalleventsbyid/'+id).then(res=>{
        setEvent(res.data[0]);
        console.log(res.data)
      })
    },[])

  return (
    <>
      {
        event? 
          
        <div>

        <section className='event-placard'>
          <div class="container">
  
     
            <h1 class="my-4">{event.eventName}
              <small></small>
            </h1>
    
      
            <div class="row">
    
              <div class="col-md-7">
                <img class="img-fluid" src={event.mainImageURL} alt="event pic" />
              </div>
    
              <div class="col-md-5 event-content">
                <h3 class="my-3">Event Description</h3>
                <p>{event.eventDesc}</p>
                <h3 class="my-3">Event Details</h3>
                <ul>
                  <p>Location : {event.location}</p>
                  <p>Date : {event.date} </p>
                  <p>Duration : {event.duration}</p>
                  <p>Cost : {event.cost}</p>
                  <p>Nearby Attractions :{event.nearby_attracn}</p>
                </ul>
  
                <div class="options">
                  <button class="btn  btn-style " type="submit" >Book Now</button>
                    </div>
                
                    <div className='viewmore'>
                    <NavLink to="/getevents"><h5>View More Events >></h5></NavLink>
                </div>

              </div>
    
            </div>
    
          </div>
        </section>
  
      </div>

        :null
      }
    </>

  )
}

export default SingleEvent


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const SingleEvent = (props) => {
//     const id = useParams().eventId;
//   console.log(props)
//   console.log(id)

//     const [event,setEvent] = useState();

//     useEffect(()=>{
//       axios.get('/getalleventsbyid/'+id).then(res=>{
//         setEvent(res.data[0]);
//         console.log(res.data)
//       })
//     },[])

//   return (
//     <>
//       {
//         event? 
//           <div>{event.eventDesc}</div>
//         :null
//       }
//     </>

//   )
// }

// export default SingleEvent

// import React from 'react'
// import { useParams } from 'react-router-dom'

// const SingleEvent = (props) => {
//   const id = useParams().id;
//     const [event, setEvent] = useState();
//     // const events = [
//     //     { "_id": { "$oid": "636c861614a2b1aef0585f75" }, "id": "1", "eventName": "Niligiri Tiger Fest", "eventDesc": "A rare variety of white tiger was spotted in the Nilgiris for the first time in 2017. The gorgeous creature was spotted by a wildlife photographer from Bengaluru in Nilgiri Biosphere Reserve who captured the sight in his camera.", "mainImageURL": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_18/410361/140430-white-tiger-cubs-lima-945a.jpg", "location": "Nilgiri Hills, Tamil Nadu", "date": "12/10/2023", "duration": "3 Days", "cost": "13000", "nearby-attracn": "Coonoor Ooty" },
//     //     { "_id": { "$oid": "636c861614a2b1aef0585f75" }, "id": "1", "eventName": "Niligiri Tiger Fest2", "eventDesc": "A rare variety of white tiger was spotted in the Nilgiris for the first time in 2017. The gorgeous creature was spotted by a wildlife photographer from Bengaluru in Nilgiri Biosphere Reserve who captured the sight in his camera.", "mainImageURL": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_18/410361/140430-white-tiger-cubs-lima-945a.jpg", "location": "Nilgiri Hills, Tamil Nadu", "date": "12/10/2023", "duration": "3 Days", "cost": "13000", "nearby-attracn": "Coonoor Ooty" }
//     // ]
//     useEffect(() => {
//         axios.get('http://localhost:5000/geteventsbyid/'+id).then(res => {
//             setEvent(res.data);
//         })
//     },[])
//     console.log(props)
//   return (
//       <div>{props.details.eventDesc}</div>
//   )
// }

// export default SingleEvent