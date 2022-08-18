import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Carousel from "../../components/landing/Carousel";
import Services from "../../components/landing/Services";
import Events from "../../components/landing/Events";
import AboutUs from "../../components/landing/AboutUs";
import ContactForm from "../../components/landing/ContactForm";


function Home() {
  return (
    <div>
      <Header />
      {/* Have to create a division and add the page content */}
      <div id="carousel">
      <Carousel />
      </div>
      <div id="services" >
      <Services />
      </div>
      
      <div id="events" >
      <Events />
      </div>
      <div id="aboutus">
      <AboutUs />
      </div>
      <div id="contactus">
      <ContactForm />
      </div>
      
      
      {/* Have to create a division and add the page content */}
      <Footer />
    </div>
  )
}

export default Home