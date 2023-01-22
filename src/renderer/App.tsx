import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Patricija from './Views/Patricija/Patricija';
import Filip from './Views/Filip';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patricija" element={<Patricija />} />
        <Route path="/filip" element={<Filip />} />
      </Routes>
    </Router>
  );
}
