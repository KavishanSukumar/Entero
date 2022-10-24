import React from "react";
import CustomerHeader from "../../../components/header/CustomerHeader";
import PortFolio from "../../../components/portfolio/PortFolio";

function CustomerServicePortfolio({ userid }) {
  return (
    <div>
      <CustomerHeader />
      <div className="mt-14">
        <PortFolio myuserid={userid} />
      </div>
    </div>
  );
}

export default CustomerServicePortfolio;
