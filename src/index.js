import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import App from './App';
// import { BrowserRouter } from "react-router-dom"
import ErrorPage from './Components/Errorpage/ErrorPage.jsx';
import Navbar from './Components/Navbar/Navbar';
import ContentSwitcher from './Components/Explore/ContentSwitcher.jsx';
import GetInspired from './Components/Inspire/GetInspired.jsx';
import EmailForm from './Components/Authenticate/EmailForm.jsx';
import Discover from './Components/Discover/Discover.jsx';
import reportWebVitals from './Components/Bughunter/reportWebVitals.jsx';
import Newlight from './Components/Newlight/Newlight.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/*' element={<ErrorPage />} />
      <Route path='/newidea' element={<Newlight/>}/>
      <Route path='/getinspire' element={<GetInspired/>}/>

    </Routes>
  </BrowserRouter>

);

reportWebVitals(console.log);
