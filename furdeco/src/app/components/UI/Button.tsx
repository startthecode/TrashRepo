"use client";
import { buttonVarients } from "@/app/types/components/Button";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
  text: string;
  loading?: boolean;
  varient: buttonVarients;
}
const Button: React.FC<Props> = ({
  type = "button",
  text,
  loading = false,
  ...props
}) => {
  return (
    <div>
      <button
        type={type}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        {...props}
      >
        {!loading ? text || "button" : "...loading"}
      </button>
    </div>
  );
};

export default Button;
