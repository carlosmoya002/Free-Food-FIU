import React, { useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import SavedEventsPage from '../components/SavedEventsList';
import ErrorMsg from '../components/ErrorMsg';

function SavedEvents() {
  const [events, setEvents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [error, setError] = useState('');
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    participants: 0,
    invitation: null, // Initialize invitation as null
    refreshments: false,
    refreshmentType: '',
    dietaryRestrictions: '',
  });

  useEffect(() => {
    setEvents(JSON.parse(localStorage.getItem('events')) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleInputChange = (event) => {

    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    if (name === 'invitation') {
      // Handle file upload for invitation
      const file = URL.createObjectURL(event.target.files[0]);
      setEventData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      setEventData((prevData) => ({
        ...prevData,
        [name]: inputValue,
      }));
    }
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
      invitation: null,
      refreshments: false,
      refreshmentType: '',
      dietaryRestrictions: '',
    });
    setError('');
  };

  const handleEdit = (index) => {
    const eventToEdit = events[index];
    setEventData({...eventData});
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setEvents((prevEvents) => prevEvents.filter((event, i) => i !== index));
    setEditingIndex(-1);
  };

  return (
    <div>
      <SavedEventsPage
        events={events}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        eventData={eventData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      {error && <ErrorMsg error={error} />}
    </div>
  );
}

export default SavedEvents;
