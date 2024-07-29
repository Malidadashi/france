import axios from 'axios';

const API_URL = 'https://api.sampleapis.com/coffee/hot';

// GET all coffee items
export const getCoffeeItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
};

// GET a specific coffee item by ID
export const getCoffeeItemById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item: ", error);
        return null;
    }
};

// POST a new coffee item
export const createCoffeeItem = async (newItem) => {
    try {
        const response = await axios.post(API_URL, newItem);
        return response.data;
    } catch (error) {
        console.error("Error creating item: ", error);
        return null;
    }
};

// PUT (update) an existing coffee item
export const updateCoffeeItem = async (id, updatedItem) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedItem);
        return response.data;
    } catch (error) {
        console.error("Error updating item: ", error);
        return null;
    }
};

// DELETE a coffee item
export const deleteCoffeeItem = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting item: ", error);
        return null;
    }
};
