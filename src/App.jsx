// App.jsx
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ProductBenefits from './Components/ProductBenefits';
import About from './Components/About';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <ProductBenefits />
      <About />
      <Shop />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;