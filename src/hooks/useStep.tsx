import { useState } from 'react'

const useStep = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const isLastStep = currentStep === steps.length - 1

  const isFirstStep = currentStep === 0

  const next = () => {
    setCurrentStep(current => (!isLastStep ? current + 1 : current))
  }

  const prev = () => {
    setCurrentStep(current => (!isFirstStep ? current - 1 : current))
  }

  return {
    next,
    prev,
    isFirstStep,
    isLastStep,
    current: currentStep,
    content: steps[currentStep].component,
  }
}

export default useStep
