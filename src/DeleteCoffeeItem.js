import React from 'react';
import { deleteCoffeeItem } from './api';

function DeleteCoffeeItem({ id }) {
    const handleDelete = async () => {
        const result = await deleteCoffeeItem(id);
        console.log('Deleted Item:', result);
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

export default DeleteCoffeeItem;
