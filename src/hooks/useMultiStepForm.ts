"use client"
import { ReactElement, useState } from "react";

export const useMultiStepForm = (steps: ReactElement[], currentStepIndex : number, setCurrentStepIndex : (num: any)=>void) => {


  const next = () => {
    setCurrentStepIndex((prevCurrentStepIndex : any) => {
      if (prevCurrentStepIndex === steps?.length - 1)
        return prevCurrentStepIndex;

      return prevCurrentStepIndex + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((prevCurrentStepIndex : any) => {
      if (prevCurrentStepIndex <= 0) return prevCurrentStepIndex;

      return prevCurrentStepIndex - 1;
    });
  };

  const goToStep = (step: number) => {
    setCurrentStepIndex(step);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps?.length - 1,
    isThirdStep : currentStepIndex === steps?.length - 2,

    next,
    back,
    goToStep,
  };
};
