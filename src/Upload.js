import React from 'react';
import './Upload.css';

function Upload({ data }) {
    return (
        <div className="card">
            <h2>Upload</h2>
            <p>{data}</p>
        </div>
    );
}

export default Upload;
