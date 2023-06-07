import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SavedEventsPage from './assets/components/SavedEventsPage';
import Root from './routes/root';


const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/events" element={<SavedEventsPage />} />
      {/* Add more routes as needed */}
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
