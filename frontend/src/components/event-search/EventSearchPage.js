import { useEffect, useState } from 'react'

//components
import EventSearchDetails from './EventSearchDetails'

const EventSearchPage = function(){
    const[events,setEvents] = useState(null)

    useEffect(function(){
        const fetchEvents = async function() {
            const response = await fetch('/api/events/')
            const json = await response.json()

            if (response.ok) {
                setEvents(json)
            }
        }

        fetchEvents()
    }, []) 

    const [query,setQuery] = useState("")


    return(
        <div className="event-search">
            <div className="events">
                <input type="text" placeholder="Search..." className="search" onChange={(e)=>setQuery(e.target.value)}/>
                {events && events.filter(event=>event.location.toLowerCase().includes(query)).map((event) => (
                    <EventSearchDetails key={event._id} event={event}/>
                ))}
            </div>
        </div>
    );
}

export default EventSearchPage;