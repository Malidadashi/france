import React from 'react';
import './Gallery.css';

function Gallery({ data }) {
    return (
        <div className="card">
            <h2>Gallery</h2>
            <p>{data}</p>
        </div>
    );
}

export default Gallery;
