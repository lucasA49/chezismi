import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Occasions from "../components/Occasions.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import CTA from "../Components/CTA.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Occasions />
      <CTA />
      <Newsletter />
      <Footer />
    </>
  );
}
