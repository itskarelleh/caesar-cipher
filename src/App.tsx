import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useContext } from 'react';
import { Navbar, NavbarBrand, Container } from 'react-bootstrap';
import { FormDataContext, FormDataProvider } from './context';
import Layout from './components/Layout';

function App() {

  return (
      <div className="App bg-dark">
        <Navbar>
            <NavbarBrand className="text-white">
              <h1>Caesar Cipher</h1>          
            </NavbarBrand>
          </Navbar>
        <Container className="bg-white" id="wrapper">
        <FormDataProvider>
          <Layout />
        </FormDataProvider>
        </Container>
      </div>

  );
}

export default App;
