import React from 'react';
import './Food.css';

function Food({ data }) {
    return (
        <div className="card">
            <h2>Food</h2>
            <p>{data}</p>
        </div>
    );
}

export default Food;
