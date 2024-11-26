import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">

      <Router>

        <nav>
          <ul>
            {/* <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/aboutus'>Abous</Link>
            </li> */}
          </ul>
        </nav>
      
      <Routes>
        {/* <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route> */}
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
