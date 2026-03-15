import React from "react";
import Calculator from "../components/Calculator/Calculator";

const CalculatorPage = () => {
  return (
    <div className="portfolio-main" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
