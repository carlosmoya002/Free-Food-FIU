import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const EventBox = ({ event }) => {
  const { name, imageUrl } = event;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
