import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Products from '../src/pages/Products';
import About from '../src/pages/About';



function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
