import BestSelling from "./components/BestSelling";
import CategoryNav from "./components/CategoryNav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import NewArrival from "./components/NewArrival";
import ProductGrid from "./components/ProductGrid";
import ServiceFeatures from "./components/ServiceFeatures";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <CategoryNav />
      <BestSelling />
      <ProductGrid />
      <NewArrival />
      <ServiceFeatures />
      <Footer />
    </>
  );
}

export default App;
