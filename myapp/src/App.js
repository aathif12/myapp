import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/Home' element={<Home/>}></Route>
      </Router>
    
    </div>
  );
}

export default App;
