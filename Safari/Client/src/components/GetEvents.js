
import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import axios from 'axios'

const GetEvents = () => {

    const [events, setEvents] = useState();
    // const events = [
    //     { "_id": { "$oid": "636c861614a2b1aef0585f75" }, "id": "1", "eventName": "Niligiri Tiger Fest", "eventDesc": "A rare variety of white tiger was spotted in the Nilgiris for the first time in 2017. The gorgeous creature was spotted by a wildlife photographer from Bengaluru in Nilgiri Biosphere Reserve who captured the sight in his camera.", "mainImageURL": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_18/410361/140430-white-tiger-cubs-lima-945a.jpg", "location": "Nilgiri Hills, Tamil Nadu", "date": "12/10/2023", "duration": "3 Days", "cost": "13000", "nearby-attracn": "Coonoor Ooty" },
    //     { "_id": { "$oid": "636c861614a2b1aef0585f75" }, "id": "1", "eventName": "Niligiri Tiger Fest2", "eventDesc": "A rare variety of white tiger was spotted in the Nilgiris for the first time in 2017. The gorgeous creature was spotted by a wildlife photographer from Bengaluru in Nilgiri Biosphere Reserve who captured the sight in his camera.", "mainImageURL": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_18/410361/140430-white-tiger-cubs-lima-945a.jpg", "location": "Nilgiri Hills, Tamil Nadu", "date": "12/10/2023", "duration": "3 Days", "cost": "13000", "nearby-attracn": "Coonoor Ooty" }
    // ]
    useEffect(() => {
        axios.get('http://localhost:5000/getevents/').then(res => {
            setEvents(res.data);
        })
    },[])

    return (
        <div>
            <div className='event-all' ><h5>All events</h5></div>
        {
            events ? 
            events.map(e => (
                <>
                    
                    <EventCard event={e}/>
                </>
            )) :
            null
        }
    </div>
  )
}

export default GetEvents