
import { Container } from 'react-bootstrap';
import './App.css';
import Contact from './components/contact/Contact';
import Expertise from './components/expertise/Expertise';
import Experience from './components/exprience/Experience';
import Head from './components/header/Head';
import Myworks from './components/mywork/Myworks';

function App() {
  return (
    <>

    <Head/>
    <Expertise/>
    <Myworks/>
    <Experience/>
    <Contact/>

    </>
  );
}

export default App;
