"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import FirstScreen from "@/components/form/FirstScreen";
import SecondScreen from "@/components/form/SecondScreen";
import ThirdScreen from "@/components/form/ThirdScreen";
import FourthScreen from "@/components/form/FourthScreen";

import { ArrowLeft, X } from "lucide-react";

// Change this to 'import { useSearchParams } from "react-router-dom" if working in react'
import { useSearchParams } from "next/navigation";
import { set } from "react-hook-form";
import OpenButton from "./OpenButton";
import { client } from "@/app/utils/client";
type FormProps = {};

const FormModal = ({}: FormProps) => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [cid, setCid] = useState("");
  const [loading,setLoading] = useState(false)
  const [inputs, setInputs] = useState({
    useCase: "",
    naam: "",
    gender: "",
    email: "",
    mobiel: "",
    postcode: "",
    hlasnummer: "",
    buildingType: "",
    gewenste: "manden",
    oppervlakte: "",
    type: "",
    toepassing: "",
    vloerverwarming: "geen",
    story: "",
  });
  const [errors, setErrors] = useState({
    useCase: "",
    naam: "",
    gender: "",
    email: "",
    mobiel: "",
    postcode: "",
    hlasnummer: "",
    buildingType: "",
    gewenste: "",
    oppervlakte: "",
    type: "",
    toepassing: "",
    vloerverwarming: "",
    story: "",
  })

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    setErrors({
      useCase: "",
    naam: "",
    gender: "",
    email: "",
    mobiel: "",
    postcode: "",
    hlasnummer: "",
    buildingType: "",
    gewenste: "",
    oppervlakte: "",
    type: "",
    toepassing: "",
    vloerverwarming: "",
    story: "",
    })
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    let newOpen = false;
    const widget = searchParams.get("widget");
    const cidParams = searchParams.get("cid");
    setCid(cidParams || "");
    if (widget && widget === "open") {
      newOpen = true;
    }
    setOpen(newOpen);
  }, [searchParams]);

  useEffect(() => {
    if (!open) {
      setCurrentStepIndex(0);
      setInputs({
        useCase: "",
        naam: "",
        gender: "",
        email: "",
        mobiel: "",
        postcode: "",
        hlasnummer: "",
        buildingType: "",
        gewenste: "manden",
        oppervlakte: "",
        type: "",
        toepassing: "",
        vloerverwarming: "geen",
        story: "",
      });
    }
  }, [open]);

  if (!open)
    return (
      // This button is responsible for opening form, please change it accordig to your need
      <OpenButton setOpen={setOpen} />
    );

  const { step, goToStep, isFirstStep, isLastStep, back, next, isThirdStep } =
    useMultiStepForm(
      [
        <FirstScreen inputs={inputs} handleInputChange={handleInputChange} errors={errors} />,
        <SecondScreen inputs={inputs} handleInputChange={handleInputChange} errors={errors} />,
        <ThirdScreen inputs={inputs} handleInputChange={handleInputChange} errors={errors} />,
        <FourthScreen />,
      ],
      currentStepIndex,
      setCurrentStepIndex
    );

  const handleFormSubmit = async () => {
    try {
      // Adding the cid field to the form data
      const formData = {
        ...inputs,
        cid: cid, // Replace 'your_cid_here' with your actual cid
      };

      // Create a new document in the 'form' collection
      const response = await client.create({
        _type: "form", // 'form' should match the name of your Sanity schema
        ...formData, // Spread all form data into the document
      });

      console.log("Form data posted to Sanity:", response);
      // Handle success if needed
    } catch (error) {
      console.error("Error posting form data to Sanity:", error);
      // Handle error if needed
    }
  };

  const storeContacts = async () => {
    const { naam, email, mobiel, postcode, gender, hlasnummer } = inputs; // Assuming inputs is the state containing these values

    const requestData = {
      name: naam,
      email: email,
      mobile: mobiel,
      postcode: postcode,
      gender: gender,
      homeNumber: hlasnummer,
    };

    try {
      const response = await fetch("/api/createContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to store contacts");
      }

      // Handle success response
      const data = await response.json();
      console.log("Contact stored successfully:", data);
    } catch (error) {
      console.error("Error storing contacts:");
      // Handle error
    }
  };
  console.log(errors)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentStepIndex === 0){
      if (inputs.useCase === ""){
        setErrors((prevErrors) => ({
          ...prevErrors,
          useCase: "Please select one of the options",
        }));
        return;
      }
      if (inputs.naam === ""){
        setErrors((prevErrors) => ({
          ...prevErrors,
          naam: "Please enter your naam",
        }));
        return;
      }
      if (inputs.gender === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          gender: "Please enter your gender",
        }));
        return;
      }
      if (inputs.email === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter your email",
        }));
        return;
      }
      if (inputs.mobiel === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobiel: "Please enter your mobiel",
        }));
        return;
      }
      if (inputs.postcode === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          postcode: "Please enter your postcode",
        }));
        return;
      }
      if (inputs.hlasnummer === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          hlasnummer: "Please enter your hlasnummer",
        }));
        return;
      }
    }

    if (currentStepIndex === 1) {
      if (inputs.buildingType === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          buildingType: "Please select one of the options",
        }));
        return;
      }
      if (inputs.gewenste === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          gewenste: "Please select one of the options",
        }));
        return;
      }
      if (inputs.oppervlakte === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          oppervlakte: "Please enter your oppervlakte",
        }));
        return;
      }
      if (inputs.type === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          type: "Please select one of the options",
        }));
        return;
      }
    }

    if (currentStepIndex === 2) {
      if (inputs.toepassing === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          toepassing: "Please select one of the options",
        }));
        return;
      }
      if (inputs.vloerverwarming === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          vloerverwarming: "Please select one of the options",
        }));
        return;
      }
    }

    if (isLastStep) {
      setOpen(false);
      return;
    }

    if (isFirstStep) {
      next()
      await storeContacts();
      return
    }

    if (isThirdStep) {
      setLoading(true);
      await handleFormSubmit();
      setLoading(false)
    }
    next();
  };

  return (
    <div className="w-[95%] md:w-[80%] max-w-[450px] lg:h-[70vh] lg:max-h-[800px] h-[800px] lg:min-h-[680px] my-5 rounded-xl shadow-lg bg-[#fdfdff]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between h-full w-full relative p-8 bg-[#fdfdff] rounded-xl"
      >
        {!isFirstStep && !isLastStep && (
          <button
            type="button"
            className="absolute -top-[14px] -left-3 h-[4rem] w-[4rem] rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
            onClick={back}
          >
            <ArrowLeft size={37} strokeWidth={2.6} color="#A8A7A9" />
          </button>
        )}
        <button
          type="button"
          className="absolute top-0 right-0 h-10 w-10 rounded-full shadow-xl flex items-center justify-center z-10 bg-white"
          onClick={back}
        >
          <X
            size={30}
            strokeWidth={2.6}
            color="#7E7D80"
            onClick={() => setOpen(false)}
          />
        </button>
        {step}
        <div className="w-full flex">
          {!isLastStep && (
            <button className="bg-[#0090ff] text-white w-full py-3 md:py-4 text-lg rounded-[5px]">
              {loading? "Loading..." : "Offerte aanvragen"}
            </button>
          )}
          {isLastStep && (
            <button className="bg-[#65c759] text-white w-full py-3 md:py-4 text-lg rounded-[5px]">
              Aanvraag gelukt 
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormModal;
