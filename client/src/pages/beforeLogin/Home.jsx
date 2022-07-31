import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/landing/Carousel";
import Services from "../../components/landing/Services";
import Events from "../../components/landing/Events";

function Home() {
  return (
    <div>
      <Header />
      {/* Have to create a division and add the page content */}
      <Carousel />
      <Services />
      <Events />
      {/* Have to create a division and add the page content */}
      <Footer />
    </div>
  );
}

export default Home;
