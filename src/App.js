
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Create from './components/create'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
