import React, { useState, useEffect } from 'react';
import '../src/components/css/EventCreationPage.css';
import SavedEventsPage from './components/SavedEventsList';
import Header from './components/Header';
import Form from './components/Form';
import ErrorMsg from './components/ErrorMsg';




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
      invitation,
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
      !invitation ||
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
      invitation: '',
      refreshments: false,
      refreshmentType: '',
      dietaryRestrictions: '',
    });
    setError('');

    handleSubmit(eventData);
  };

  const handleEdit = (index,eventData) => {
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
      <Header />
      
      <h5 className="header">Create an event:</h5>
      
      <Form 
        eventData={eventData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        editingIndex={editingIndex}
      />

      <ErrorMsg error={error}/>

      <SavedEventsPage
        events={events}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        eventData={eventData}
      />

      
    </div>
  );
};

export default EventCreationForm;







