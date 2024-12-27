import BestSelling from "./components/BestSelling";
import CategoryNav from "./components/CategoryNav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <CategoryNav />
      <BestSelling />
      <ProductGrid />
    </>
  );
}

export default App;
