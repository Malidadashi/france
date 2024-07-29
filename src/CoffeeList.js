import React, { useState, useEffect } from 'react';
import { getCoffeeItems, deleteCoffeeItem } from './api';
import CoffeeItem from './CoffeeList';
import { Link } from 'react-router-dom';
import './CoffeeList.css';

function CoffeeList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedData = await getCoffeeItems();
            setData(fetchedData);
        }
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteCoffeeItem(id);
        setData(data.filter(item => item.id !== id));
    };

    if (!data.length) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="coffee-list">
            {data.map((item) => (
                <div key={item.id} className="coffee-item">
                    <CoffeeItem data={item} />
                    <Link to={`/edit/${item.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
            <Link to="/create" className="create-link">Create New Coffee Item</Link>
        </div>
    );
}

export default CoffeeList;
