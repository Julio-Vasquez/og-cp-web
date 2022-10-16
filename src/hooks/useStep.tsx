import { useState, ReactElement } from 'react'

type props = { steps: [{ component: ReactElement; key: number; title: string }] }

export const useStep = ({ steps }: props) => {
    const [currentStep, setCurrentStep] = useState(0)

    const isLastStep = currentStep === steps.length - 1

    const isFirstStep = currentStep === 0

    const next = () => {
        setCurrentStep(current => (!isLastStep ? current + 1 : current))
    }

    const prev = () => {
        setCurrentStep(current => (!isFirstStep ? current - 1 : current))
    }

    const resetStep = () => {
        setCurrentStep(0)
    }

    return {
        next,
        prev,
        resetStep,
        isFirstStep,
        isLastStep,
        current: currentStep,
        content: steps[currentStep].component,
    }
}

export default useStep
