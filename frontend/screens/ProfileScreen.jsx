import { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useUpdateUserMutation } from '../slices/usersApiSlice';

const ProfileScreen = () => {
  const [name, setName] = useState('');

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
  }, [userInfo.name]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
      }).unwrap();
      console.log(res);
      toast.success('Profile updated successfully');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <div className="d-flex align-items-center">
          <div className="mr-3">
            <img
              src={userInfo.profilePicture} // Replace with the profile picture URL from user data
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
      </Card.Body>
    </Card>
  );
};

export default ProfileScreen;
