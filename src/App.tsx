import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Goal from "./components/Goal";
import Objectives from "./components/Objectives";
import Programs from "./components/Programs";
import Initiatives from "./components/Initiatives";
import Entrepreneurship from "./components/Entrepreneurship";
import EnvironmentalAction from "./components/EnvironmentalAction";
import SDGSection from "./components/SDGSection";
import Partnerships from "./components/Partnerships";
import Leadership from "./components/Leadership";
import { YouthCTA, FinalCTA } from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Vision />
      <Goal />
      <Objectives />
      <Programs />
      <Initiatives />
      <Entrepreneurship />
      <EnvironmentalAction />
      <SDGSection />
      <Partnerships />
      <Leadership />
      <YouthCTA />
      <FinalCTA />
      <Footer />
    </>
  );
}
