import React from "react";
import { 
  MapPinIcon, 
  TruckIcon, 
  TrashIcon, 
  CalendarIcon, 
  CreditCardIcon, 
  CheckIcon 
} from "@heroicons/react/24/outline";

const steps = [
  { label: "Postcode", icon: MapPinIcon, description: "Enter your location", title: "Enter your location" },
  { label: "Waste Type", icon: TrashIcon, description: "Choose the type of waste" , title: "Choose the type of waste" },
  { label: "Select Skip", icon: TruckIcon, description: "Select the skip size that best suits your needs" , title: "Choose Your Skip Size" },
  { label: "Permit Check", icon: CheckIcon, description: "Verify if a permit is required" , title: "Verify if a permit is required" },
  { label: "Choose Date", icon: CalendarIcon, description: "Select your collection date" , title: "Select your collection date" },
  { label: "Payment", icon: CreditCardIcon, description: "Complete the payment" , title: "Complete the payment"}
];

export default function StepperHead({ activeStep, setActiveStep }) {
  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <header className="top-0 w-full bg-primary py-4 flex flex-col justify-center items-center gap-4 text-light">
      

      <div className="hidden md:flex gap-4">
        {steps.map((step, index) => (
          <div key={index} className={`flex items-center gap-2 cursor-pointer ${activeStep >= index ? 'text-accent font-semibold' : 'text-light opacity-70'}`} onClick={() => setActiveStep(index)}>
            <step.icon className="h-6 w-6" />
            <span className="text-sm md:text-base">{step.label}</span>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 ${activeStep > index ? 'bg-accent' : 'bg-light opacity-40'}`} style={{ minWidth: '40px' }}></div>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden flex items-center justify-center gap-2">
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" stroke="#E1D89F" strokeWidth="4" fill="none" />
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="#D89216"
              strokeWidth="4"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset={`${100 - progress}`}
              className="transition-all duration-500"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">{activeStep + 1} / {steps.length}</span>
        </div>
        <span className="text-xl font-semibold text-light">{steps[activeStep].label}</span>
      </div>
      <div className="text-center mb-5 pt-5 px-4">
        <h2 className="text-3xl font-bold text-accent mb-2">{steps[activeStep].title}</h2>
        <p className="text-lg text-light/80">{steps[activeStep].description}</p>
      </div>
    </header>
  );
}