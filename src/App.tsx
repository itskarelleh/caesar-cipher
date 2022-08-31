import { useState } from 'react';
import './App.css';
import { Navbar, NavbarBrand, Container, Form} from 'react-bootstrap';
import { caesarCipher } from './caesar-cipher/caesar-cipher';

function App() {

  const [ value, setValue ] = useState("");
  const [ shift, setShift ] = useState(25);

  const onChange = (e: any): void => {
    setValue(e.target.value);
  } 

  return (
    <div className="App">
      <div id="wrapper">
        <Navbar>
          <NavbarBrand>
            <h1>Caesar Cipher</h1>          
          </NavbarBrand>
        </Navbar>
        <Container>
          <Form style={{ width: '75%', margin: '0 auto'}}>
            <Form.Control as="textarea" rows={4} type="text" value={value} 
            onChange={e => onChange(e)} />
            <Form.Control type="number" min={1} defaultValue={shift} max={25} />
          </Form>
          <div>
            {caesarCipher(value, shift)}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
