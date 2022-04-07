import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import BuyNFT from "./Pages/BuyNFT";
import Faq from "./Pages/Faq";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="buy-nft" element={<BuyNFT />} />
      <Route path="faq" element={<Faq />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
