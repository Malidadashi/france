import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from './App';
import CoffeeList from './CoffeeList';
import CreateCoffeeItem from './CreateCoffeeItem';
import EditCoffeeItem from './EditCoffeeItem';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <CoffeeList /> },
            { path: 'create', element: <CreateCoffeeItem /> },
            { path: 'edit/:id', element: <EditCoffeeItem /> },
        ],
    },
]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById('root')
);
