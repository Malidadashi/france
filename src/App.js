import React from 'react'
// import { br as Route, Routes } from 'react-router-dom';
import ContentSwitcher from './Components/Explore/ContentSwitcher'
import GetInspired from './Components/Inspire/GetInspired'
import Discover from './Components/Discover/Discover.jsx';
import EmailForm from './Components/Authenticate/EmailForm.jsx';
// import { Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/Errorpage/ErrorPage.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';


const App = () => {

  return (
    <>
      <Navbar />
      <Discover />
      <GetInspired />

    </>


  )
}

export default App
