import React, { useEffect, useState } from 'react';
import EventBox from '../components/EventBox';

const EventScreen = () => {
  const [events, setEvents] = useState(null);
  const [field, setField] = useState('');
  const [value, setValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [noResultsMessage, setNoResultsMessage] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events/');
      const json = await response.json();

      if (response.ok) {
        setEvents(json);
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = async () => {
    if (!field && !value) {
      setValidationMessage('Please select a filter and enter a search value.');
    } else if (!field) {
      setValidationMessage('Please select a filter.');
    } else if (!value) {
      setValidationMessage('Please enter a search value.');
    } else {
      try {
        const endpoint = `/api/events/${field}/${value}`;
        const response = await fetch(endpoint);
        const json = await response.json();

        if (response.ok) {
          setEvents(json);
          setValidationMessage('');
          setNoResultsMessage(json.length === 0 ? 'No results found.' : '');
        }
      } catch (error) {
        console.error('An error occurred while searching events:', error);
      }
    }
  };

  const handleResetSearch = async () => {
    setField('');
    setValue('');
    setValidationMessage('');
    setNoResultsMessage('');

    try {
      const response = await fetch('/api/events/');
      const json = await response.json();

      if (response.ok) {
        setEvents(json);
      }
    } catch (error) {
      console.error('An error occurred while resetting search:', error);
    }
  };

  return (
    <div className="event-search">
      <div className="search-bar">
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="search-dropdown"
        >
          <option value="">Search By</option>
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="organizer">Organizer</option>
          {/* Add more options for other fields */}
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <button className="reset-button" onClick={handleResetSearch}>
          Reset
        </button>
        {validationMessage && <p className="validation-message">{validationMessage}</p>}
        {noResultsMessage && <p className="no-results-message">{noResultsMessage}</p>}
      </div>
      <br />
      <div className="events">
        {events &&
          events.map((event) => <EventBox key={event._id} event={event} />)}
      </div>
    </div>
  );
};

export default EventScreen;
