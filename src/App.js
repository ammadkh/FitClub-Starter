import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Join from "./components/Join/Join";
import Plan from "./components/Plans/Plan";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonial from "./components/Testimonials/Testimonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
