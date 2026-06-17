import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

// Pages
import Landing from './pages/Landing';
import LanguageSelect from './pages/LanguageSelect';
import Login from './pages/Login';
import StreetMap from './pages/StreetMap';
import Theatre from './pages/Theatre';
import Radio from './pages/Radio';
import Library from './pages/Library';
import Food from './pages/Food';
import Vault from './pages/Vault';
import Subscription from './pages/Subscription';

// Shops
import Textile from './pages/shops/Textile';
import Fruits from './pages/shops/Fruits';
import IceCream from './pages/shops/IceCream';
import Sports from './pages/shops/Sports';
import Jewellery from './pages/shops/Jewellery';
import Cosmetic from './pages/shops/Cosmetic';
import Showroom from './pages/shops/Showroom';

const HIDDEN_NAV = ['/'];

function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
        <Navbar />
        <Routes>
          <Route path="/"              element={<Landing />} />
          <Route path="/language"      element={<LanguageSelect />} />
          <Route path="/login"         element={<Login />} />
          <Route path="/home"          element={<StreetMap />} />
          <Route path="/theatre"       element={<Theatre />} />
          <Route path="/radio"         element={<Radio />} />
          <Route path="/library"       element={<Library />} />
          <Route path="/food"          element={<Food />} />
          <Route path="/vault"         element={<Vault />} />
          <Route path="/subscription"  element={<Subscription />} />
          <Route path="/shop/textile"  element={<Textile />} />
          <Route path="/shop/fruits"   element={<Fruits />} />
          <Route path="/shop/icecream" element={<IceCream />} />
          <Route path="/shop/sports"   element={<Sports />} />
          <Route path="/shop/jewellery" element={<Jewellery />} />
          <Route path="/shop/cosmetic" element={<Cosmetic />} />
          <Route path="/shop/showroom" element={<Showroom />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
