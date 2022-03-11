import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Details from './Home/Details/Details';

function App() {
  return (
    <div className="app">
      <div>
       <Home></Home>
       
       <div className='app-body' >
                  <Details></Details>
              </div>
      </div>
    </div>
  );
}

export default App;
