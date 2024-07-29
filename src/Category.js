import React from 'react';
import './Category.css';

function Category({ data }) {
    return (
        <div className="card">
            <h2>Category</h2>
            <p>{data}</p>
        </div>
    );
}

export default Category;
