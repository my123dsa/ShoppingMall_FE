import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Test from './pages/Test';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">어바웃</Link>
        <Link to = "/test">테스트</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
