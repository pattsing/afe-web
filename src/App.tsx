import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import BuyNFT from "./Pages/BuyNFT/BuyNFT";
import Landing from "./Pages/Landing/Landing";
import Artworks from "./Pages/Artworks/Artworks";
import Faq from "./Pages/Faq/Faq";
import NewLanding from "./Pages/NewLanding/NewLanding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewLanding />} />
      <Route path="artworks" element={<Artworks />} />
      <Route path="buy-nft" element={<BuyNFT />} />
      <Route path="faq" element={<Faq />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
