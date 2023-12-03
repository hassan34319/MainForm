import React, { ChangeEvent } from "react";
import ErrorTooltip from "./ErrorTooltip";

interface ThirdScreenProps {
  inputs: {
    toepassing: string;
    vloerverwarming: string;
    story: string;
  };
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  errors: Inputs
}

const ThirdScreen = ({ inputs, handleInputChange, errors }: ThirdScreenProps) => {
  const options = [
    "Selecteer toepassing",
    "Bakkerij",
    "Bedrijfsruimte",
    "Dans en discotheek",
    "ESD vloer",
    "Fabriek",
    "Garage",
    "Horeca",
    "Hotel",
    "Industrieel",
    "Kantoor",
    "Kapsalon",
    "Museum",
    "Magazijn",
    "Openbaargebouw",
    "Parkeergarage",
    "Professionele keuken",
    "Productie",
    "Renovatie gietvloer",
    "School",
    "Slagerij",
    "Supermarkt",
    "Sportcentrum",
    "Showroom",
    "Tandarts",
    "Werkplaats",
    "Woning",
    "Winkel",
    "Ziekenhuis",
  ];

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className=" mb-10">
        <h3 className="text-black text-2xl font-extrabold text-center">
          Wat laatste vragen..
        </h3>
        <p className="font-medium text-lg text-center">
          Vraag
          <span className="text-[#0090ff] font-medium"> vrijblijend </span>
          een offerte aan
        </p>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex">
          <div className="flex-1">
            <label className="flex w-full flex-col gap-1">
              <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-[18px]">
                Toepassing{" "}
                <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                  𝒊
                </span>
              </span>
              <ErrorTooltip label={errors?.toepassing} open={errors?.toepassing !== ''}>
              <select
                name="toepassing"
                value={inputs.toepassing}
                onChange={handleInputChange}
                className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-5 py-3 rounded-[6px]"
              >
                {options.map((option, index) => (
                  <option
                    key={index}
                    value={option.toLowerCase().replace(/\s/g, "-")}
                  >
                    {option}
                  </option>
                ))}
              </select>
              </ErrorTooltip>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex w-full flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-[18px]">
              Vloerverwarming{" "}
              <span className="h-4 w-4 bg-[#ededef] text-white rounded-full flex items-center justify-center text-xs">
                𝒊
              </span>
            </span>
            <ErrorTooltip label={errors?.vloerverwarming} open={errors?.vloerverwarming !== ''}>

            <select
              name="vloerverwarming"
              value={inputs.vloerverwarming}
              onChange={handleInputChange}
              className="drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-5 py-3 rounded-[6px]"
            >
              <option value="geen">Geen vloerwarming</option>
              <option value="ja" className="text-[15px]">
                Ja
              </option>
              <option value="nee" className="text-[15px]">
                Nee
              </option>
            </select>
              </ErrorTooltip>
          </label>
        </div>
        <div>
          <label className="flex w-full flex-col gap-1">
            <span className="flex items-center gap-2 text-sm pb-1 text-gray-500 font-medium pl-[18px]">
              Extra informatie{" "}
            </span>

            <textarea
              name="story"
              value={inputs.story}
              onChange={handleInputChange}
              rows={5}
              cols={33}
              className="resize-none drop-shadow-[0_0_3px_rgba(200,200,200,1)] w-full border-[2px] outline-none focus:border-[#0090ff] focus:ring-[#0090ff] border-[#f6f6f7] ring-[#f6f6f7] text-[#515766] placeholder-[#dadbdf] px-5 py-3 rounded-[6px]"
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
