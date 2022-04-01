
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '../src/Components/Pages/Home'; 
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import User from './Components/Users/User';
import Navbar from './Components/Layouts/Navbar';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
function App() {
  return (
    <Router>
              <div className="App">
<Navbar />
  
      <Routes>
        <Route exact path="/home" element={<Home />} >Home</Route>
        <Route exact path="/about" element={<About />} >About</Route>
        <Route exact path="/contact" element={<Contact />} >Contact</Route>
        <Route exact path="/Users/:id" element={<User />} >User</Route>
        <Route exact path="/Users/add" element={<AddUser />} >AddUser</Route>
        <Route exact path="/Users/edit/:id" element={<EditUser />} >EditUser</Route>
        
        </Routes>
        </div>
        </Router>
              
  
  );
}

export default App;
