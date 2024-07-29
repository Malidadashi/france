import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="container">
            <h1>Hot Coffee Menu</h1>
            <Outlet />
        </div>
    );
}

export default App;
