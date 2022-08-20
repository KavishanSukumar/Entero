import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Carousel from "../../components/landing/Carousel";
import Services from "../../components/landing/Services";
import Events from "../../components/landing/Events";
import AboutUs from "../../components/landing/AboutUs";
import ContactForm from "../../components/landing/ContactForm";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Header />
      {/* Have to create a division and add the page content */}
      <div data-aos="fade-in">
        <Carousel />
      </div>
      <div data-aos="slide-up">
        <Services />
      </div>
      <div data-aos="slide-up">
        <Events />
      </div>
      <div data-aos="slide-up">
        <AboutUs />
      </div>
      <div data-aos="slide-up">
        <ContactForm />
      </div>
      {/* Have to create a division and add the page content */}
      <Footer />
    </div>
  );
}

export default Home;
