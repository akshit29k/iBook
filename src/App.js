import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteContext from './context/NoteContext';
import Login from './components/Login';
import Signup from './components/Signup';
import AlertContext from './context/AlertContext';

function App() {
  return (
    <>
    <AlertContext>
    <NoteContext>
    <Router>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/login-signup" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </Router>
    </NoteContext>
    </AlertContext>
    </>
  );
}

export default App;
