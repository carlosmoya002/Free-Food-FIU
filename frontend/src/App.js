import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Header from './components/Header';
import Navbar from './components/Navbar';
import EventCreationPage from './components/event-creation/EventCreationPage';
import EventSearchPage from './components/event-search/EventSearchPage';
import AboutPage from './components/about-page/AboutPage';
import UserRegistration from './components/registration/UserRegistration';
import Test from './components/test/Test';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/create"
              element={<EventCreationPage />}
            />
            <Route 
              path="/about"
              element={<AboutPage />}
            /> 
            <Route
              path="/search"
              element={<EventSearchPage />}
            />
            <Route
              path="/register"
              element={<UserRegistration />}
            />
            <Route
              path="/test"
              element={<Test />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;