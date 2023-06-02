
import './App.css';
import Navbar from './Components/navbar';
import Corousel from './Components/corousel';
import Cards from './Components/cards'
import Preview from './Components/preview';
import Contact from './Components/contact';
import Nav from 'react-bootstrap/Nav';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Corousel />
      <Cards />
      <Preview />
      <Contact />

      <Nav className="justify-content-center my-5 py-5" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="www.youtube.com"><FaYoutube color='red' /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="www.instagram.com"><FaInstagram color='purple' /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="www.facebook.com"><FaFacebook color='blue' /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="www.google.com"><FaGoogle color='#008000' /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="www.twitter.com"><FaTwitter /></Nav.Link>
        </Nav.Item>
      </Nav>
      <p className='load text-muted text-center small' >@copy right claim.</p>
    </div>
  );
}

export default App;
