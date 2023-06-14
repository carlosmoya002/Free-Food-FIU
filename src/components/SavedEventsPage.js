import React from 'react';
import './css/SavedEventPage.css';

function SavedEventsList({ events, handleEdit, handleDelete })  {
  return (
    <ul>
      {events.map((event, index) => (
        
        <li key={index}>
          
          <div className="column">
            <div className="event-details">
              <div>
                <strong>Name:</strong> {event.name},
              </div>
              <div>
                <strong>Date:</strong> {event.date},
              </div>
              <div>
                <strong>Time:</strong> {event.time},
              </div>
              <div>
                <strong>Location:</strong> {event.location},
              </div>
              <div className="participants">
                <strong>Participants:</strong> {event.participants},
              </div>
              <div>
                <strong>Organizer:</strong> {event.organizer},
              </div>
              <div>
                <strong>Refreshments:</strong> {event.refreshments ? 'Yes' : 'No'},
              </div>
              {event.refreshments && (
                <div className="refreshment-details">
                  <strong>Refreshment Type:</strong> {event.refreshmentType},
                  <strong>Dietary Restrictions:</strong> {event.dietaryRestrictions}
                </div>
              )}
            </div>
          </div>
          <div className="column">
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SavedEventsList;

