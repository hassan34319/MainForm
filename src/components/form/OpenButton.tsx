import React from "react";

type Props = {
    setOpen : (open:boolean) =>void
};

function OpenButton({setOpen}: Props) {
  return (
    <button onClick={()=>setOpen(true)}className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
      Open Form
    </button>
  );
}

export default OpenButton;
