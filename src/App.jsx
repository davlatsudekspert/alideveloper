import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import WhyMe from "./components/WhyMe";
import Services from "./components/Services";
import Calculator from "./components/Calculator";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export default function App() {
  return (
    <div className="font-body">
      <ScrollProgress />
      <Header />
      <Hero />
      <Stack />
      <WhyMe />
      <Services />
      <Calculator />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}
