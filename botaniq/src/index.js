import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Details from './components/Detail_page/DetailPage';
import reportWebVitals from './reportWebVitals';
import Location from './components/Location/Location';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details" element={<Details />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
