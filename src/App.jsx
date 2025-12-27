// // App.jsx
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import ProductBenefits from './Components/ProductBenefits';
// import About from './Components/About';
// import Shop from './Components/Shop';
// import Footer from './Components/Footer';
// import WhatsAppButton from './Components/WhatsAppButton';

// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Home />
//       <ProductBenefits />
//       <Shop />
//       <About />
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// }

// export default App;


// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ProductBenefits from './Components/ProductBenefits';
import About from './Components/About';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';
import CultureFarmsSale from './Components/SalePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Sale Page - Standalone route */}
          <Route path="/sale" element={<CultureFarmsSale />} />
          
          {/* Main website route */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <ProductBenefits />
              <Shop />
              <About />
              <Footer />
              <WhatsAppButton />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;