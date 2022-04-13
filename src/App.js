//Utils
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

//Components
import Navbar from './components/Navbar';

//Pages
import Stories from './pages/Stories'
import Pricing from './pages/Pricing'
import Features from './pages/Features'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
