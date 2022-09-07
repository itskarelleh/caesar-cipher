import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { FormDataProvider } from './context';
import Layout from './components/Layout';
import Copyright from './components/Copyright';

function App() {

  return (
      <div className="App bg-dark overflow-hidden">
        <Navbar>
            <NavbarBrand className="text-white">
              <h1>Caesar Cipher</h1>          
            </NavbarBrand>
          </Navbar>
        <div className="bg-white w-75 p-2" id="wrapper">
          <FormDataProvider>
            <Layout />
          </FormDataProvider>
        </div>
        <Copyright />
      </div>

  );
}

export default App;
