import { Link } from "react-router-dom"
import './css/Navbar.css';
import freeFoodLogo from '../assets/freeFood.jpg';

const Navbar = () => {

    return(
        // <header>
        //     <div className="container">
        //       <head>
        //             <meta charset="UTF-8" />
        //             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        //             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //             <div class="html"><link rel="stylesheet" href="navbar.css"/></div>
        //             <title>Homepage</title>
        //         </head>

        //         <body>
        //             <ul class="menu">
        //                 <li><Link to="/create">Create</Link></li>
        //                 <li><Link to="/search">Search</Link></li>
        //                 <li><Link to="/about">About</Link></li>
        //                 <li><Link to="/register">Register</Link></li>
        //                 <li><Link to="/test">Test</Link></li>
        //             </ul>
        //         </body>     
        //     </div>
        // </header>

        <div>
            <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="html">
    <link rel="stylesheet" href="navbar.css" />
  </div>
  <title>Homepage</title>
  <nav className="navbar">
    {/* LOGO */}
    <div className="search">
      <input type="text" className="searchTerm" placeholder="Search Events" />
      <button type="submit" className="searchButton" placeholder="GO">
        <i className="fa fa-search" />
      </button>
    </div>
    {/* NAVIGATION MENU */}
    <ul className="nav-links">
      {/* NAVIGATION MENUS */}
      <ul className="menu">
        <li>
          <a href="login_form.html">Login</a>
        </li>
        <li>
          <a href="Registration_form.html">Sign Up</a>
        </li>
        <li>
          <a href="About_us.html">About Us</a>
        </li>
      </ul>
    </ul>
  </nav>
  <header className="EB">Events Billboard</header>
  <div className="event-listed"></div>
        </div>
    )
}

export default Navbar