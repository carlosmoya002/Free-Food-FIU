import { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import EventBox from '../components/EventBox';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [userEvents, setUserEvents] = useState([]); 

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfo.name);
    getUserEvents(); 
  }, [userInfo.name]);

  const getUserEvents = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get('/api/events/user', config);

      setUserEvents(data); 
    } catch (error) {
      console.log('Error fetching user events:', error);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <div className="d-flex align-items-center">
          <div className="mr-3">
            <img
              src={'../logo/logo.png'} 
              alt="Profile"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <Card.Text>Name: {name}</Card.Text>
            <LinkContainer to='/updateProfile'>
              <Button variant='primary' className='me-3'>Update Profile</Button>
            </LinkContainer>
            <LinkContainer to='/eventCreation'>
              <Button variant='secondary'>Create Event</Button>
            </LinkContainer>
          </div>
        </div>
        {/* Display user events */}
        <div>
          <br/>
          <h2>Your Events</h2>
          {userEvents.length === 0 ? (
            <p>No events found.</p>
          ) : (
            userEvents.map((event) => (
              <EventBox key={event._id} event={event} />
            ))
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileScreen;
