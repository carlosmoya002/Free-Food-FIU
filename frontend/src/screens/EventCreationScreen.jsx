import React, { useState } from 'react';
import AllergiesSelectComponent from '../components/event-creation/diet-option-selectors/allergies/AllergySelectComponent';
import PreferenceSelectComponent from '../components/event-creation/diet-option-selectors/preferences/PreferenceSelectComponent';
import ErrorMsg from '../components/ErrorMsg';
import { useCreateEventMutation } from '../slices/eventApiSlice';
import { useSelector } from 'react-redux';
import '../css/EventCreationScreen.css';

const EventCreationScreen = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [description, setDescription] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [error, setError] = useState('');

  const { userInfo } = useSelector((state) => state.auth);

  const handlePreferencesSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setPreferences(selectedValues);
  };

  const handleAllergiesSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setAllergies(selectedValues);
  };

  const [createEvent, { isLoading }] = useCreateEventMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      creatorId: userInfo._id,
      name,
      date,
      time,
      location,
      organizer,
      description,
      preferences,
      allergies,
    };

    if (
      !event.name ||
      !event.date ||
      !event.time ||
      !event.location ||
      !event.organizer ||
      !event.description ||
      !event.preferences
    ) {
      setError('ERROR: Please fill all the fields');
      return;
    }

    try {
      await createEvent(event);
      setName('');
      setDate('');
      setTime('');
      setLocation('');
      setOrganizer('');
      setDescription('');
      setPreferences([]);
      setAllergies([]);
      setError(null);
      console.log('New event created!');
    } catch (error) {
      setError('An error occurred while creating the event.');
      console.log(error);
    }
  };

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
          Description:
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Type of food:
          <PreferenceSelectComponent
            value={preferences}
            onChange={handlePreferencesSelectChange}
          />
        </label>
        <br />
        <label>
          Allergies:
          <AllergiesSelectComponent
            value={allergies}
            onChange={handleAllergiesSelectChange}
          />
        </label>
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating Event...' : 'Create Event'}
        </button>
      </form>

      <ErrorMsg error={error} />
    </div>
  );
};

export default EventCreationScreen;