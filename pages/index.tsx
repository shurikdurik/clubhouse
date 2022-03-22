import React, { useState } from "react";
import { WelcomeStep } from "../components/steps/WelcomeStep";
import { EnterNameStep } from "../components/steps/EnterNameStep";
import { GitHubStep } from "../components/steps/GitHubStep";
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep";
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep";
import { EnterCodeStep } from "../components/steps/EnterCodeStep";

const stepsCopmponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

export type UserData = {
  id: number;
  fullname: string;
  avatarUrl: string;
  isActive: number;
  username: string;
  phone: string;
  token?: string;
};

type MainContextTypes = {
  onNextStep: () => void;
  step: number;
};

export const MainContext = React.createContext<MainContextTypes>(
  {} as MainContextTypes
);

export default function Home() {
  const [step, setStep] = useState<number>(0);

  const Step = stepsCopmponents[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}
