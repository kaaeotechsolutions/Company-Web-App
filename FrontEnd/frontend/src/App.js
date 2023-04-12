import Home from './Components/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service'
import ServiceDetail from './Constant/ServiceDetail';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={< Service />} />
        <Route path='/:service' element={< ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
