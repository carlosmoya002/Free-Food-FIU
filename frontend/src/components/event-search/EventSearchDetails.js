const EventSearchDetails = function({event}){
    return(
        <div className="event-details">
            <h4>{event.name}</h4>
            <p>{event.organizer}</p>
            <p>{event.location}</p>
            <p>{event.time}</p>
            <p>{event.date}</p>
            <p>{event.refreshments}</p>
            <p>{event.preferences}</p>
            <p>{event.allergies}</p>
            <br></br>
            <br></br>
        </div>
    );
} 
export default EventSearchDetails