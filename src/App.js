import logo from './logo.svg';

import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Legacy from './Legacy';
import Card from './Component/Card'
import Marq from './Component/Marq';
import Benifit from './Component/Benifit';
import Placement from './Component/Placement';
import StudentR from './Component/StudentR';
import Blog from './Component/Blog';
import ContactForm from './Component/ContactForm';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
   <Legacy></Legacy>
   <Card></Card>
   <Marq/>
   <Benifit/>
  <Placement/>
  <StudentR></StudentR>
  <Blog></Blog>
  <ContactForm></ContactForm>
  <Footer></Footer>
    </>
  );
}

export default App;
