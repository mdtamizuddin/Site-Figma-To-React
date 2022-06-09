
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar'
import Price from './Component/Price/Price';
import ProjectDetails from './Component/Projects/ProjectDetails';
import Projects from './Component/Projects/Projects';
import Service from './Component/Services/Service';
import Teams from './Component/Teams/Teams';
function App() {
  return (
    <div className="app">
    <Navbar />
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/teams' element={<Teams />}/>
      <Route path='/service' element={<Service />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/projects' element={<Projects />} />
      <Route path='/project/details' element={<ProjectDetails />}/>
      <Route path='/price' element={<Price />}/>

    </Routes>
    <Footer />
    </div>
  );
}

export default App;
