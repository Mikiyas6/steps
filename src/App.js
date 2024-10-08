import { Fragment, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    step >= 2 && setStep((step) => step - 1);
  }
  function handleNext() {
    step <= 2 && setStep((step) => step + 1);
  }
  return (
    <Fragment>
      <button
        className="close"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        type="text"
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 && "active"}>1</div>
            <div className={step === 2 && "active"}>2</div>
            <div className={step === 3 && "active"}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              type="text"
            >
              previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              type="text"
            >
              next
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
