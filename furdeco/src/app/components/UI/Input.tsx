"use client";
import React from "react";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fieldName: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  label,
  fieldName,
  error,
  type = "text",
  placeholder = "",
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={fieldName}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <span className="relative">
        <input
          {...props}
          type={type}
          id={fieldName}
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </span>
      <span className="text-red-400">{error}</span>
    </div>
  );
};

export default Input;
