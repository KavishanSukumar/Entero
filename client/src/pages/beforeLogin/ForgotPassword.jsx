import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ForgotPasswordForm from "../../components/forgotPassword/ForgotPasswordForm";




function ForgotPassword() {


  return (
    <div>
      <Header />
      
     
      <div className="mt-10 mb-20 w-screen">
        <ForgotPasswordForm />
      </div>
      
      <Footer />
    </div>
  );
}

export default ForgotPassword;
