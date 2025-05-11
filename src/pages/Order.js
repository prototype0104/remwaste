import React, { useState } from "react";
import StepperHead from "../components/StepperHead";
import StepperFooter from "../components/StepperFooter";
import CardList from "../components/CardList";

export default function Order() {
  const [activeStep, setActiveStep] = useState(2);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="w-full mx-auto min-h-screen flex flex-col bg-primary text-light pt-5">
      <StepperHead activeStep={activeStep} setActiveStep={setActiveStep} />
      <main className="flex-grow flex items-center justify-center pb-32 px-5">
        
        <form className="w-full max-w-5xl">
          {activeStep === 2 ? (
            <CardList
              preselectedSkip={selectedSkip}
              onSelect={(skip) => setSelectedSkip(skip)}
              onTotalPriceChange={(price) => setTotalPrice(price)}
            />
          ) : (
            <div className="p-4 text-xl">Step {activeStep + 1} Content</div>
          )}
        </form>
      </main>

      <StepperFooter 
        activeStep={activeStep} 
        selectedSkip={selectedSkip} 
        totalPrice={totalPrice}
        setActiveStep={setActiveStep} 
      />
    </div>
  );
}
