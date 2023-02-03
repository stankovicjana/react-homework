import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinacije from './pages/Destinacije';


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='destinacije' element={<Destinacije/>} />   
    </Routes>
   
  </Router>
  );
}

export default App;
