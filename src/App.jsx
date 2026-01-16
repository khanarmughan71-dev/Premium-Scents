import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import FloatingCart from "./components/FloatingCart";
import CartDrawer from "./components/CartDrawer";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* FULL PAGE LOADER */}
      {loading && <Loader />}

      {/* WEBSITE CONTENT (BLUR WHEN MENU OPEN) */}

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div
        className={`
          transition-all duration-300
          ${loading ? "opacity-0" : "opacity-100"}
          ${menuOpen ? "blur-md scale-[0.98]" : "blur-0 scale-100"}
        `}
      >
        <ScrollToTop />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </div>

      {/* FLOATING CART + DRAWER (OUTSIDE BLUR) */}
      <FloatingCart onClick={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default App;
