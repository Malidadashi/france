// EmailForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send-email', { email });
            setMessage('Email sent successfully');
        } catch (error) {
            setMessage('Error sending email');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <button type="submit">Send Authentication Email</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EmailForm;
