import EventBox from "../components/EventBox";
import Hero from "../components/Hero";

const EventScreen = () => {
    const events = [
      {
        id: 1,
        name: 'Event 1',
        imageUrl: '../logo/logo.png',
      },
      {
        id: 2,
        name: 'Event 2',
        imageUrl: '../logo/logo.png',
      },
      {
        id: 3,
        name: 'Event 3',
        imageUrl: '../logo/logo.png',
      },
    ];
  
    return (
      <div>
        <h1>Events Billboard</h1>
        {events.map((event) => (
          <EventBox key={event.id} event={event} />
        ))}
      </div>
    );
  };
  
  export default EventScreen;