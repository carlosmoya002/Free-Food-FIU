import '../css/About.css';

const About = () => {
  return (
    <div>
         <div className="html">
    <link rel="stylesheet" href="about_us.css" />
  </div>
  <form>
    <br />
    {/* Container  for items in the form*/}
    <div className="event-listed">
      <header className="Head"> About Us</header>
      <p>
        Free Food FIU aims to address food waste and food insecurities by
        creating providing a platform that connects students with campus events
        that offer free food. Our platform will provide information about
        upcoming events, allowing students to reduce food waste and find ways to
        address food insecurity. Join Free Food FIU today to post your events!
      </p>
    </div>
  </form>
    </div>
  );
};

export default About;