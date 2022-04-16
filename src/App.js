//Utils
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

//Components
import Navbar from './components/Navbar';

//Pages
import Stories from './pages/Stories'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import CardsList from "./components/CardsList";
import FooterNav from "./components/FooterNav";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <CardsList />
      <FooterNav />
      <Routes>
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
