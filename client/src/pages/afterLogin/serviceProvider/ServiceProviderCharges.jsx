import React, { useEffect } from "react";
import ServiceProviderHeader from "../../../components/header/ServiceProviderHeader";
import PaymentPackagesService from "../../../components/payment/PaymentPackagesService";
import ServiceProviderSidebar from "../../../components/sidebar/ServiceProviderSidebar";
import PaymentPackageServicePerbooking from "../../../components/payment/PaymentPackageServicePerbooking";
import axios from "axios";
const API_URL = "http://localhost:4000/api/serviceprovider/servicepayment/";
function ServiceProviderCharges({ userid }) {
  const [SystemPaymentType, setSystemPaymentType] = React.useState(null);
  useEffect(() => {
    getSystemPaymentType();
  }, [userid]);

  const getSystemPaymentType = async () => {
    const res = await axios.get(API_URL + userid);
    if (res.data.system_fee_type === 1) {
      setSystemPaymentType(<PaymentPackageServicePerbooking />);
    } else {
      setSystemPaymentType(<PaymentPackagesService />);
    }
  };
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        <ServiceProviderSidebar />
        <div className="md:ml-20 md:mt-14 w-screen">{SystemPaymentType}</div>
      </div>
    </div>
  );
}

export default ServiceProviderCharges;
