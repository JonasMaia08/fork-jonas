import React, { useState } from "react";

interface FormStepProps {
  step: number;
  title: string;
  content: React.ReactNode;
}

interface MultipartFormProps {
  steps: FormStepProps[];
  onSubmit: () => void;
}

const MultipartForm: React.FC<MultipartFormProps> = ({ steps, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#F4F6FF] p-10 border border-black">
      {/* w-full p-2 border border-black  */}
      <h1 className="text-2xl font-bold text-left mb-4">Cadastre-se</h1>
      <p className="text-gray-500 mb-6">
        Crie sua conta para começar
      </p>

      {/* Steps Indicator */}
      <div className="flex justify-start space-x-4 mb-8">
        {steps.map((step) => (
          <div
            key={step.step}
            className={`w-full rounded-full p-1 border border-black ${
              step.step <= currentStep ? "bg-[#10375c]" : "bg-[#f48716]"
            }`}
          ></div>
        ))}
      </div>

      {/* Form Content */}
      <div className="mb-6">{steps[currentStep - 1].content}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={handlePrevious}
          className="px-7 py-2 border-2 border-black text-white rounded-sm bg-[#10375c]"
          disabled={currentStep === 1}
        >
          Anterior
        </button>
        {currentStep === steps.length ? (
          <button
            type="button"
            onClick={onSubmit}
            className="px-7 py-2 border-2 border-black font-bold rounded-sm bg-[#f48716]"
          >
            Finalizar
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="px-7 py-2 border-2 border-black font-bold rounded-sm bg-[#f48716]"
          >
            Próximo
          </button>
        )}
      </div>
    </div>
  );
};

export default MultipartForm;
