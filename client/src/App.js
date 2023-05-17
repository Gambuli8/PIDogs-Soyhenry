import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/landing';
import Create from './Views/Create/Create';
import NavBar from './Components/NavBar/NavBar';
import Detail from './Views/Detail/Detail';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      { pathname === '/' ||  <NavBar />}
      <Routes>  
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crear" element={<Create />} />
        <Route path="/detalle/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
