import React from "react";

interface FormErrorProps {
  errorMessage: string;
}

export default function FormError({ errorMessage }: FormErrorProps) {
  return (
    <p hidden={!errorMessage} className="text-red-600 mb-3">
      {errorMessage}
    </p>
  );
}
