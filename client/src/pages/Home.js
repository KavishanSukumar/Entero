import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
        <Header />
        {/* Have to create a division and add the page content */}
        <h1>This is home page.Content eka...</h1>
        <Footer />
    </div>
  )
}

export default Home