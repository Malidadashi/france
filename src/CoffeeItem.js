import React from 'react';
import './CoffeeItem.css';

function CoffeeItem({ data }) {
    return (
        <div className="card">
            <h2>{data.title}</h2>
            <img src={data.image} alt={data.title} />
            <p>{data.description}</p>
        </div>
    );
}

export default CoffeeItem;
