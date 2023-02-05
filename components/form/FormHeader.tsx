import React from "react";

interface FormHeaderProps {
  text: string;
}

export default function FormHeader({ text }: FormHeaderProps) {
  return (
    <h2
      data-testid="form-header-text"
      className="mb-2 text-2xl text-black text-left w-full"
    >
      {text}
    </h2>
  );
}
