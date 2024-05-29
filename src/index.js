import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import {UserProvider} from "./context/UserContext";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <UserProvider>
    <BrowserRouter>
        <App/>
  </BrowserRouter>
    </UserProvider>
</React.StrictMode>
);



