import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ProductModalProvider } from './context/ProductModalContext';
import { ReviewProvider } from './context/ReviewContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Locations } from './pages/Locations';
import { Merchandise } from './pages/Merchandise';

export default function App() {
  return (
    <Router>
      <ReviewProvider>
        <FavoritesProvider>
          <ProductModalProvider>
            <CartProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/merch" element={<Merchandise />} />
                </Routes>
              </Layout>
            </CartProvider>
          </ProductModalProvider>
        </FavoritesProvider>
      </ReviewProvider>
    </Router>
  );
}
