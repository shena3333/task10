import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/portfolio/stylePortfolio.css';
import './pages/photo/stylePhoto.css';
import './pages/contacts/styleContacts.css';
import './pages/plus/stylePlus.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import pagePortfolio from './pages/portfolio/pagePortfolio.js'
import pagePhoto from './pages/photo/pagePhoto.js'
import pageContacts from './pages/contacts/pageContacts.js';
import pagePlus from './pages/plus/pagePlus.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <pagePortfolio/>
    <pagePhoto/>
    <pageContacts/>
    <pagePlus/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
