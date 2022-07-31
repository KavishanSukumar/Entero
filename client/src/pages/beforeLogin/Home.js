import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LandingPage from '../../components/landingpage/LandingPage';



function Home() {
  return (
    <div>
        <Header />
        {/* Have to create a division and add the page content */}
        
        <LandingPage />
        <Footer />
    </div>
  )
}

export default Home