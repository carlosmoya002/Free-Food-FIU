import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Header from './components/Header';
import Navbar from './components/Navbar';
import EventCreationPage from './components/event-creation/EventCreationPage';
import EventSearchPage from './components/event-search/EventSearchPage';
import About from './components/about-us/About';
import LoginPage from './components/login/LoginPage';
import RegistrationTestPage from './components/test/RegistrationTestPage';
import RegistrationPage from './components/registration/RegistrationPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<EventCreationPage />}
            />
            <Route
              path="/search"
              element={<EventSearchPage />}
            /> 
            <Route
              path="/about"
              element={<About />}
            /> 
            <Route
              path="/login"
              element={<LoginPage />}
            /> 
            <Route
              path="/register"
              element={<RegistrationPage />}
            /> 
            <Route
              path="/test"
              element={<RegistrationTestPage />}
            /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;