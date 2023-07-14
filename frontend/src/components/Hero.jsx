import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>About Free Food FIU</h1>
          <p className='text-center mb-4'>
            Free Food FIU aims to address food waste and food insecurities by creating a platform that connects students
            with campus events that offer free food. Our platform will provide information about upcoming events,
            allowing students to reduce food waste and find ways to address food insecurity. Join Free Food FIU today to
            post your events!
          </p>
          <div className='d-flex'>
            {userInfo ? (
              <LinkContainer to='/events'>
                <Button variant='primary'>Go to Events</Button>
              </LinkContainer>
            ) : (
              <>
                <LinkContainer to='/login'>
                  <Button variant='primary' className='me-3'>
                    Log in
                  </Button>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Button variant='secondary'>Register</Button>
                </LinkContainer>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
