import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import CategoryNav from "./components/CategoryNav";
import BestSelling from "./components/BestSelling";
import ProductGrid from "./components/ProductGrid";
import NewArrival from "./components/NewArrival";
import ServiceFeatures from "./components/ServiceFeatures";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Main />
              <CategoryNav />
              <BestSelling />
              <ProductGrid />
              <NewArrival />
              <ServiceFeatures />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
