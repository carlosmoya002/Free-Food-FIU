import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import '../css/EventBox.css';

const EventBox = ({ event }) => {
  const { name, date, time, location, organizer, description, preferences, allergies, imageUrl } = event;

  return (
    <div className="event-box">
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Date:</strong> {date}<br />
            <strong>Time:</strong> {time}<br />
            <strong>Location:</strong> {location}<br />
            <strong>Organizer:</strong> {organizer}<br />
            <strong>Description:</strong> {description}<br />
            <strong>Type of food:</strong> {preferences.join(', ')}<br />
            <strong>Allergies:</strong> {allergies.join(', ')}
          </Card.Text>
          <div className="button-container">
            <Link to="/review">
              <Button variant="primary">Review</Button>
            </Link>
            <Button variant="success" className="mr-2">
              <FaThumbsUp /> 
            </Button>
            <Button variant="danger" className="mr-2">
              <FaThumbsDown /> 
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventBox;
