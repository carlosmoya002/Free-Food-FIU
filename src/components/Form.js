import './css/EventCreationPage.css'
import ErrorMsg from './ErrorMsg';

function Form({eventData, handleInputChange, handleSubmit, editingIndex}){
  return(
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




  );
}
export default Form;