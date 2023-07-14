import React from 'react';
import { FaUpload } from 'react-icons/fa';

const Form = ({ eventData, handleInputChange, handleSubmit, editingIndex }) => {
 
  return (
    <form onSubmit={handleSubmit} className="event-creation-form">
    
        <input
          type="text"
          name="name"
          value={eventData.name}
          onChange={handleInputChange}
          placeholder='Event Name'
        />
    
      <br />
      <div className="datetime-container">
        <div className="date-container">
          
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleInputChange}
            />
        </div>
        <div className="time-container">
            <input
              type="time"
              name="time"
              value={eventData.time}
              onChange={handleInputChange}
            />
          
        </div>
      </div>
      <br />
      
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleInputChange}
          placeholder='Location'
        />
      
      <br />
        <input
          type="number"
          name="participants"
          value={eventData.participants}
          onChange={handleInputChange}
        />
      <br />
      <div className="file-input-container">
        <input
          id="fileInput"
          type="file"
          name="invitation"
          accept="image/*"
          onChange={handleInputChange}
        />
        <label htmlFor="fileInput">
          <FaUpload /> Upload Invitation
        </label>
      </div>
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
            <input
              type="text"
              name="refreshmentType"
              value={eventData.refreshmentType}
              onChange={handleInputChange}
              placeholder='Refreshment Type'
            />
          <br />
            <input
              type="text"
              name="dietaryRestrictions"
              value={eventData.dietaryRestrictions}
              onChange={handleInputChange}
              placeholder='Dietary Restrictions'
            />
        </>
      )}
      <br />

      <button type="submit">
        {editingIndex === -1 ? 'Create Event' : 'Update Event'}
      </button>
    </form>
  );
};

export default Form;
