import "./App.scss";
import Navbar from "./components/Navbar";
import LandPage from "./components/LandPage";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
 

function App() {
  return (
    <div className="App">
      <Navbar />

      <LandPage />

      <Products />

      <About />

      <Contact />
 
      <Footer />
    </div>
  );
}

export default App;
