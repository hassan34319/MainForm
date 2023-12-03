import { Check, Mail, Phone } from "lucide-react";
import React from "react";

const FourthScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-around px-3">
      <div className="w-full flex items-center">
        <Check
          className="w-14 h-14 p-2 rounded-full bg-[#65c759] text-white"
          size={8}
          strokeWidth={5}
        />
        <div className="ml-8">
          <h2 className="text-black text-2xl font-extrabold text-start">
            Aanvrag gelukt
          </h2>
          <p className=" font-semibold text-black text-lg text-start">
            Bedankt vooor je aanvraag!
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5">
        <div>
          <h3 className="text-lg font-bold text-[#5A5D64] leading-snug">
            Email bevestiging
          </h3>
          <p className="font-light text-[#808189] leading-tight">
            Binnen enkele minuten ontvang je van ons een overzicht je offerte
            aanvraag.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#5A5D64] leading-snug">
            Prijsindicatie
          </h3>
          <p className="font-light text-[#808189] leading-tight">
            Op basis van je aanvrag kun je een prijsindicatie binnen 48 uur
            verwachten.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#5A5D64] leading-snug">
            Telefonisch contact
          </h3>
          <p className="font-light text-[#808189] leading-tight">
            Een van onze specialisten neemt contact met u op om de
            prijsindicatie te bespreken.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#5A5D64] leading-snug">
            Intake gesprek showroom
          </h3>
          <p className="font-light text-[#808189] leading-tight">
            U bent van harte welkom voor een in-take gesprek bij onze showroom
            onder het genot van eet bakje koffie.
          </p>
        </div>
      </div>

      <p className="text-xl text-[#5A5D64] font-medium tracking-tight">
        Direct contact?
      </p>
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex justify-between gap-4 flex-col md:flex-row">
          <button className="w-full md:w-1/2 border border-[#dbdbdb] py-3 shadow-sm flex gap-3 text-xs items-center px-4 ">
            <Phone size={15} />
            <span className="text-sky-400 font-semibold">020-3709151*</span>
          </button>
          <button className="w-full md:w-1/2 border border-[#dbdbdb] py-3 shadow-sm flex gap-3 text-xs items-center px-4 ">
            <Mail size={15} />
            <span className="text-sky-400 font-semibold">
              info@betonvloeren.nl
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthScreen;
