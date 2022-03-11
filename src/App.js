import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Details from './Home/Details/Details';
import SideDetails from './Home/Details/SideDetails/SideDetails';
import { Routes, Route, Link } from "react-router-dom";
import About from './Navbar/About/About';

function App() {
  return (
    <div className="app">
      <div>
       <Home></Home>
       
       <div className='app-body' >
                  <Details></Details>
                  <SideDetails></SideDetails>
              </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
