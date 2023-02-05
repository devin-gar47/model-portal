"use client";
import React, { ChangeEvent, useState } from "react";

interface FormInputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: (text: string) => void;
}

export default function FormInput({
  id,
  type,
  label,
  value,
  setValue,
  placeholder,
}: FormInputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const { value } = e.target;
    setValue(value);
  }

  return (
    <>
      <label
        data-testid="form-input-label"
        htmlFor={id}
        className="w-full text-left font-medium"
      >
        {label}
      </label>
      <input
        data-testid={`form-input-${id}`}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="block w-full p-4 m-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
      />
    </>
  );
}
