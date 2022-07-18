import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Newsletter from "./Components/Newsletter";
import Topstories from "./Components/Topstories";
import Guide from "./Components/Guide";
import Learn from "./Components/Learn";
import Latest from "./Components/Latest";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter />
      <Topstories />
      <Guide />
      <Learn />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
