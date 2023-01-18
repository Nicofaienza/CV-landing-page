import Hero from "./layouts/Hero/Hero";
import "./index.css";
import Resume from "./layouts/Resume/Resume";
import Contact from "./layouts/Contact/Contact";
import Footer from "./layouts/Footer/Footer";

function App(): JSX.Element {
  return (
    <>
      <Hero />
      <div id="main-wrapper">
        <Resume />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
