import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Header from './components/Header';
import Navbar from './components/Navbar';
import EventCreationPage from './components/event-creation/EventCreationPage';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;