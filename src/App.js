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

function App() {
  return (
    <>
    <NoteContext>
    <Router>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
    </Routes>
    </Router>
    </NoteContext>
    </>
  );
}

export default App;
