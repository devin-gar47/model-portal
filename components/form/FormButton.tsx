import React from "react";

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  return (
    <button className="mt-3 py-2 px-4 bg-blue-600 text-white shadow-sm rounded-md hover:bg-blue-700 w-full">
      {text}
    </button>
  );
}
