import React from 'react';
import './css/SavedEventPage.css';
import Header from './Header';
import EventDate from './css/EventDate.css';
import OtherInputStyle from './css/OtherInputStyle.css';

function formatTime(time) {
  const [hours, minutes] = time.split(":");
  let period = "";

  if (hours >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }
  // Convert hours to 12-hour format
  const hours12 = (hours % 12) || 12;

  return `${hours12}:${minutes} ${period}`;
}


function SavedEventsList({ events, handleEdit, handleDelete, eventData }) {
  return (
    <div>
      <Header />
      <h5 className="header-saved">Saved Events:</h5>
      <div className="saved-events-container">
        {events.map((event, index) => {
          const eventDate = new Date(event.date);
          const year = eventDate.getFullYear();
          const month = eventDate.toLocaleString('en-US', { month: 'long' });
          const date = eventDate.getDate();
          const time = event.time;

          return (
            <li key={index} className="event-container">
              <div className="column-left">
                <div className="event-details">
                  <div>
                    <h1 className='event-name'>{event.name}</h1>
                  </div>
                  <div className='date-time-container'>
                    <div className='new-date-control'>
                      <span className='new-date-month'>{`${month}`}</span>
                      <span className='new-date-year'>{`${year}`}</span>
                      <span className='new-date-day'>{`${date}`}</span>
                    </div>
                    <div className='new-time-control'>
                      <span className='time-label'>Time:</span>
                      {formatTime(time)}
                    </div>
                  </div>
                  <div className='location'>
                    <strong>Location:</strong> {event.location}
                  </div>
                  <div className='participants'>
                    <strong>Participants:</strong> {event.participants}
                  </div>
                  <div className='refreshments'>
                    <strong>Refreshments:</strong> {event.refreshments ? 'Yes' : 'No'}
                  </div>
                  {event.refreshments && (
                    <div className="refreshment-details">
                      <strong>Refreshment Type:</strong> {event.refreshmentType}
                      <div className="dietary-restrictions">
                        <strong>Dietary Restrictions:</strong> {event.dietaryRestrictions}
                      </div>
                    </div>
                  )}
                </div>
                {/*<button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>*/}
                <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
              </div>
              <div className="column-right"></div>
              <div>
                {event.imageUrl && <img src={event.imageUrl} alt="Event Invitation" className="event-image" />}
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default SavedEventsList;






