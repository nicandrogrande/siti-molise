import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Territory } from "@/components/site/Territory";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ImperfettoHome from "@/pages/ImperfettoHome";
import ImperfettoPrivacy from "@/pages/ImperfettoPrivacy";

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Menu />
      <Territory />
      <Reviews />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/imperfetto" element={<ImperfettoHome />} />
          <Route path="/imperfetto/privacy" element={<ImperfettoPrivacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
