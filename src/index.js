//all routes for the site
import ReactDOM from 'react-dom/client';
import App from './App/App';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { AuthProvider } from './Context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App />
    </AuthProvider>
);