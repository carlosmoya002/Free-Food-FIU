import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SavedEventsList from './components/SavedEventsList';
import Root from './routes/root';
import router from './routes';
import { RouterProvider } from "react-router-dom";


const rootElement = document.getElementById('root');

ReactDOM.render(
  
  <RouterProvider router={router} />,
  rootElement
);

reportWebVitals();
