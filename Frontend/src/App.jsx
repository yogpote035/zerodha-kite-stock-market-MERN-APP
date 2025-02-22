import HomePage from "./landing_page/Home/HomePage";
import AboutPAge from "./landing_page/About/AboutPage";
import SupportPage from "./landing_page/Support/SupportPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import Signup from "./landing_page/Signup/Signup";
import ProductPage from "./landing_page/Products/ProductPage";
import NotFound from "./landing_page/NotFound";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPAge />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
