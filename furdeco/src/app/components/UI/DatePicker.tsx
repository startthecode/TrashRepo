"use client";
import { DatePickerC } from "@/app/types/components/DatePicker";
import React, { useState } from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";

export const DatePickerInput: React.FC<DatePickerC> = ({
  errors,
  ...props
}) => {
  return (
    <>
      <DatePicker className="w-[500px] bg-green-500" {...props} />
      <span className="text-red-500">{errors}</span>
    </>
  );
};

export default DatePickerInput;
