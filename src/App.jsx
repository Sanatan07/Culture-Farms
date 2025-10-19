// App.jsx
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <About />
      <Shop />
      <Footer />
    </div>
  );
}

export default App; 