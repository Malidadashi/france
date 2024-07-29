import React, { useState } from 'react';
import { createCoffeeItem } from './api';

function CreateCoffeeItem() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { title, description, image };
        const result = await createCoffeeItem(newItem);
        console.log('Created Item:', result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Create Coffee Item</button>
        </form>
    );
}

export default CreateCoffeeItem;
