import React, { useState, useEffect } from 'react';
import '../components/css/EventCreationPage.css';
import SavedEventsList from '../components/SavedEventsList';
import Header from '../components/Header';
import Form from '../components/Form';
import ErrorMsg from '../components/ErrorMsg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WebFont from 'google-fonts';

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
  const navigate = useNavigate();
  

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

      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        setEvents((prevEvents) => [...prevEvents, { ...newEvent, imageUrl }]);
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
      }
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
      <Header />

      <h5 className="header-create">Create an Event:</h5>

      <Form
        eventData={eventData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        editingIndex={editingIndex}
      />

      <div className="button-container">
        {events.length > 0 && (
          <>
          <Link to="saved-events" target="_blank" rel="noopener noreferrer" className='your-saved-events-button'
          >
          Saved Events
          </Link> 
          </>
          
        )}
      </div>

      <ErrorMsg error={error} />
    </div>
  );
};

export default EventCreationForm;
