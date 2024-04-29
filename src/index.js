import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Brand from './conponents/Brand';
import Header from './conponents/Header';
import { Container } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='my-3 add-new'>
    <Header/>
    <Container >
    
      
    <Brand/> 
    </Container>
  
    </div>
  </React.StrictMode>
);


