import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";



function Home() {
  return (
    <div>
        <Header />
        {/* Have to create a division and add the page content */}
        
        <div>
          <p>Hello world</p>
        </div>
        <Footer />
    </div>
  )
}

export default Home