import React from 'react'
import { useNavigate } from 'react-router-dom'

function PostCard(props) {
    const navigate = useNavigate()
    return (
        // <div>
        //       {props.event.eventName}
        //     <button onClick={()=>navigate('/getevents/'+props.event.id)}>View details</button>  
        // </div>
        <div>
            
            <section className="event-card">
                
                <div class="wrapper">
                    <div class="card">
        
                        <div class="image">
                            <img src={props.event.mainImageURL} />
                        </div>
                        <div class="details">
                            <h3>{props.event.eventName}</h3>
                            <div class="price-ratings">
                                <div class="price">
                                    <span>{props.event.cost}</span>
                                    {/* <span> <button class="btn btn-style" onClick={()=>navigate('/getevents/'+props.event._id)}>View details</button> </span> */}
                
                                </div>
                                <div class="ratings">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
            </section>


        </div>
    );
}

export default PostCard

