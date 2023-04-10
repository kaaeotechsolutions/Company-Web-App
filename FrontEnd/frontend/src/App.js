import Home from './Components/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={< Service/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
