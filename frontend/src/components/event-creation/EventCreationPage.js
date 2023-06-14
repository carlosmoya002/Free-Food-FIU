import React, { useState } from 'react';
import SelectAllergiesComponent from './diet-option-selectors/allergies/AllergySelectComponent';
import SelectPreferenceComponent from './diet-option-selectors/preferences/PreferenceSelectComponent';
import ErrorMsg from './ErrorMsg';
import '../css/EventCreationPage.css';

const EventCreationPage = () => {

  const[name, setName] = useState('');
  const[date, setDate] = useState('');
  const[time, setTime] = useState('');
  const[location, setLocation] = useState('');
  const[organizer, setOrganizer] = useState('');
  const[refreshments, setRefreshments] = useState('');
  const[preferences, setPreferences] = useState([]);
  const[allergies, setAllergies] = useState([]);
  const [error, setError] = useState('');

  const handlePreferencesSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setPreferences(selectedValues);
  };

  const handleAllergiesSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setAllergies(selectedValues);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const event = {name, date, time, location, organizer, refreshments, preferences, allergies};
    
    if (
      !event.name ||
      !event.date ||
      !event.time ||
      !event.location ||
      !event.organizer ||
      !event.refreshments ||
      !event.preferences
    ) {
      setError('ERROR: Please fill all the fields');
      return;
    }

    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.message);
    }

    if (response.ok) {
      setName('');
      setDate('');
      setTime('');
      setLocation('');
      setOrganizer('');
      setRefreshments('');
      setPreferences([]);
      setAllergies([]);
      setError(null);
      console.log("New event created!");
    }
  }

  return (
    <div>
      <h5 className="header">Create an event:</h5>
      <form onSubmit={handleSubmit} className="event-creation-form">
        <label>
          Name of Event:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            name="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            name="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Organizer:
          <input
            name="organizer"
            type="text"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </label>
        <br />
        <label>
          Refreshments:
          <input
            name="refreshments"
            type="text"
            value={refreshments}
            onChange={(e) => setRefreshments(e.target.value)}
          />
        </label>
        <br />
          <label>
            Preferences:
            <SelectPreferenceComponent
              value={preferences}
              onChange={handleAllergiesSelectChange}
            ></SelectPreferenceComponent>
          </label>
        <br />
          <label>
            Allergies:
            <SelectAllergiesComponent
              value={allergies}
              onChange={handlePreferencesSelectChange}
            ></SelectAllergiesComponent>
          </label>
        <br />
        <button type="submit">
          Create Event
        </button>
      </form>
      
      <ErrorMsg error={error}/>
      
    </div>
  );
};

export default EventCreationPage;