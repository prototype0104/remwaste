import React from "react";

export default function StepperFooter({ activeStep, selectedSkip, totalPrice, setActiveStep }) {
  const handlePrev = () => activeStep > 0 && setActiveStep(activeStep - 1);
  const handleNext = () => setActiveStep((prev) => Math.min(5, prev + 1));

  return (
    <footer className="fixed bottom-0 w-full bg-secondary text-light shadow-[0px_-3px_10px_rgba(0,0,0,0.15)] p-4">
      <div className="max-w-[1024px] mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        <div className="text-light flex justify-between w-full md:w-auto md:flex-1">
          {activeStep === 2 && totalPrice ? (
            <div className="flex justify-between w-full md:gap-8">
              <span className="text-left">Skip: <strong>{selectedSkip.size} Yard</strong></span>
              <span className="text-right">Total: <strong className="text-accent">£{totalPrice.toFixed(2)}</strong></span>
            </div>
          ) : (
            <span className="text-sm">Step {activeStep + 1} Description</span>
          )}
        </div>

        <div className="flex gap-4 w-full md:w-auto justify-between">
          <button onClick={handlePrev} disabled={activeStep === 0} className={`bg-primary text-light px-4 py-2 rounded ${activeStep === 0 ? 'hidden' : 'hover:bg-accent hover:text-primary'}`}>Back</button>
          <button onClick={handleNext} className="bg-accent text-primary px-4 py-2 rounded hover:bg-light transition">{activeStep === 5 ? 'Pay' : 'Continue'}</button>
        </div>
      </div>
    </footer>
  );
}