import React, { useState, useEffect } from 'react';
import { getCoffeeItemById, updateCoffeeItem } from './api';

function EditCoffeeItem({ id }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchItem() {
            const item = await getCoffeeItemById(id);
            if (item) {
                setTitle(item.title);
                setDescription(item.description);
                setImage(item.image);
                setLoading(false);
            }
        }
        fetchItem();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedItem = { title, description, image };
        const result = await updateCoffeeItem(id, updatedItem);
        console.log('Updated Item:', result);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleUpdate}>
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
            <button type="submit">Update Coffee Item</button>
        </form>
    );
}

export default EditCoffeeItem;
