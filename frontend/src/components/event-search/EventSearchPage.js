import { useEffect, useState } from 'react'

//components
import EventSearchDetails from './EventSearchDetails'

const EventSearchPage = function() {

    const[events,setEvents] = useState(null)
    const [field, setField] = useState('')
    const [value, setValue] = useState('')
    const [validationMessage, setValidationMessage] = useState('');
    const [noResultsMssage, setNoResultsMessage] = useState('');

    useEffect(function(){
        const fetchEvents = async function() {
            const response = await fetch('/api/events/')
            const json = await response.json()

            if (response.ok) {
                setEvents(json)
            }
        }

        fetchEvents()
    }, []) 

    const handleSearch = async () => {
        
        if (!field) {
            setValidationMessage('Please select a filter.');
            return;
        }
      
        try {
            let endpoint = `/api/events/${field}`;
          
            endpoint += `/${value}`;
        
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
                <option value="location">Location</option>
                <option value="organizer">Organizer</option>
                {/* Add more options for other fields */}
            </select>
            <input
                type="text"
                placeholder="Enter search value"
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
            {noResultsMssage && <p className="no-results-message">{noResultsMssage}</p>}
          </div>
          <div className="events">
            {events &&
                events.map((event) => (
                    <EventSearchDetails key={event._id} event={event} />
                ))}
          </div>
        </div>
      );
    };

export default EventSearchPage;