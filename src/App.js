import React, { useState, useEffect } from 'react';
import '../src/assets/css/EventCreationPage.css';
import SavedEventsPage from './assets/components/SavedEventsPage';


const storedEvents = localStorage.getItem('events');
const EventCreationForm = () => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    participants: 0,
    organizer: '',
    refreshments: false,
    refreshmentType: '',
    dietaryRestrictions: '',
  });

  const [events, setEvents] = useState([]);

  const [editingIndex, setEditingIndex] = useState(-1);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
    setEvents(storedEvents);
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setEventData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      date,
      time,
      location,
      participants,
      organizer,
      refreshments,
      refreshmentType,
      dietaryRestrictions,
    } = eventData;

    if (
      !name ||
      !date ||
      !time ||
      !location ||
      participants === 0 ||
      !organizer ||
      (refreshments && (!refreshmentType || !dietaryRestrictions))
    ) {
      setError('ERROR: Please fill all the fields');
      return;
    }

    if (editingIndex === -1) {
      const newEvent = { ...eventData };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    } else {
      setEvents((prevEvents) =>
        prevEvents.map((event, index) =>
          index === editingIndex ? { ...eventData } : event
        )
      );
      setEditingIndex(-1);
    }

    setEventData({
      name: '',
      date: '',
      time: '',
      location: '',
      participants: 0,
      organizer: '',
      refreshments: false,
      refreshmentType: '',
      dietaryRestrictions: '',
    });
    setError('');
  };

  const handleEdit = (index) => {
    const eventToEdit = events[index];
    setEventData(eventToEdit);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setEvents((prevEvents) => prevEvents.filter((event, i) => i !== index));
    setEditingIndex(-1);
  };

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <div>
      <header className="header-top">
        <img src="/img/freeFood.jpg" alt="Logo" className="logo" />
        <h1 className="header2">Free Food FIU</h1>
      </header>
      <h5 className="header">Create an event:</h5>
      <form onSubmit={handleSubmit} className="event-creation-form">
        <label>
          Name of Event:
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Participants:
          <input
            type="number"
            name="participants"
            value={eventData.participants}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Organizer:
          <input
            type="text"
            name="organizer"
            value={eventData.organizer}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Refreshments:
          <input
            type="checkbox"
            name="refreshments"
            checked={eventData.refreshments}
            onChange={handleInputChange}
          />
        </label>
        {eventData.refreshments && (
          <>
            <br />
            <label>
              Refreshment Type:
              <input
                type="text"
                name="refreshmentType"
                value={eventData.refreshmentType}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Dietary Restrictions:
              <input
                type="text"
                name="dietaryRestrictions"
                value={eventData.dietaryRestrictions}
                onChange={handleInputChange}
              />
            </label>
          </>
        )}
        <br />
        <button type="submit">
          {editingIndex === -1 ? 'Create Event' : 'Update Event'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <h2 className="centered-header"></h2>
      <SavedEventsPage
        events={events}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      
    </div>
  );
};

export default EventCreationForm;







