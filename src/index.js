import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import "./navbar.css"; // simple stylesheet
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" // importing Bootstrap (framework)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // BrowserRouter routes our pages without a need of refreshing each time
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

